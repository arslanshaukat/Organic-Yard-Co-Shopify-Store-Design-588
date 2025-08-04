# Deployment Instructions for Organic Yard Co E-commerce App

This document provides step-by-step instructions for deploying the Organic Yard Co e-commerce application on your VPS.

## VPS Requirements

### Minimum Specifications:
- **CPU**: 2 cores (4 cores recommended for better performance)
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 40GB SSD (more if you'll store many product images)
- **Operating System**: Ubuntu 20.04 LTS or Ubuntu 22.04 LTS
- **Bandwidth**: At least 2TB monthly transfer for moderate traffic

### Recommended VPS Providers:
- Digital Ocean
- Linode
- Vultr
- AWS Lightsail
- OVH

## Step 1: Initial Server Setup

### 1.1. Connect to Your VPS via SSH
```bash
ssh root@your_server_ip
```

### 1.2. Update System Packages
```bash
apt update && apt upgrade -y
```

### 1.3. Create a Non-Root User
```bash
adduser yourusername
usermod -aG sudo yourusername
```

### 1.4. Set Up Basic Firewall
```bash
ufw allow OpenSSH
ufw enable
```

### 1.5. Switch to the New User
```bash
su - yourusername
```

## Step 2: Install Required Software

### 2.1. Install Node.js and npm
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node -v  # Should show v18.x.x
npm -v   # Should show 8.x.x or higher
```

### 2.2. Install MongoDB
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Create list file for MongoDB
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Install MongoDB
sudo apt update
sudo apt install -y mongodb-org

# Start and enable MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify MongoDB is running
sudo systemctl status mongod
```

### 2.3. Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### 2.4. Install Nginx
```bash
sudo apt install -y nginx
sudo ufw allow 'Nginx Full'
```

## Step 3: Clone and Set Up the Application

### 3.1. Install Git
```bash
sudo apt install -y git
```

### 3.2. Clone Your Repository
```bash
mkdir -p ~/apps
cd ~/apps
git clone https://github.com/yourusername/organic-yard-co.git
cd organic-yard-co
```

### 3.3. Set Up Backend
```bash
cd backend
npm install

# Create .env file (edit with your actual values)
cp .env.example .env
nano .env
```

Update the .env file with your production values:
```
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb://localhost:27017/organic-yard-co
JWT_SECRET=your_strong_secret_key_here
JWT_EXPIRE=30d
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
EMAIL_SERVICE=gmail
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@organicyardco.com.au
```

### 3.4. Set Up Frontend
```bash
cd ../frontend
npm install

# Create .env file for production
cat > .env.production << EOL
VITE_API_URL=https://api.yourdomain.com/api
EOL

# Build the frontend
npm run build
```

## Step 4: Set Up PM2 for the Backend

```bash
cd ~/apps/organic-yard-co/backend
pm2 start server.js --name "organic-backend"
pm2 startup
pm2 save
```

## Step 5: Configure Nginx

### 5.1. Create Nginx Configuration for the API
```bash
sudo nano /etc/nginx/sites-available/organic-api
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5.2. Create Nginx Configuration for the Frontend
```bash
sudo nano /etc/nginx/sites-available/organic-frontend
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /home/yourusername/apps/organic-yard-co/frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000";
    }
}
```

### 5.3. Enable the Nginx Configurations
```bash
sudo ln -s /etc/nginx/sites-available/organic-api /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/organic-frontend /etc/nginx/sites-enabled/
sudo nginx -t  # Test the configuration
sudo systemctl restart nginx
```

## Step 6: Set Up SSL with Let's Encrypt

### 6.1. Install Certbot
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 6.2. Obtain SSL Certificates
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
sudo certbot --nginx -d api.yourdomain.com
```

## Step 7: Initialize the Database

```bash
cd ~/apps/organic-yard-co/backend
node seed/seed.js
```

## Step 8: Set Up Automatic Updates

### 8.1. Create Update Script
```bash
nano ~/update_app.sh
```

Add the following content:
```bash
#!/bin/bash
cd ~/apps/organic-yard-co
git pull

# Update backend
cd backend
npm install
pm2 restart organic-backend

# Update frontend
cd ../frontend
npm install
npm run build

echo "Application updated successfully at $(date)"
```

### 8.2. Make the Script Executable
```bash
chmod +x ~/update_app.sh
```

### 8.3. Set Up a Cron Job (Optional)
```bash
crontab -e
```

Add this line to update weekly:
```
0 2 * * 0 /home/yourusername/update_app.sh >> /home/yourusername/app_updates.log 2>&1
```

## Step 9: Set Up MongoDB Backups

### 9.1. Create Backup Script
```bash
nano ~/backup_db.sh
```

Add the following content:
```bash
#!/bin/bash
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/home/yourusername/db_backups"

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Create backup
mongodump --db organic-yard-co --out $BACKUP_DIR/$TIMESTAMP

# Remove backups older than 30 days
find $BACKUP_DIR -type d -mtime +30 -exec rm -rf {} \;

echo "Database backup completed at $(date)"
```

### 9.2. Make the Script Executable
```bash
chmod +x ~/backup_db.sh
```

### 9.3. Set Up a Cron Job for Daily Backups
```bash
crontab -e
```

Add this line:
```
0 1 * * * /home/yourusername/backup_db.sh >> /home/yourusername/db_backups.log 2>&1
```

## Step 10: Set Up Monitoring (Optional but Recommended)

### 10.1. Configure PM2 Monitoring
```bash
pm2 install pm2-server-monit
```

### 10.2. Set Up PM2 Plus Monitoring (Optional)
```bash
pm2 plus
```

## Step 11: Configure Log Rotation

```bash
sudo nano /etc/logrotate.d/organic-yard-co
```

Add the following:
```
/home/yourusername/apps/organic-yard-co/backend/logs/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 yourusername yourusername
}
```

## Step 12: Test Your Deployment

1. Visit your frontend at `https://yourdomain.com`
2. Test the API at `https://api.yourdomain.com/api/products`
3. Verify that all features work correctly:
   - User registration and login
   - Product browsing and filtering
   - Shopping cart functionality
   - Checkout process
   - Order history
   - Admin dashboard (if applicable)

## Troubleshooting

### Check Application Logs
```bash
pm2 logs organic-backend
```

### Check Nginx Logs
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Check MongoDB Logs
```bash
sudo tail -f /var/log/mongodb/mongod.log
```

### Restart Services
```bash
pm2 restart organic-backend
sudo systemctl restart nginx
sudo systemctl restart mongod
```

## Maintenance Tips

1. **Regular Updates**: Keep your server up-to-date with security patches
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Monitor Disk Space**: Regularly check disk usage
   ```bash
   df -h
   ```

3. **Monitor System Resources**: Use tools like `htop` to monitor CPU and memory usage
   ```bash
   sudo apt install htop
   htop
   ```

4. **Database Optimization**: Periodically optimize MongoDB
   ```bash
   mongosh
   db.runCommand({ compact: 'products' })
   ```

5. **Backup Verification**: Periodically verify your backups by restoring them in a test environment

## Security Best Practices

1. **Keep Software Updated**: Regularly update all software components
2. **Use Strong Passwords**: Ensure all services use strong, unique passwords
3. **Implement Rate Limiting**: Protect against brute force attacks
4. **Regular Security Audits**: Periodically audit your server for vulnerabilities
5. **Monitor for Suspicious Activity**: Regularly check logs for unusual patterns

By following these instructions, you should have a fully functional Organic Yard Co e-commerce application deployed on your VPS, with proper security, monitoring, and maintenance procedures in place.