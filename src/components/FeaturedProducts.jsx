import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCart } from '../context/CartContext';

const { FiShoppingCart, FiHeart, FiStar, FiTruck } = FiIcons;

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Premium Dried Mango',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1605027990121-cbae9282f5e3?w=400&h=400&fit=crop&crop=center',
      rating: 4.9,
      reviews: 127,
      badge: 'Best Seller',
      description: 'Sweet, chewy organic mango slices from Queensland farms'
    },
    {
      id: 2,
      name: 'Organic Apple Chips',
      price: 19.99,
      originalPrice: 24.99,
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop&crop=center',
      rating: 4.8,
      reviews: 89,
      badge: 'New',
      description: 'Crispy apple chips with natural sweetness, no added sugar'
    },
    {
      id: 3,
      name: 'Tropical Mix',
      price: 32.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop&crop=center',
      rating: 4.9,
      reviews: 203,
      badge: 'Premium',
      description: 'Exotic blend of pineapple, mango, and dragon fruit'
    },
    {
      id: 4,
      name: 'Strawberry Delights',
      price: 22.99,
      originalPrice: 27.99,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop&crop=center',
      rating: 4.7,
      reviews: 156,
      badge: 'Limited',
      description: 'Premium freeze-dried strawberries bursting with flavor'
    }
  ];

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of organic hydrated fruits, 
            carefully selected and processed to maintain maximum nutrition and taste.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={`/product/${product.id}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Product Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Best Seller' ? 'bg-orange-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50">
                    <SafeIcon icon={FiHeart} className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>

                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <SafeIcon icon={FiTruck} className="w-4 h-4 text-green-600" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">
                          ${product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      </div>
                      
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-xl hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                      >
                        <SafeIcon icon={FiShoppingCart} className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            View All Products
            <SafeIcon icon={FiShoppingCart} className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;