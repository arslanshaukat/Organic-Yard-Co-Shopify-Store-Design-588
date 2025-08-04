import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart, FiTruck, FiAward, FiLeaf, FiSun } = FiIcons;

const Benefits = () => {
  const benefits = [
    {
      icon: FiShield,
      title: '100% Organic Certified',
      description: 'All our fruits are certified organic by Australian standards, ensuring no harmful chemicals or pesticides.',
      color: 'green'
    },
    {
      icon: FiHeart,
      title: 'Nutrient Rich',
      description: 'Our hydration process preserves essential vitamins, minerals, and antioxidants for maximum health benefits.',
      color: 'red'
    },
    {
      icon: FiTruck,
      title: 'Australia-Wide Shipping',
      description: 'Free shipping on orders over $50. Fresh delivery from Sydney to your doorstep across Australia.',
      color: 'blue'
    },
    {
      icon: FiAward,
      title: 'Premium Quality',
      description: 'Hand-picked from the finest Australian farms and processed using state-of-the-art hydration technology.',
      color: 'purple'
    },
    {
      icon: FiLeaf,
      title: 'Sustainable Farming',
      description: 'Supporting local Australian farmers who practice sustainable and environmentally friendly farming methods.',
      color: 'green'
    },
    {
      icon: FiSun,
      title: 'Sun-Dried Goodness',
      description: 'Naturally sun-dried under the Australian sun, preserving the authentic taste and nutritional value.',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
    };
    return colors[color] || colors.green;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Organic Yard Co?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering the highest quality organic hydrated fruits 
            while supporting Australian farmers and sustainable practices.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-4 rounded-xl transition-all duration-300 ${getColorClasses(benefit.color)}`}>
                  <SafeIcon icon={benefit.icon} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the Organic Difference
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of satisfied customers who have made the switch to our premium organic fruits.
            </p>
            <a
              href="#products"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Shopping Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;