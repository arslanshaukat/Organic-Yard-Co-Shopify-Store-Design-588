import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCart } from '../context/CartContext';

const { FiShoppingCart, FiHeart, FiStar, FiFilter, FiGrid, FiList, FiSearch, FiChevronDown, FiX } = FiIcons;

const ProductsPage = () => {
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Mock product data - in a real app, this would come from an API
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
      description: 'Sweet, chewy organic mango slices from Queensland farms',
      category: 'Tropical Fruits'
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
      description: 'Crispy apple chips with natural sweetness, no added sugar',
      category: 'Crispy Snacks'
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
      description: 'Exotic blend of pineapple, mango, and dragon fruit',
      category: 'Mixed Packs'
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
      description: 'Premium freeze-dried strawberries bursting with flavor',
      category: 'Berry Selection'
    },
    {
      id: 5,
      name: 'Banana Chips',
      price: 18.99,
      originalPrice: 22.99,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop&crop=center',
      rating: 4.6,
      reviews: 94,
      badge: 'New',
      description: 'Crunchy banana chips with a hint of coconut',
      category: 'Crispy Snacks'
    },
    {
      id: 6,
      name: 'Blueberry Bliss',
      price: 26.99,
      originalPrice: 31.99,
      image: 'https://images.unsplash.com/photo-1598060088131-8a89e5196029?w=400&h=400&fit=crop&crop=center',
      rating: 4.8,
      reviews: 112,
      badge: 'Organic',
      description: 'Plump, juicy blueberries preserved at peak ripeness',
      category: 'Berry Selection'
    },
    {
      id: 7,
      name: 'Citrus Medley',
      price: 29.99,
      originalPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=400&h=400&fit=crop&crop=center',
      rating: 4.7,
      reviews: 78,
      badge: 'Limited',
      description: 'Tangy mix of orange, lemon and lime pieces',
      category: 'Citrus Collection'
    },
    {
      id: 8,
      name: 'Kiwi Slices',
      price: 21.99,
      originalPrice: 26.99,
      image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400&h=400&fit=crop&crop=center',
      rating: 4.5,
      reviews: 64,
      badge: 'Vitamin C',
      description: 'Tangy kiwi slices packed with vitamin C and antioxidants',
      category: 'Tropical Fruits'
    },
    {
      id: 9,
      name: 'Pineapple Rings',
      price: 23.99,
      originalPrice: 27.99,
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=400&fit=crop&crop=center',
      rating: 4.8,
      reviews: 92,
      badge: 'Tropical',
      description: 'Sweet pineapple rings with a perfect chewy texture',
      category: 'Tropical Fruits'
    },
    {
      id: 10,
      name: 'Berry Power Mix',
      price: 34.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1563746924237-f81657aec0a1?w=400&h=400&fit=crop&crop=center',
      rating: 4.9,
      reviews: 143,
      badge: 'Antioxidant',
      description: 'Powerful blend of strawberries, blueberries, and blackberries',
      category: 'Mixed Packs'
    },
    {
      id: 11,
      name: 'Orange Segments',
      price: 19.99,
      originalPrice: 23.99,
      image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&h=400&fit=crop&crop=center',
      rating: 4.6,
      reviews: 87,
      badge: 'Vitamin C',
      description: 'Juicy orange segments bursting with natural flavor',
      category: 'Citrus Collection'
    },
    {
      id: 12,
      name: 'Superfood Mix',
      price: 39.99,
      originalPrice: 45.99,
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop&crop=center',
      rating: 5.0,
      reviews: 176,
      badge: 'Premium',
      description: 'Nutrient-dense blend of goji berries, mulberries and more',
      category: 'Mixed Packs'
    }
  ];

  const categories = [
    { id: 'tropical', name: 'Tropical Fruits', count: products.filter(p => p.category === 'Tropical Fruits').length },
    { id: 'berry', name: 'Berry Selection', count: products.filter(p => p.category === 'Berry Selection').length },
    { id: 'mixed', name: 'Mixed Packs', count: products.filter(p => p.category === 'Mixed Packs').length },
    { id: 'crispy', name: 'Crispy Snacks', count: products.filter(p => p.category === 'Crispy Snacks').length },
    { id: 'citrus', name: 'Citrus Collection', count: products.filter(p => p.category === 'Citrus Collection').length },
  ];

  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.some(cat => 
          product.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured
        // Keep original order (assumed to be featured)
        break;
    }
    
    setFilteredProducts(result);
  }, [searchQuery, selectedCategories, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handlePriceChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev];
      newRange[index] = newValue;
      return newRange;
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 100]);
    setSearchQuery('');
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of organic hydrated fruits, carefully selected and processed to maintain maximum nutrition and taste.
          </p>
        </motion.div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="w-full flex items-center justify-center space-x-2 bg-white p-4 rounded-xl shadow-md"
          >
            <SafeIcon icon={FiFilter} className="w-5 h-5" />
            <span>{filterOpen ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Left Sidebar */}
          <motion.div 
            className={`lg:w-1/4 space-y-6 ${filterOpen ? 'block' : 'hidden lg:block'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or type..."
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <SafeIcon icon={FiSearch} className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleCategoryChange(category.name)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-gray-500 text-sm">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">${priceRange[0]}</span>
                    <span className="text-gray-600">${priceRange[1]}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Min</label>
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Max</label>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-colors"
              >
                <SafeIcon icon={FiX} className="w-4 h-4" />
                <span>Clear Filters</span>
              </button>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-semibold mb-3">Join Our Newsletter</h3>
              <p className="text-sm opacity-90 mb-4">
                Stay updated with new products and exclusive offers.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-green-700 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:w-3/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Sorting and View Options */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <span className="text-gray-600 mr-3">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                  <option value="name">Name</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 mr-2">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <SafeIcon icon={FiGrid} className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <SafeIcon icon={FiList} className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
              </p>
              
              {/* Active Filters */}
              {(selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 100) && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map(cat => (
                    <span key={cat} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center">
                      {cat}
                      <button onClick={() => handleCategoryChange(cat)} className="ml-1">
                        <SafeIcon icon={FiX} className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                  {searchQuery && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                      Search: {searchQuery}
                      <button onClick={() => setSearchQuery('')} className="ml-1">
                        <SafeIcon icon={FiX} className="w-4 h-4" />
                      </button>
                    </span>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 100) && (
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center">
                      ${priceRange[0]} - ${priceRange[1]}
                      <button onClick={() => setPriceRange([0, 100])} className="ml-1">
                        <SafeIcon icon={FiX} className="w-4 h-4" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-gray-400 text-7xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching your criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Grid View */}
            {viewMode === 'grid' && filteredProducts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
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
                            product.badge === 'Limited' ? 'bg-red-500 text-white' :
                            product.badge === 'Organic' ? 'bg-blue-500 text-white' :
                            product.badge === 'Vitamin C' ? 'bg-yellow-500 text-white' :
                            product.badge === 'Tropical' ? 'bg-pink-500 text-white' :
                            product.badge === 'Antioxidant' ? 'bg-indigo-500 text-white' :
                            'bg-gray-500 text-white'
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
                            <span className="text-xs text-gray-500">{product.category}</span>
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
            )}

            {/* List View */}
            {viewMode === 'list' && filteredProducts.length > 0 && (
              <div className="space-y-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="flex flex-col md:flex-row">
                        {/* Product Image */}
                        <div className="relative md:w-1/3">
                          {/* Product Badge */}
                          <div className="absolute top-4 left-4 z-10">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              product.badge === 'Best Seller' ? 'bg-orange-500 text-white' :
                              product.badge === 'New' ? 'bg-green-500 text-white' :
                              product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                              product.badge === 'Limited' ? 'bg-red-500 text-white' :
                              product.badge === 'Organic' ? 'bg-blue-500 text-white' :
                              product.badge === 'Vitamin C' ? 'bg-yellow-500 text-white' :
                              product.badge === 'Tropical' ? 'bg-pink-500 text-white' :
                              product.badge === 'Antioxidant' ? 'bg-indigo-500 text-white' :
                              'bg-gray-500 text-white'
                            }`}>
                              {product.badge}
                            </span>
                          </div>

                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                        </div>

                        {/* Product Info */}
                        <div className="p-6 md:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-1">
                                <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                                <span className="text-sm text-gray-500">({product.reviews})</span>
                              </div>
                              <span className="text-xs text-gray-500">{product.category}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                              {product.name}
                            </h3>

                            <p className="text-gray-600 mb-4">
                              {product.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-green-600">
                                ${product.price}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                className="p-3 border-2 border-gray-300 rounded-xl hover:border-red-400 hover:text-red-500 transition-colors"
                              >
                                <SafeIcon icon={FiHeart} className="w-5 h-5" />
                              </button>
                              <button
                                onClick={(e) => handleAddToCart(product, e)}
                                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center space-x-2"
                              >
                                <SafeIcon icon={FiShoppingCart} className="w-5 h-5" />
                                <span>Add to Cart</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex rounded-xl overflow-hidden shadow-lg">
                <button className="px-4 py-2 bg-white border-r border-gray-200 text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-green-600 text-white font-semibold">
                  1
                </button>
                <button className="px-4 py-2 bg-white border-r border-gray-200 text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 bg-white border-r border-gray-200 text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;