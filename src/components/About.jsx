import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiUsers, FiTrendingUp, FiHeart } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiUsers, number: '10,000+', label: 'Happy Customers' },
    { icon: FiTrendingUp, number: '50+', label: 'Farm Partners' },
    { icon: FiMapPin, number: '8', label: 'States Delivered' },
    { icon: FiHeart, number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in the heart of Sydney, Organic Yard Co was born from a passion 
                  for bringing Australia's finest organic fruits directly to your table. 
                  We believe that everyone deserves access to premium, nutrient-rich fruits 
                  that taste as good as they are for you.
                </p>
                <p>
                  Our journey began when we discovered the incredible potential of hydrated 
                  organic fruits - a process that preserves the natural goodness while 
                  creating convenient, long-lasting products that busy Australians can 
                  enjoy anywhere, anytime.
                </p>
                <p>
                  Today, we partner with over 50 certified organic farms across Australia, 
                  supporting local communities while delivering exceptional products that 
                  meet the highest quality standards.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-green-50 to-orange-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To make premium organic nutrition accessible to every Australian family 
                while supporting sustainable farming practices and local communities.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* About Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop&crop=center"
                alt="Australian Organic Farm"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Australian Organic Farms</p>
                <p className="text-sm opacity-90">Where quality begins</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={stat.icon} className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every product meets our strict organic standards.',
                emoji: '🏆'
              },
              {
                title: 'Sustainability',
                description: 'Supporting eco-friendly farming practices that protect our environment.',
                emoji: '🌱'
              },
              {
                title: 'Community',
                description: 'Building strong relationships with farmers and customers across Australia.',
                emoji: '🤝'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;