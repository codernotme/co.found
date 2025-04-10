import React from 'react';
import { Flag, MessageSquare, Shield, AlertTriangle } from 'lucide-react';

export default function ModeratorDashboard() {
  const reports = [
    {
      id: 'REP-001',
      type: 'User Report',
      subject: 'Inappropriate Behavior',
      status: 'Pending',
      date: '2024-03-15',
      priority: 'High'
    },
    {
      id: 'REP-002',
      type: 'Content Report',
      subject: 'Spam Project Listing',
      status: 'In Review',
      date: '2024-03-14',
      priority: 'Medium'
    },
    {
      id: 'REP-003',
      type: 'User Report',
      subject: 'Fake Profile',
      status: 'Resolved',
      date: '2024-03-14',
      priority: 'Low'
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Moderator Dashboard</h1>
        <p className="text-gray-400">Monitor and manage platform activity and user reports.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <Flag size={24} className="text-red-500" />
            </div>
            <h3 className="text-lg font-semibold">Active Reports</h3>
          </div>
          <p className="text-3xl font-bold">24</p>
          <p className="text-gray-400 text-sm">8 high priority</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <MessageSquare size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold">Pending Reviews</h3>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-gray-400 text-sm">Content and profiles</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Shield size={24} className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold">Resolved Today</h3>
          </div>
          <p className="text-3xl font-bold">18</p>
          <p className="text-gray-400 text-sm">3 escalated to admin</p>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Reports</h2>
          <button className="text-cyan-500 hover:text-cyan-400">View All Reports</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="pb-3">ID</th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Subject</th>
                <th className="pb-3">Priority</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-700">
                  <td className="py-3">{report.id}</td>
                  <td className="py-3">{report.type}</td>
                  <td className="py-3">{report.subject}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      report.priority === 'High' ? 'bg-red-500/20 text-red-500' :
                      report.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-green-500/20 text-green-500'
                    }`}>
                      {report.priority}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      report.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500' :
                      report.status === 'In Review' ? 'bg-cyan-500/20 text-cyan-500' :
                      'bg-green-500/20 text-green-500'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-3">{report.date}</td>
                  <td className="py-3">
                    <button className="text-cyan-500 hover:text-cyan-400 mr-3">Review</button>
                    <button className="text-red-500 hover:text-red-400">Escalate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <AlertTriangle size={24} className="text-yellow-500 mb-4" />
          <h3 className="font-semibold mb-2">Review Content</h3>
          <p className="text-gray-400 text-sm">Check flagged posts and profiles</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <MessageSquare size={24} className="text-cyan-500 mb-4" />
          <h3 className="font-semibold mb-2">Moderate Comments</h3>
          <p className="text-gray-400 text-sm">Review reported comments</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Shield size={24} className="text-emerald-500 mb-4" />
          <h3 className="font-semibold mb-2">User Verification</h3>
          <p className="text-gray-400 text-sm">Verify new user accounts</p>
        </button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
          <Flag size={24} className="text-red-500 mb-4" />
          <h3 className="font-semibold mb-2">Handle Reports</h3>
          <p className="text-gray-400 text-sm">Process user reports</p>
        </button>
      </div>
    </div>
  );
}