import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiRefreshCw, FiCheckCircle, FiAlertTriangle, FiHelpCircle, FiMail } = FiIcons;

const ReturnsPage = () => {
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
            Returns & Refunds
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to your satisfaction with detailed information on our returns and refunds policy.
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
            <SafeIcon icon={FiRefreshCw} className="text-white w-16 h-16" />
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Satisfaction Guarantee */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-600 mr-2" />
                Our Satisfaction Guarantee
              </h2>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-gray-700 text-lg">
                  At Organic Yard Co, we stand behind the quality of our products. If you're not completely satisfied with your purchase for any reason, we offer a 100% satisfaction guarantee. We want you to enjoy our premium organic fruits with complete confidence.
                </p>
              </div>
            </section>

            {/* Return Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiRefreshCw} className="w-6 h-6 text-green-600 mr-2" />
                Return Policy
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">30-Day Return Window</h3>
                  <p className="text-gray-600">
                    You may return any unopened product within 30 days of delivery for a full refund of the purchase price. If the product has been opened, we will assess the return on a case-by-case basis.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Eligible Products</h3>
                  <p className="text-gray-600">
                    All of our standard products are eligible for return. Limited edition or seasonal products may have special return conditions, which will be noted on the product page at the time of purchase.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Return Condition Requirements</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Products must be in their original packaging</li>
                    <li>Include all components and accessories</li>
                    <li>Include the original receipt or proof of purchase</li>
                    <li>Items must not be damaged due to misuse</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How to Initiate a Return */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiHelpCircle} className="w-6 h-6 text-green-600 mr-2" />
                How to Initiate a Return
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3">1</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Contact Customer Service</h3>
                      <p className="text-gray-600">Email us at returns@organicyardco.com.au or call 1800 ORGANIC (1800 674 264) to initiate your return request. Please include your order number and reason for return.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3">2</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Receive Return Authorization</h3>
                      <p className="text-gray-600">Our team will provide you with a Return Merchandise Authorization (RMA) number and return instructions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3">3</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Package Your Return</h3>
                      <p className="text-gray-600">Securely package the product(s) in their original packaging along with the RMA number clearly marked on the outside of the package.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3">4</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Ship Your Return</h3>
                      <p className="text-gray-600">Send the package to the address provided in the return instructions. We recommend using a tracked shipping method.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-green-100 text-green-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3">5</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Refund Processing</h3>
                      <p className="text-gray-600">Once we receive and inspect your return, we'll process your refund. This typically takes 3-5 business days to appear in your account.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Refund Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-600 mr-2" />
                Refund Information
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Refund Methods</h3>
                  <p className="text-gray-600">
                    Refunds will be issued to the original payment method used for the purchase. If the original payment method is unavailable, we may issue store credit or process the refund through an alternative method.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Refund Timeline</h3>
                  <p className="text-gray-600">
                    Once we receive your return, we'll inspect the item and process your refund within 2 business days. Depending on your financial institution, it may take an additional 3-10 business days for the refund to appear in your account.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Shipping Costs</h3>
                  <p className="text-gray-600">
                    The cost of return shipping is the responsibility of the customer, except in cases where the product is defective or was shipped in error. In those cases, we will provide a prepaid shipping label or reimburse your shipping costs.
                  </p>
                </div>
              </div>
            </section>

            {/* Exceptions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 text-green-600 mr-2" />
                Exceptions & Special Circumstances
              </h2>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">The following items cannot be returned:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Products that have been consumed beyond a reasonable sample amount</li>
                  <li>Products with removed or damaged safety seals</li>
                  <li>Gift cards or promotional codes</li>
                  <li>Products damaged due to improper storage or handling on the customer's part</li>
                </ul>
                <div className="mt-4 bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Damaged or Defective Products</h4>
                  <p className="text-gray-600">
                    If you receive a damaged or defective product, please contact us within 48 hours of receipt. We may request photos of the damaged products and packaging to help us improve our shipping processes.
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
                    question: "Can I exchange my product instead of returning it?",
                    answer: "Yes, we're happy to offer exchanges. Simply follow the same return process and specify that you'd like an exchange rather than a refund. Let us know which product you'd prefer instead."
                  },
                  {
                    question: "What if my product arrives damaged?",
                    answer: "If your product arrives damaged, please contact us within 48 hours with photos of the damaged items and packaging. We'll arrange a replacement or refund right away at no cost to you."
                  },
                  {
                    question: "Do I need the original packaging to make a return?",
                    answer: "While we prefer returns to be in their original packaging, we understand this isn't always possible. Contact our customer service team to discuss your specific situation."
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
                  <h3 className="font-bold text-xl mb-2">Need Help with Returns?</h3>
                  <p className="opacity-90">Our customer service team is ready to assist you</p>
                </div>
                <a
                  href="mailto:returns@organicyardco.com.au"
                  className="mt-4 md:mt-0 bg-white text-green-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center"
                >
                  <SafeIcon icon={FiMail} className="mr-2" />
                  Contact Returns Support
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnsPage;