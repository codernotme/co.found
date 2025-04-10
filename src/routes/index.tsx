import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Features from '../pages/Features';
import Browse from '../pages/Browse';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import ModeratorDashboard from '../pages/dashboard/ModeratorDashboard';
import DeveloperDashboard from '../pages/dashboard/DeveloperDashboard';
import FounderDashboard from '../pages/dashboard/FounderDashboard';
import Messages from '../pages/dashboard/Messages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="moderator" element={<ModeratorDashboard />} />
        <Route path="developer" element={<DeveloperDashboard />} />
        <Route path="founder" element={<FounderDashboard />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
}