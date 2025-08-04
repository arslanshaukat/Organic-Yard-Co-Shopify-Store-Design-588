import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } = FiIcons;

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com/organicyardco', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://instagram.com/organicyardco', label: 'Instagram' },
    { icon: FiTwitter, href: 'https://twitter.com/organicyardco', label: 'Twitter' },
    { icon: FiLinkedin, href: 'https://linkedin.com/company/organicyardco', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/contact#faq' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' }
  ];

  const categories = [
    { name: 'Dried Fruits', href: '/products?category=Tropical%20Fruits' },
    { name: 'Tropical Mix', href: '/products?category=Mixed%20Packs' },
    { name: 'Berry Blends', href: '/products?category=Berry%20Selection' },
    { name: 'Citrus Collection', href: '/products?category=Citrus%20Collection' },
    { name: 'Seasonal Specials', href: '/products?category=Seasonal' },
    { name: 'Gift Boxes', href: '/products?category=Gift%20Boxes' }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would connect to an email service
    alert('Thank you for subscribing to our newsletter!');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Organic Yard Co</h3>
                <p className="text-sm text-gray-400">100% Australian Made</p>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Bringing you the finest organic hydrated fruits from Australian farms.
              Quality, sustainability, and taste in every bite.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-green-400" />
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  123 Organic Street, Sydney NSW 2000
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-green-400" />
                <a href="tel:1800674264" className="text-gray-300 hover:text-green-400 transition-colors">
                  1800 ORGANIC (1800 674 264)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-green-400" />
                <a href="mailto:hello@organicyardco.com.au" className="text-gray-300 hover:text-green-400 transition-colors">
                  hello@organicyardco.com.au
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest products, offers, and organic tips.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
            {/* Certifications */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">Certified by:</p>
              <div className="flex space-x-4">
                <a href="/certifications" className="bg-gray-800 px-3 py-2 rounded text-xs font-medium hover:bg-gray-700 transition-colors">
                  🌿 ORGANIC
                </a>
                <a href="/australian-made" className="bg-gray-800 px-3 py-2 rounded text-xs font-medium hover:bg-gray-700 transition-colors">
                  🇦🇺 AUSTRALIAN
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Organic Yard Co. All rights reserved. ABN: 12 345 678 901
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;