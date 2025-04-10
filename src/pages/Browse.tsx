import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Code, Briefcase, Star, Clock, ExternalLink } from 'lucide-react';

export default function Browse() {
  const [activeTab, setActiveTab] = useState<'startups' | 'developers'>('startups');
  
  const startups = [
    {
      name: "EcoTrack",
      description: "AI-powered sustainability tracking platform for businesses",
      seeking: ["Full-Stack Developer", "ML Engineer"],
      stage: "Seed",
      location: "Remote",
      tags: ["AI/ML", "Sustainability", "B2B"],
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    },
    {
      name: "HealthHub",
      description: "Decentralized healthcare data management platform",
      seeking: ["Blockchain Developer", "UI/UX Designer"],
      stage: "Pre-seed",
      location: "Remote",
      tags: ["Healthcare", "Blockchain", "Web3"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    },
    {
      name: "DevFlow",
      description: "Next-gen developer productivity suite",
      seeking: ["Frontend Developer", "DevOps Engineer"],
      stage: "Seed",
      location: "Remote",
      tags: ["Developer Tools", "SaaS", "Productivity"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    }
  ];

  const developers = [
    {
      name: "Alex Chen",
      role: "Full-Stack Developer",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      experience: "5 years",
      availability: "Full-time",
      interests: ["B2B SaaS", "Developer Tools"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      skills: ["React", "Vue.js", "TailwindCSS", "UI/UX"],
      experience: "3 years",
      availability: "Part-time",
      interests: ["E-commerce", "Health Tech"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Michael Park",
      role: "Backend Developer",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      experience: "4 years",
      availability: "Full-time",
      interests: ["AI/ML", "FinTech"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Search Header */}
      <section className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative flex-1 max-w-2xl w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search startups or developers..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg">
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('startups')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'startups'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Startups
            </button>
            <button
              onClick={() => setActiveTab('developers')}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === 'developers'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Developers
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'startups' ? (
              // Startups Grid
              startups.map((startup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={startup.image}
                      alt={startup.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
                    <p className="text-gray-400 mb-4">{startup.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {startup.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Briefcase size={16} />
                        <span>{startup.stage}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Code size={16} />
                        <span>{startup.seeking.join(", ")}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              // Developers Grid
              developers.map((developer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={developer.image}
                      alt={developer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{developer.name}</h3>
                    <p className="text-cyan-500 mb-4">{developer.role}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {developer.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Star size={16} />
                        <span>{developer.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock size={16} />
                        <span>{developer.availability}</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}