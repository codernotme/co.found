import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Users, Code, Globe, Trophy } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Startups Founded', icon: <Rocket size={24} /> },
    { number: '2,000+', label: 'Developer Matches', icon: <Code size={24} /> },
    { number: '98%', label: 'Match Satisfaction', icon: <Heart size={24} /> },
  ];

  const values = [
    {
      icon: <Users size={32} className="text-cyan-500" />,
      title: 'Community First',
      description: 'We believe in the power of collaboration and shared vision.',
    },
    {
      icon: <Globe size={32} className="text-emerald-500" />,
      title: 'Global Impact',
      description: 'Connecting talent across borders to build world-changing solutions.',
    },
    {
      icon: <Trophy size={32} className="text-cyan-500" />,
      title: 'Excellence',
      description: 'Supporting only the most dedicated founders and developers.',
    },
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
              Building the Future of
              <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Startup Collaboration
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't just build startups—we build partnerships. Co.Found is where visionary founders meet exceptional developers to create the next generation of world-changing companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-lg text-center"
              >
                <div className="inline-block p-4 bg-gray-700 rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-400 mb-6">
              Co.Found was born from a simple observation: the best startups come from perfect partnerships between visionary founders and talented developers. We've experienced firsthand the challenge of finding the right co-founder—someone who not only complements your skills but shares your passion and vision.
            </p>
            <p className="text-gray-400">
              Today, we're proud to have helped launch hundreds of successful startups, creating not just companies, but lasting partnerships that are changing the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-lg text-center"
              >
                <div className="inline-block p-4 bg-gray-700 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join Our Growing Community
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a founder with a vision or a developer ready to build the next big thing, your journey starts here.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/register?type=founder"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join as Founder
            </a>
            <a
              href="/register?type=developer"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Join as Developer
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}