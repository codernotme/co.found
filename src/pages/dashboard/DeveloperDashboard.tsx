import React from 'react';
import { Briefcase, MessageSquare, Star, Code, Activity } from 'lucide-react';

export default function DeveloperDashboard() {
  const matchedProjects = [
    {
      name: 'EcoTrack',
      role: 'Full-Stack Developer',
      match: '95%',
      status: 'New Match',
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      name: 'HealthHub',
      role: 'Frontend Developer',
      match: '88%',
      status: 'In Discussion',
      tech: ['Vue.js', 'TypeScript', 'Tailwind']
    },
    {
      name: 'DevFlow',
      role: 'Backend Developer',
      match: '82%',
      status: 'Applied',
      tech: ['Python', 'Django', 'AWS']
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Developer Dashboard</h1>
        <p className="text-gray-400">Find exciting projects and connect with innovative founders.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Briefcase size={24} className="text-cyan-500" />
            </div>
            <h3 className="text-lg font-semibold">Project Matches</h3>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-gray-400 text-sm">4 new this week</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <MessageSquare size={24} className="text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold">Active Chats</h3>
          </div>
          <p className="text-3xl font-bold">5</p>
          <p className="text-gray-400 text-sm">2 unread messages</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Star size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold">Profile Views</h3>
          </div>
          <p className="text-3xl font-bold">48</p>
          <p className="text-gray-400 text-sm">Last 7 days</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Activity size={24} className="text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold">Applications</h3>
          </div>
          <p className="text-3xl font-bold">8</p>
          <p className="text-gray-400 text-sm">3 in review</p>
        </div>
      </div>

      {/* Matched Projects */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Matched Projects</h2>
          <button className="text-cyan-500 hover:text-cyan-400">View All Matches</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedProjects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <span className="text-emerald-500 font-semibold">{project.match}</span>
              </div>
              <p className="text-gray-400 mb-4">{project.role}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-600 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'New Match' ? 'bg-cyan-500/20 text-cyan-500' :
                  project.status === 'In Discussion' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-purple-500/20 text-purple-500'
                }`}>
                  {project.status}
                </span>
                <button className="text-cyan-500 hover:text-cyan-400">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Code size={24} className="text-cyan-500 mb-4" />
          <h3 className="font-semibold mb-2">Update Skills</h3>
          <p className="text-gray-400 text-sm">Keep your profile current</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <MessageSquare size={24} className="text-emerald-500 mb-4" />
          <h3 className="font-semibold mb-2">Messages</h3>
          <p className="text-gray-400 text-sm">Chat with founders</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Star size={24} className="text-yellow-500 mb-4" />
          <h3 className="font-semibold mb-2">Saved Projects</h3>
          <p className="text-gray-400 text-sm">View bookmarked opportunities</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Activity size={24} className="text-purple-500 mb-4" />
          <h3 className="font-semibold mb-2">Applications</h3>
          <p className="text-gray-400 text-sm">Track your applications</p>
        </button>
      </div>
    </div>
  );
}