import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTruck, FiClock, FiMapPin, FiDollarSign, FiAlertCircle } = FiIcons;

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shipping Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about how we deliver our premium organic fruits to your doorstep.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Hero Banner */}
          <div className="relative h-48 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full"></div>
            </div>
            <SafeIcon icon={FiTruck} className="text-white w-16 h-16" />
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Shipping Methods */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiTruck} className="w-6 h-6 text-green-600 mr-2" />
                Shipping Methods
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="font-bold text-gray-900 mb-2">Standard Shipping</h3>
                    <p className="text-gray-600 mb-2">3-5 business days</p>
                    <p className="text-gray-600">FREE on orders over $50</p>
                    <p className="text-gray-600">$8.99 for orders under $50</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md">
                    <h3 className="font-bold text-gray-900 mb-2">Express Shipping</h3>
                    <p className="text-gray-600 mb-2">1-2 business days</p>
                    <p className="text-gray-600">$9.99 flat rate</p>
                    <div className="inline-block mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      Premium Service
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery Times */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-green-600 mr-2" />
                Delivery Times
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Standard Shipping</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Express Shipping</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Sydney Metro</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1-2 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Next day</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">NSW, VIC, ACT</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2-3 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1-2 days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">QLD, SA</td>
                      <td className="px-6 py-4 text-sm text-gray-700">3-4 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1-2 days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">WA, NT, TAS</td>
                      <td className="px-6 py-4 text-sm text-gray-700">4-5 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2 days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">Remote Areas</td>
                      <td className="px-6 py-4 text-sm text-gray-700">5-7 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">3-4 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Shipping Coverage */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiMapPin} className="w-6 h-6 text-green-600 mr-2" />
                Shipping Coverage
              </h2>
              <p className="text-gray-600">
                We currently ship to all locations within Australia. International shipping is not available at this time, but we're working on expanding our delivery options in the future.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex space-x-4 items-center">
                <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-blue-700">
                  Some extremely remote areas may experience additional delays. Please contact our customer service team if you have concerns about delivery to your location.
                </p>
              </div>
            </section>

            {/* Shipping Policies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-600 mr-2" />
                Shipping Policies
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
                  <p className="text-gray-600">
                    All orders are processed within 1 business day. Orders placed after 2PM AEST will be processed the following business day.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Tracking Information</h3>
                  <p className="text-gray-600">
                    You will receive a shipping confirmation email with tracking information once your order has been shipped. You can track your package at any time by clicking the tracking link in the email.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Shipping Delays</h3>
                  <p className="text-gray-600">
                    While we strive to deliver all orders within the estimated timeframes, occasionally delays may occur due to weather conditions, public holidays, or other circumstances beyond our control.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "Can I change my shipping address after placing an order?",
                    answer: "Address changes can be accommodated if the order hasn't been shipped yet. Please contact our customer service team immediately with your order number."
                  },
                  {
                    question: "What happens if I'm not home when my package arrives?",
                    answer: "The delivery carrier will leave your package in a safe place at the delivery address. If a signature is required, they will leave a card with instructions for redelivery or pickup."
                  },
                  {
                    question: "How do you ensure the freshness of products during shipping?",
                    answer: "Our products are carefully packed in protective materials that maintain optimal conditions during transit. Our hydrated fruits have excellent shelf life and don't require refrigeration."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="font-bold text-xl mb-2">Need Help with Shipping?</h3>
                  <p className="opacity-90">Our customer service team is ready to assist you</p>
                </div>
                <a
                  href="mailto:shipping@organicyardco.com.au"
                  className="mt-4 md:mt-0 bg-white text-green-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact Shipping Support
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingPage;