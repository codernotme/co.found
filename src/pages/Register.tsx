import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Code, Rocket } from 'lucide-react';

export default function Register() {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState(searchParams.get('type') || 'founder');
  const [step, setStep] = useState(1);

  const founderFields = [
    { name: 'startup_name', label: 'Startup Name', type: 'text' },
    { name: 'startup_description', label: 'Startup Description', type: 'textarea' },
    { name: 'seeking_roles', label: 'Roles You\'re Seeking', type: 'text' },
    { name: 'funding_stage', label: 'Funding Stage', type: 'select', options: ['Pre-seed', 'Seed', 'Series A', 'Bootstrapped'] },
    { name: 'location', label: 'Location', type: 'text' },
  ];

  const developerFields = [
    { name: 'full_name', label: 'Full Name', type: 'text' },
    { name: 'skills', label: 'Skills', type: 'text' },
    { name: 'experience', label: 'Years of Experience', type: 'number' },
    { name: 'github', label: 'GitHub Profile', type: 'text' },
    { name: 'portfolio', label: 'Portfolio URL', type: 'text' },
  ];

  const commonFields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'confirm_password', label: 'Confirm Password', type: 'password' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle form submission
      console.log('Form submitted');
    }
  };

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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Co.Found as a
              <span className="block mt-2 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                {userType === 'founder' ? 'Founder' : 'Developer'}
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              {userType === 'founder'
                ? 'Find the perfect technical co-founder for your startup.'
                : 'Connect with innovative startups and build the next big thing.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* User Type Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setUserType('founder')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                userType === 'founder'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <Rocket size={20} />
              Founder
            </button>
            <button
              onClick={() => setUserType('developer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                userType === 'developer'
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <Code size={20} />
              Developer
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 1 ? 'bg-cyan-500' : 'bg-gray-700'
              }`}>
                1
              </div>
              <div className="w-20 h-1 bg-gray-700" />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 2 ? 'bg-cyan-500' : 'bg-gray-700'
              }`}>
                2
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 ? (
                // Step 1: Account Details
                commonFields.map((field, index) => (
                  <div key={index}>
                    <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                ))
              ) : (
                // Step 2: Profile Details
                (userType === 'founder' ? founderFields : developerFields).map((field, index) => (
                  <div key={index}>
                    <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        rows={4}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    ) : field.type === 'select' ? (
                      <select
                        id={field.name}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        {field.options?.map((option, i) => (
                          <option key={i} value={option.toLowerCase()}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    )}
                  </div>
                ))
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                {step === 1 ? 'Next Step' : 'Create Account'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}