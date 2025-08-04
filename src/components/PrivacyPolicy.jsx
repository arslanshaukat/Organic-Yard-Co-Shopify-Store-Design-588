import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiShield, FiUserCheck, FiDatabase, FiGlobe } = FiIcons;

const PrivacyPolicy = () => {
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
            Privacy Policy
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
            <SafeIcon icon={FiLock} className="text-white w-12 h-12 mr-4" />
            <h2 className="text-white text-2xl font-bold">Your Privacy Matters</h2>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-600 leading-relaxed">
                At Organic Yard Co, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make purchases, or interact with us in any way. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiDatabase} className="w-6 h-6 text-green-600 mr-2" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-600 mb-3">
                    When you create an account, place an order, or subscribe to our newsletter, we may collect:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Name, email address, phone number, and delivery address</li>
                    <li>Payment information (processed securely through our payment providers)</li>
                    <li>Purchase history and preferences</li>
                    <li>Communication history with our customer service team</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-3">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referral sources and navigation patterns</li>
                    <li>Location information (with your consent)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiUserCheck} className="w-6 h-6 text-green-600 mr-2" />
                How We Use Your Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Processing and fulfilling your orders</li>
                  <li>Managing your account and providing customer support</li>
                  <li>Communicating with you about orders, products, services, and promotional offers</li>
                  <li>Improving our website, products, and services</li>
                  <li>Conducting research and analysis to better understand our customers</li>
                  <li>Preventing fraudulent transactions and monitoring against theft</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiGlobe} className="w-6 h-6 text-green-600 mr-2" />
                Information Sharing and Disclosure
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Service providers who help us operate our business (payment processors, shipping partners, etc.)</li>
                  <li>Marketing and analytics partners (with your consent)</li>
                  <li>Legal authorities when required by law or to protect our rights</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg text-blue-800">
                  <strong>Important:</strong> We never sell your personal information to third parties.
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-green-600 mr-2" />
                Data Security
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>SSL encryption for all data transmission</li>
                  <li>Regular security assessments and updates</li>
                  <li>Restricted access to personal information</li>
                  <li>Employee training on privacy and security practices</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal data</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing of your data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Withdrawal of consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  To exercise any of these rights, please contact us using the information in the "Contact Us" section below.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Cookies and Similar Technologies</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p className="text-gray-600">
                  For more information about the cookies we use, please see our <a href="/cookie-policy" className="text-green-600 hover:text-green-700 underline">Cookie Policy</a>.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600">
                  Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </div>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="opacity-90 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@organicyardco.com.au</p>
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

export default PrivacyPolicy;