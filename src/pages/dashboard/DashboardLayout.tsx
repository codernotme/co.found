"use client";
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LayoutDashboard, Users, Shield, Settings, LogOut, Bell } from 'lucide-react';

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRole() {
      const session = await supabase.auth.getSession();
      if (!session.data.session) {
        navigate('/login');
        return;
      }

      const { user } = session.data.session;
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      setRole(profile?.role || null);
    }

    fetchRole();
  }, [navigate]);

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard, roles: ['admin', 'founder', 'developer', 'moderator'] },
    { name: 'Profile', href: '/dashboard/profile', icon: Users, roles: ['admin', 'founder', 'developer', 'moderator'] },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings, roles: ['admin', 'founder', 'developer', 'moderator'] },
    { name: 'Admin Panel', href: '/dashboard/admin', icon: Shield, roles: ['admin'] },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="h-16 flex items-center px-6 border-b border-gray-700">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            Co.Found
          </Link>
        </div>
        <nav className="p-4">
          <div className="space-y-1">
            {navigation
              .filter((item) => item.roles.includes(role || ''))
              .map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                      currentPath === item.href
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    {item.name}
                  </Link>
                );
              })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="h-16 border-b border-gray-700 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <Bell size={20} />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-red-500 hover:text-red-400" onClick={() => supabase.auth.signOut()}>
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}