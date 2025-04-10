import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail size={32} className="text-cyan-500" />,
      title: 'Email Us',
      description: 'Get in touch via email. We typically respond within 24 hours.',
      action: 'hello@cofound.dev',
      link: 'mailto:hello@cofound.dev'
    },
    {
      icon: <MessageSquare size={32} className="text-emerald-500" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time during business hours.',
      action: 'Start Chat',
      link: '#chat'
    },
    {
      icon: <Phone size={32} className="text-cyan-500" />,
      title: 'Call Us',
      description: 'Speak directly with our support team.',
      action: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Talk About Your
              <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Next Big Thing
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have questions about Co.Found? Want to learn more about how we can help you find your perfect co-founder? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-lg text-center"
              >
                <div className="inline-block p-4 bg-gray-700 rounded-full mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
                <p className="text-gray-400 mb-6">{method.description}</p>
                <a
                  href={method.link}
                  className="text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-4 bg-gray-700 rounded-full mb-6">
              <MapPin size={32} className="text-cyan-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-400">
              123 Startup Street, Innovation District<br />
              San Francisco, CA 94107
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}