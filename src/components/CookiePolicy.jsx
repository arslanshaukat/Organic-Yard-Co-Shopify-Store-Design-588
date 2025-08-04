import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCookie, FiSettings, FiInfo, FiToggleRight, FiExternalLink } = FiIcons;

const CookiePolicy = () => {
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
            Cookie Policy
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
            <SafeIcon icon={FiCookie} className="text-white w-12 h-12 mr-4" />
            <h2 className="text-white text-2xl font-bold">Understanding Our Cookies</h2>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy explains how Organic Yard Co ("we", "us", or "our") uses cookies and similar technologies on our website. This policy is designed to help you understand what cookies are, how we use them, and the options you have regarding their use.
              </p>
            </section>

            {/* What Are Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiInfo} className="w-6 h-6 text-green-600 mr-2" />
                What Are Cookies?
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their sites are used.
                </p>
                <p className="text-gray-600 mt-3">
                  Cookies may be either "persistent" or "session" cookies. A persistent cookie remains on your device when you go offline, while a session cookie is deleted as soon as you close your web browser.
                </p>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiSettings} className="w-6 h-6 text-green-600 mr-2" />
                How We Use Cookies
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-4">
                  We use different types of cookies for various reasons:
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, account management, and network management. You cannot opt out of these cookies.
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies collect information about how you use our website, such as which pages you visit most often and if you receive error messages. They help us improve how our website works and understand which parts are most popular.
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features. They may also be used to provide services you have requested.
                </p>
                
                <h3 className="font-semibold text-gray-900 mb-2">Targeting/Advertising Cookies</h3>
                <p className="text-gray-600">
                  These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                </p>
              </div>
            </section>

            {/* Specific Cookies We Use */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">session_id</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Essential</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Maintains your session while browsing</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Session</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">cart_items</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Essential</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Stores items in your shopping cart</td>
                      <td className="px-6 py-4 text-sm text-gray-700">30 days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">_ga</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Performance</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Google Analytics - distinguishes users</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">_gid</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Performance</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Google Analytics - distinguishes users</td>
                      <td className="px-6 py-4 text-sm text-gray-700">24 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">user_preferences</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Functionality</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Remembers your preferences</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-700">_fbp</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Advertising</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Facebook Pixel - tracks conversions</td>
                      <td className="px-6 py-4 text-sm text-gray-700">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiExternalLink} className="w-6 h-6 text-green-600 mr-2" />
                Third-Party Cookies
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may be placed by:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Google Analytics - for website analytics</li>
                  <li>Facebook - for marketing and retargeting</li>
                  <li>Shopify - for e-commerce functionality</li>
                  <li>Stripe - for payment processing</li>
                  <li>Mailchimp - for email marketing</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  Each of these services has their own privacy and cookie policies which you can review on their respective websites.
                </p>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <SafeIcon icon={FiToggleRight} className="w-6 h-6 text-green-600 mr-2" />
                Managing Your Cookie Preferences
              </h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600 mb-3">
                  Most web browsers allow you to manage your cookie preferences. You can:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Delete cookies from your device</li>
                  <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
                  <li>Set your browser to notify you when you receive a cookie</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
                </p>
                
                <div className="mt-6 space-y-3">
                  <h3 className="font-semibold text-gray-900">How to manage cookies in major browsers:</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences → Privacy</li>
                    <li><strong>Microsoft Edge:</strong> Settings → Site permissions → Cookies and site data</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changes to Cookie Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Changes to This Cookie Policy</h2>
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-gray-600">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date. You are advised to review this Cookie Policy periodically for any changes.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="opacity-90 mb-4">
                If you have any questions about our Cookie Policy, please contact us:
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

export default CookiePolicy;