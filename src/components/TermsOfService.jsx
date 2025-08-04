import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiCreditCard, FiShoppingBag, FiAlertTriangle, FiAward } = FiIcons;

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated: June 1, 2024
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Hero Banner */}
          <div className="relative h-32 bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-5 left-10 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute bottom-5 right-10 w-12 h-12 bg-white rounded-full"></div>
            </div>
            <SafeIcon icon={FiFileText} className="text-white w-12 h-12 mr-4" />
            <h2 className="text-white text-2xl font-bold">Our Agreement With You</h2>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the Organic Yard Co website, products, and services. Please read these Terms carefully before using our services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions, you may not access or use our services.
              </p>
            </section>

            {/* Definitions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <ul className="list-disc pl-5 text-gray-600 space-y-3">
                  <li><strong>"Company", "We", "Us", or "Our"</strong> refers to Organic Yard Co.</li>
                  <li><strong>"Website"</strong> refers to organicyardco.com.au and all associated domains.</li>
                  <li><strong>"Services"</strong> refers to the products, website, and any other services offered by the Company.</li>
                  <li><strong>"You", "Your"</strong> refers to the individual accessing or using our Services, or the company or other legal entity on behalf of which such individual is accessing or using the Services.</li>
                  <li><strong>"Content"</strong> refers to text, images, photos, audio, video, and all other forms of data or communication.</li>
                </ul>
              </div>
            </section>

            {/* Account Registration */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiFileText} className="w-6 h-6 text-green-600 mr-2" />
                Account Registration
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p className="text-gray-600 mb-3">
                  You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. You agree not to disclose your password to any third party.
                </p>
                <p className="text-gray-600">
                  You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Products and Ordering */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiShoppingBag} className="w-6 h-6 text-green-600 mr-2" />
                Products and Ordering
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Product Information</h3>
                <p className="text-gray-600 mb-3">
                  We strive to display our products and their features as accurately as possible. However, the displayed colors and appearance of products depend on your monitor and may not be accurate. We do not guarantee that your screen's display of any product accurately reflects the actual product.
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-2 mt-4">Availability and Pricing</h3>
                <p className="text-gray-600 mb-3">
                  All products are subject to availability. We reserve the right to discontinue any product at any time and to limit the quantity of any product that you order.
                </p>
                <p className="text-gray-600 mb-3">
                  Prices for our products are subject to change without notice. We reserve the right to modify or discontinue the Services without notice at any time.
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-2 mt-4">Order Acceptance</h3>
                <p className="text-gray-600">
                  Your order represents an offer to purchase a product that is accepted by us when we send an order confirmation email. We reserve the right to refuse or cancel your order at any time for reasons including but not limited to product availability, errors in product or pricing information, or problems identified by our credit and fraud avoidance department.
                </p>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiCreditCard} className="w-6 h-6 text-green-600 mr-2" />
                Payment Terms
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  We accept various payment methods as indicated on our website. By providing a payment method, you represent and warrant that you are authorized to use the designated payment method and that the payment information you provide is true and accurate.
                </p>
                <p className="text-gray-600 mb-3">
                  You agree to promptly update your account information with any changes in your payment information. We reserve the right to use third-party payment processors to process payments.
                </p>
                <p className="text-gray-600">
                  All payments must be made in Australian Dollars (AUD). Prices displayed include GST for Australian customers where applicable.
                </p>
              </div>
            </section>

            {/* Shipping and Delivery */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Shipping and Delivery</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  Shipping and delivery terms are as specified in our <a href="/shipping" className="text-green-600 hover:text-green-700 underline">Shipping Policy</a>. We are not responsible for delays beyond our control, including delays caused by shipping carriers, natural disasters, or customs processing for international shipments.
                </p>
                <p className="text-gray-600">
                  Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
                </p>
              </div>
            </section>

            {/* Returns and Refunds */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Returns and Refunds</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600">
                  Our return and refund policies are as specified in our <a href="/returns" className="text-green-600 hover:text-green-700 underline">Returns Policy</a>. By making a purchase, you agree to the terms of our return and refund policies.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Intellectual Property</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Organic Yard Co and its licensors. The Service is protected by copyright, trademark, and other laws of both Australia and foreign countries.
                </p>
                <p className="text-gray-600">
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Organic Yard Co.
                </p>
              </div>
            </section>

            {/* User Conduct */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 text-green-600 mr-2" />
                Prohibited Activities
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  You may not engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing upon the intellectual property rights of others</li>
                  <li>Submitting false or misleading information</li>
                  <li>Uploading or transmitting viruses or malicious code</li>
                  <li>Interfering with or disrupting the Service or servers</li>
                  <li>Engaging in any automated use of the system</li>
                  <li>Attempting to impersonate another user or person</li>
                  <li>Using the Service for any illegal or unauthorized purpose</li>
                </ul>
              </div>
            </section>

            {/* Warranty and Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiAward} className="w-6 h-6 text-green-600 mr-2" />
                Warranty and Disclaimer
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  We strive to provide quality products, but we do not warrant that products will meet your requirements or that the quality will meet your expectations.
                </p>
                <p className="text-gray-600 mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-600">
                  Nothing in these Terms excludes, restricts or modifies any consumer guarantee, right or remedy conferred on you by the Australian Consumer Law or any other applicable law that cannot be excluded, restricted or modified by agreement.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ORGANIC YARD CO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Your access to or use of or inability to access or use the Services</li>
                  <li>Any conduct or content of any third party on the Services</li>
                  <li>Any content obtained from the Services</li>
                  <li>Unauthorized access, use or alteration of your transmissions or content</li>
                </ul>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600">
                  These Terms shall be governed and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="opacity-90 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@organicyardco.com.au</p>
                <p><strong>Phone:</strong> 1800 ORGANIC (1800 674 264)</p>
                <p><strong>Address:</strong> 123 Organic Street, Sydney NSW 2000, Australia</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;