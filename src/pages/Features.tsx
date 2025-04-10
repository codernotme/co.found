import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCircle,
  Search,
  MessageSquare,
  Bell,
  Shield,
  Zap,
  Users,
  Target,
  Award
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <UserCircle size={32} className="text-cyan-500" />,
      title: 'Smart Profiles',
      description: 'Create detailed profiles showcasing your skills, experience, and vision. Our AI-powered system helps you stand out to the right matches.'
    },
    {
      icon: <Search size={32} className="text-emerald-500" />,
      title: 'Intelligent Matching',
      description: 'Our advanced algorithm considers skills, experience, goals, and even personality fit to suggest the most promising partnerships.'
    },
    {
      icon: <MessageSquare size={32} className="text-cyan-500" />,
      title: 'Seamless Communication',
      description: 'Built-in messaging system with real-time chat, file sharing, and video calls to help you connect effectively.'
    },
    {
      icon: <Bell size={32} className="text-emerald-500" />,
      title: 'Smart Notifications',
      description: 'Stay updated with real-time alerts about new matches, messages, and opportunities that match your criteria.'
    },
    {
      icon: <Shield size={32} className="text-cyan-500" />,
      title: 'Verified Profiles',
      description: 'All members go through a verification process to ensure authenticity and maintain high community standards.'
    },
    {
      icon: <Zap size={32} className="text-emerald-500" />,
      title: 'Quick Connect',
      description: 'Express interest and connect instantly with potential matches using our streamlined process.'
    }
  ];

  const benefits = [
    {
      icon: <Users size={32} className="text-cyan-500" />,
      title: 'Community Support',
      description: 'Join a thriving community of founders and developers who support and inspire each other.'
    },
    {
      icon: <Target size={32} className="text-emerald-500" />,
      title: 'Goal Alignment',
      description: 'Find partners who share your vision and are committed to the same goals.'
    },
    {
      icon: <Award size={32} className="text-cyan-500" />,
      title: 'Success Stories',
      description: 'Join hundreds of successful startups that found their perfect match on Co.Found.'
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
              Powerful Features for
              <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Successful Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to find your perfect co-founder and build your dream startup together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-lg"
              >
                <div className="inline-block p-4 bg-gray-700 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Co.Found</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-lg text-center"
              >
                <div className="inline-block p-4 bg-gray-700 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Join Co.Found today and connect with the right people to bring your vision to life.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="/register"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}