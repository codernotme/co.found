import React from 'react';
import { Users, UserCheck, AlertTriangle, Settings, Activity, Shield } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '2,451', icon: <Users size={24} className="text-cyan-500" /> },
    { label: 'Active Projects', value: '186', icon: <Activity size={24} className="text-emerald-500" /> },
    { label: 'Pending Approvals', value: '24', icon: <UserCheck size={24} className="text-yellow-500" /> },
    { label: 'Reports', value: '12', icon: <AlertTriangle size={24} className="text-red-500" /> },
  ];

  const recentUsers = [
    { name: 'John Doe', type: 'Founder', status: 'Active', date: '2024-03-15' },
    { name: 'Jane Smith', type: 'Developer', status: 'Pending', date: '2024-03-14' },
    { name: 'Mike Johnson', type: 'Founder', status: 'Active', date: '2024-03-14' },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Manage users, monitor activity, and maintain platform integrity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-700 rounded-lg">{stat.icon}</div>
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Users</h2>
            <button className="text-cyan-500 hover:text-cyan-400">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-700">
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Type</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3">{user.name}</td>
                    <td className="py-3">{user.type}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3">{user.date}</td>
                    <td className="py-3">
                      <button className="text-cyan-500 hover:text-cyan-400">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-gray-700 hover:bg-gray-600 transition-colors p-4 rounded-lg flex items-center gap-3">
              <Shield size={20} className="text-cyan-500" />
              <span>Manage User Roles</span>
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 transition-colors p-4 rounded-lg flex items-center gap-3">
              <UserCheck size={20} className="text-emerald-500" />
              <span>Review Applications</span>
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 transition-colors p-4 rounded-lg flex items-center gap-3">
              <AlertTriangle size={20} className="text-yellow-500" />
              <span>Handle Reports</span>
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 transition-colors p-4 rounded-lg flex items-center gap-3">
              <Settings size={20} className="text-gray-400" />
              <span>Platform Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}