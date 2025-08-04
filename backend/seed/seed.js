import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import Category from '../models/categoryModel.js';
import Content from '../models/contentModel.js';
import connectDB from '../config/db.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Sample data
const users = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

const categories = [
  {
    name: 'Tropical Fruits',
    description: 'Exotic fruits from tropical regions',
    image: '/uploads/category-tropical.jpg',
  },
  {
    name: 'Berry Selection',
    description: 'Sweet and tart berries',
    image: '/uploads/category-berries.jpg',
  },
  {
    name: 'Mixed Packs',
    description: 'Variety packs with multiple fruit types',
    image: '/uploads/category-mixed.jpg',
  },
  {
    name: 'Crispy Snacks',
    description: 'Crunchy fruit chips and snacks',
    image: '/uploads/category-crispy.jpg',
  },
  {
    name: 'Citrus Collection',
    description: 'Tangy citrus fruits',
    image: '/uploads/category-citrus.jpg',
  },
];

const seedProducts = async (adminUser, categoryDocs) => {
  const tropicalCategory = categoryDocs.find(c => c.name === 'Tropical Fruits')._id;
  const berryCategory = categoryDocs.find(c => c.name === 'Berry Selection')._id;
  const mixedCategory = categoryDocs.find(c => c.name === 'Mixed Packs')._id;
  const crispyCategory = categoryDocs.find(c => c.name === 'Crispy Snacks')._id;
  const citrusCategory = categoryDocs.find(c => c.name === 'Citrus Collection')._id;

  const products = [
    {
      name: 'Premium Dried Mango',
      price: 24.99,
      originalPrice: 29.99,
      images: [
        '/uploads/mango-1.jpg',
        '/uploads/mango-2.jpg',
        '/uploads/mango-3.jpg',
      ],
      category: tropicalCategory,
      description: 'Sweet, chewy organic mango slices from Queensland farms',
      features: [
        '100% Organic Queensland Mangoes',
        'No Added Sugar or Preservatives',
        'Rich in Vitamin C and Fiber',
        'Gluten-Free and Vegan',
        'Resealable Packaging',
      ],
      rating: 4.9,
      numReviews: 127,
      countInStock: 50,
      badge: 'Best Seller',
      nutritionFacts: {
        servingSize: '30g (1/4 cup)',
        calories: 120,
        protein: '1g',
        carbs: '30g',
        fiber: '3g',
        sugar: '26g',
      },
      user: adminUser._id,
    },
    {
      name: 'Organic Apple Chips',
      price: 19.99,
      originalPrice: 24.99,
      images: [
        '/uploads/apple-1.jpg',
        '/uploads/apple-2.jpg',
      ],
      category: crispyCategory,
      description: 'Crispy apple chips with natural sweetness, no added sugar',
      features: [
        '100% Organic Apples',
        'Crispy Texture',
        'No Added Sugar',
        'High in Fiber',
        'Perfect Healthy Snack',
      ],
      rating: 4.8,
      numReviews: 89,
      countInStock: 75,
      badge: 'New',
      nutritionFacts: {
        servingSize: '28g (1 oz)',
        calories: 110,
        protein: '1g',
        carbs: '26g',
        fiber: '4g',
        sugar: '22g',
      },
      user: adminUser._id,
    },
    {
      name: 'Tropical Mix',
      price: 32.99,
      originalPrice: 39.99,
      images: [
        '/uploads/tropical-1.jpg',
        '/uploads/tropical-2.jpg',
      ],
      category: mixedCategory,
      description: 'Exotic blend of pineapple, mango, and dragon fruit',
      features: [
        'Premium Tropical Fruit Selection',
        'High in Antioxidants',
        'No Artificial Additives',
        'Supports Immune Health',
        'Eco-Friendly Packaging',
      ],
      rating: 4.9,
      numReviews: 203,
      countInStock: 30,
      badge: 'Premium',
      nutritionFacts: {
        servingSize: '35g',
        calories: 130,
        protein: '1g',
        carbs: '32g',
        fiber: '3g',
        sugar: '28g',
      },
      user: adminUser._id,
    },
    {
      name: 'Strawberry Delights',
      price: 22.99,
      originalPrice: 27.99,
      images: [
        '/uploads/strawberry-1.jpg',
        '/uploads/strawberry-2.jpg',
      ],
      category: berryCategory,
      description: 'Premium freeze-dried strawberries bursting with flavor',
      features: [
        'Organic Australian Strawberries',
        'Freeze-Dried to Preserve Nutrients',
        'No Added Sugar',
        'Rich in Antioxidants',
        'Perfect for Snacking or Baking',
      ],
      rating: 4.7,
      numReviews: 156,
      countInStock: 45,
      badge: 'Limited',
      nutritionFacts: {
        servingSize: '25g',
        calories: 90,
        protein: '1g',
        carbs: '21g',
        fiber: '4g',
        sugar: '16g',
      },
      user: adminUser._id,
    },
    {
      name: 'Citrus Medley',
      price: 29.99,
      originalPrice: 34.99,
      images: [
        '/uploads/citrus-1.jpg',
        '/uploads/citrus-2.jpg',
      ],
      category: citrusCategory,
      description: 'Tangy mix of orange, lemon and lime pieces',
      features: [
        'Organic Citrus Selection',
        'High in Vitamin C',
        'Supports Immune System',
        'Refreshing Tangy Flavor',
        'No Artificial Preservatives',
      ],
      rating: 4.7,
      numReviews: 78,
      countInStock: 60,
      badge: 'Vitamin C',
      nutritionFacts: {
        servingSize: '30g',
        calories: 105,
        protein: '1g',
        carbs: '25g',
        fiber: '3g',
        sugar: '20g',
      },
      user: adminUser._id,
    },
  ];

  await Product.insertMany(products);
  console.log('Products seeded!');
};

const seedContent = async () => {
  const content = [
    {
      type: 'hero',
      title: 'Pure Hydrated Organic Fruits',
      subtitle: 'Experience the natural goodness of Australia\'s finest organic fruits',
      content: 'Experience the natural goodness of Australia\'s finest organic fruits, carefully hydrated to preserve nutrients and deliver exceptional taste. From our yard to yours.',
      image: '/uploads/hero-image.jpg',
      order: 1,
    },
    {
      type: 'benefit',
      title: '100% Organic Certified',
      subtitle: 'Pure and Natural',
      content: 'All our fruits are certified organic by Australian standards, ensuring no harmful chemicals or pesticides.',
      image: '/uploads/benefit-organic.jpg',
      order: 1,
    },
    {
      type: 'benefit',
      title: 'Nutrient Rich',
      subtitle: 'Packed with Goodness',
      content: 'Our hydration process preserves essential vitamins, minerals, and antioxidants for maximum health benefits.',
      image: '/uploads/benefit-nutrients.jpg',
      order: 2,
    },
    {
      type: 'benefit',
      title: 'Australia-Wide Shipping',
      subtitle: 'Delivered to Your Door',
      content: 'Free shipping on orders over $50. Fresh delivery from Sydney to your doorstep across Australia.',
      image: '/uploads/benefit-shipping.jpg',
      order: 3,
    },
    {
      type: 'about',
      title: 'Our Story',
      subtitle: 'From Farm to Table',
      content: 'Founded in the heart of Sydney, Organic Yard Co was born from a passion for bringing Australia\'s finest organic fruits directly to your table. We believe that everyone deserves access to premium, nutrient-rich fruits that taste as good as they are for you.',
      image: '/uploads/about-story.jpg',
      order: 1,
    },
    {
      type: 'testimonial',
      title: 'Sarah Mitchell',
      subtitle: 'Melbourne, VIC',
      content: 'Absolutely love the quality of these organic fruits! The mango slices are my favorite - they taste like they\'re fresh from the tree. Plus, knowing they\'re 100% Australian made makes me feel good about supporting local.',
      image: '/uploads/testimonial-1.jpg',
      order: 1,
      metadata: {
        rating: 5
      }
    },
    {
      type: 'testimonial',
      title: 'Michael Chen',
      subtitle: 'Brisbane, QLD',
      content: 'As a busy dad, these are perfect for the kids\' lunchboxes. They\'re healthy, convenient, and the kids actually ask for them! The tropical mix is a family favorite.',
      image: '/uploads/testimonial-2.jpg',
      order: 2,
      metadata: {
        rating: 5
      }
    },
    {
      type: 'policy',
      title: 'Shipping Policy',
      subtitle: 'Delivery Information',
      content: 'We offer standard shipping (3-5 business days) and express shipping (1-2 business days) across Australia. Free standard shipping is available for orders over $50.',
      order: 1,
    },
    {
      type: 'policy',
      title: 'Return Policy',
      subtitle: 'Our Guarantee',
      content: 'We offer a 100% satisfaction guarantee. If you\'re not completely satisfied with your purchase, you can return it within 30 days for a full refund or replacement.',
      order: 2,
    },
    {
      type: 'faq',
      title: 'How long does shipping take?',
      content: 'We offer standard shipping (3-5 business days) and express shipping (1-2 business days) across Australia. Free standard shipping is available for orders over $50.',
      order: 1,
    },
    {
      type: 'faq',
      title: 'Are your products 100% organic?',
      content: 'Yes, all our products are certified organic by Australian standards. We work with farms that follow strict organic farming practices without the use of synthetic pesticides or fertilizers.',
      order: 2,
    },
  ];

  await Content.insertMany(content);
  console.log('Content seeded!');
};

// Import data
const importData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await Content.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0];
    console.log('Users seeded!');

    // Insert categories
    const categoryDocs = await Category.insertMany(categories);
    console.log('Categories seeded!');

    // Insert products
    await seedProducts(adminUser, categoryDocs);

    // Insert content
    await seedContent();

    console.log('Data Import Complete!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Delete data
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    await Content.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run script based on command line argument
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}