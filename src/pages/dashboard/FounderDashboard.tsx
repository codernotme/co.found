import React from 'react';
import { Users, MessageSquare, Star, Rocket, Activity, Code } from 'lucide-react';

export default function FounderDashboard() {
  const matchedDevelopers = [
    {
      name: 'Alex Chen',
      role: 'Full-Stack Developer',
      match: '96%',
      status: 'New Match',
      skills: ['React', 'Node.js', 'AWS']
    },
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      match: '92%',
      status: 'In Discussion',
      skills: ['Vue.js', 'TypeScript', 'UI/UX']
    },
    {
      name: 'Mike Park',
      role: 'Backend Developer',
      match: '88%',
      status: 'Applied',
      skills: ['Python', 'Django', 'PostgreSQL']
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Founder Dashboard</h1>
        <p className="text-gray-400">Find the perfect technical co-founder and build your dream team.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Users size={24} className="text-cyan-500" />
            </div>
            <h3 className="text-lg font-semibold">Developer Matches</h3>
          </div>
          <p className="text-3xl font-bold">15</p>
          <p className="text-gray-400 text-sm">6 new this week</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <MessageSquare size={24} className="text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold">Active Chats</h3>
          </div>
          <p className="text-3xl font-bold">7</p>
          <p className="text-gray-400 text-sm">3 unread messages</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Star size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold">Project Views</h3>
          </div>
          <p className="text-3xl font-bold">124</p>
          <p className="text-gray-400 text-sm">Last 7 days</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Activity size={24} className="text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold">Applications</h3>
          </div>
          <p className="text-3xl font-bold">18</p>
          <p className="text-gray-400 text-sm">5 new</p>
        </div>
      </div>

      {/* Matched Developers */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Matched Developers</h2>
          <button className="text-cyan-500 hover:text-cyan-400">View All Matches</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedDevelopers.map((developer, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{developer.name}</h3>
                <span className="text-emerald-500 font-semibold">{developer.match}</span>
              </div>
              <p className="text-gray-400 mb-4">{developer.role}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {developer.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-600 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  developer.status === 'New Match' ? 'bg-cyan-500/20 text-cyan-500' :
                  developer.status === 'In Discussion' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-purple-500/20 text-purple-500'
                }`}>
                  {developer.status}
                </span>
                <button className="text-cyan-500 hover:text-cyan-400">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Rocket size={24} className="text-cyan-500 mb-4" />
          <h3 className="font-semibold mb-2">Update Project</h3>
          <p className="text-gray-400 text-sm">Keep your listing current</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <MessageSquare size={24} className="text-emerald-500 mb-4" />
          <h3 className="font-semibold mb-2">Messages</h3>
          <p className="text-gray-400 text-sm">Chat with developers</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Code size={24} className="text-yellow-500 mb-4" />
          <h3 className="font-semibold mb-2">Tech Stack</h3>
          <p className="text-gray-400 text-sm">Update requirements</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Activity size={24} className="text-purple-500 mb-4" />
          <h3 className="font-semibold mb-2">Applications</h3>
          <p className="text-gray-400 text-sm">Review candidates</p>
        </button>
      </div>
    </div>
  );
}