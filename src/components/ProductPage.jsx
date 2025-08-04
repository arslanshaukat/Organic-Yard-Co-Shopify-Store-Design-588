import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCart } from '../context/CartContext';
import ProductRecommendations from './ProductRecommendations';

const { FiArrowLeft, FiStar, FiTruck, FiShield, FiHeart, FiShare2, FiPlus, FiMinus } = FiIcons;

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id),
    name: 'Premium Dried Mango',
    price: 24.99,
    originalPrice: 29.99,
    images: [
      'https://images.unsplash.com/photo-1605027990121-cbae9282f5e3?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=600&fit=crop&crop=center'
    ],
    rating: 4.9,
    reviews: 127,
    description: 'Our premium dried mango slices are made from the finest Queensland mangoes, carefully selected at peak ripeness and dried using our proprietary hydration process. Each bite delivers the perfect balance of sweetness and tropical flavor, packed with essential vitamins and minerals.',
    features: [
      '100% Organic Queensland Mangoes',
      'No Added Sugar or Preservatives',
      'Rich in Vitamin C and Fiber',
      'Gluten-Free and Vegan',
      'Resealable Packaging'
    ],
    nutritionFacts: {
      servingSize: '30g (1/4 cup)',
      calories: 120,
      protein: '1g',
      carbs: '30g',
      fiber: '3g',
      sugar: '26g'
    },
    inStock: true,
    category: 'Dried Fruits'
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // You could add a toast notification here
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
        >
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Products</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Product Title & Rating */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon
                      key={i}
                      icon={FiStar}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <SafeIcon icon={FiMinus} className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
                  >
                    <SafeIcon icon={FiPlus} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-xl hover:border-red-400 hover:text-red-500 transition-colors">
                  <SafeIcon icon={FiHeart} className="w-6 h-6" />
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-xl hover:border-blue-400 hover:text-blue-500 transition-colors">
                  <SafeIcon icon={FiShare2} className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiTruck} className="w-5 h-5 text-green-600" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <SafeIcon icon={FiShield} className="w-5 h-5 text-green-600" />
                <span>Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="text-green-600">🇦🇺</span>
                <span>Made in Australia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nutrition Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Nutrition Facts</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-600 mb-4">Per serving ({product.nutritionFacts.servingSize})</p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Calories</span>
                  <span>{product.nutritionFacts.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein</span>
                  <span>{product.nutritionFacts.protein}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Carbohydrates</span>
                  <span>{product.nutritionFacts.carbs}</span>
                </div>
                <div className="flex justify-between">
                  <span>Dietary Fiber</span>
                  <span>{product.nutritionFacts.fiber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sugars</span>
                  <span>{product.nutritionFacts.sugar}</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Health Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Rich in Vitamin C for immune support</li>
                <li>• High in antioxidants</li>
                <li>• Good source of dietary fiber</li>
                <li>• Natural energy boost</li>
                <li>• Supports digestive health</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Recommendations */}
      <ProductRecommendations currentProductId={product.id} />
    </div>
  );
};

export default ProductPage;