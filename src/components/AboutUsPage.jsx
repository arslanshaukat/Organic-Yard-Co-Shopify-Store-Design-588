import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiAward, FiHeart, FiStar, FiMapPin, FiTarget, FiTrendingUp, FiGlobe } = FiIcons;

const AboutUsPage = () => {
  const timeline = [
    {
      year: '2016',
      title: 'The Beginning',
      description: 'Organic Yard Co was founded in Sydney by two passionate nutritionists with a mission to make premium organic fruits accessible to all Australians.',
      icon: FiHeart
    },
    {
      year: '2017',
      title: 'First Farm Partnership',
      description: 'Established our first partnership with an organic farm in Queensland, setting the foundation for our sustainable supply chain.',
      icon: FiMapPin
    },
    {
      year: '2019',
      title: 'Expansion',
      description: 'Expanded our product range and began delivering to all Australian states and territories, reaching thousands of health-conscious customers.',
      icon: FiTrendingUp
    },
    {
      year: '2021',
      title: 'Sustainability Award',
      description: 'Received the Australian Organic Industry Award for our commitment to sustainable practices and packaging innovations.',
      icon: FiAward
    },
    {
      year: '2023',
      title: 'Present Day',
      description: 'Now partnering with over 50 certified organic farms across Australia, supporting local communities while delivering exceptional products.',
      icon: FiGlobe
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With a background in nutritional science, Sarah founded Organic Yard Co with a mission to make healthy, organic food accessible to all Australians.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Co-Founder & Head of Operations',
      bio: 'Michael brings over 15 years of experience in sustainable agriculture and supply chain management, ensuring our products meet the highest quality standards.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Product Development',
      bio: 'A food scientist with a passion for innovation, Emma leads our product development team in creating new and exciting organic fruit products.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      role: 'Sustainability Director',
      bio: 'David ensures our operations maintain the highest environmental standards, from farming practices to packaging and distribution.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face'
    }
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on quality. Every product meets our strict organic standards.',
      icon: FiStar,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Sustainability',
      description: 'Supporting eco-friendly farming practices that protect our environment for future generations.',
      icon: FiGlobe,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Community',
      description: 'Building strong relationships with farmers and customers across Australia.',
      icon: FiUsers,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our products and processes to deliver the best experience.',
      icon: FiTarget,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200&h=600&fit=crop&crop=center')`, 
            backgroundBlendMode: 'multiply' 
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We're on a mission to bring Australia's finest organic fruits directly to your table,
              while supporting sustainable farming practices and local communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To make premium organic nutrition accessible to every Australian family while supporting sustainable 
                farming practices and local communities. We believe that everyone deserves access to high-quality, 
                nutrient-rich foods that are good for both personal health and the health of our planet.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vision</h3>
                <p className="text-gray-600">
                  A world where sustainable, organic food is the standard, not the exception. Where farmers are 
                  valued, ecosystems are protected, and consumers enjoy the benefits of truly natural nutrition.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=600&h=400&fit=crop&crop=center" 
                  alt="Organic farming" 
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="text-gray-800 italic">
                    "We're not just selling dried fruits; we're promoting a lifestyle that values health, sustainability, and community."
                  </p>
                  <p className="text-gray-600 mt-2 text-right">— Sarah Johnson, Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from sourcing our fruits to delivering them to your door.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-6`}>
                  <SafeIcon icon={value.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to where we are today, this is the story of our growth and evolution.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            <div className="space-y-24">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10">
                    <SafeIcon icon={event.icon} className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-green-600 font-bold text-2xl mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind our mission to bring the best organic fruits to your table.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&crop=center" 
                alt="Sustainable farming" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Commitment to Sustainability</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sustainability isn't just a buzzword for us—it's a fundamental part of our business model. We believe 
                that the health of our planet and the health of our customers are deeply interconnected.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Organic Farming Practices',
                    description: 'We partner exclusively with certified organic farms that use sustainable farming methods, avoiding harmful pesticides and fertilizers.'
                  },
                  {
                    title: 'Eco-Friendly Packaging',
                    description: 'Our packaging is made from recycled and biodegradable materials, minimizing our environmental footprint.'
                  },
                  {
                    title: 'Carbon-Neutral Delivery',
                    description: 'We offset the carbon emissions from our deliveries by investing in renewable energy and reforestation projects.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to the highest industry standards and are proud to hold these certifications.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'Australian Certified Organic', logo: '🌿' },
              { name: 'HACCP Food Safety', logo: '🛡️' },
              { name: 'Fair Trade Certified', logo: '🤝' },
              { name: 'Carbon Neutral', logo: '🌍' },
              { name: 'Australian Made', logo: '🇦🇺' }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 px-8 py-6 rounded-xl shadow-md flex items-center space-x-4"
              >
                <span className="text-4xl">{cert.logo}</span>
                <span className="text-lg font-semibold text-gray-900">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Be part of our journey to transform how Australians access and enjoy organic fruits.
              Together, we can make a positive impact on health and sustainability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#products"
                className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Shop Our Products
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;