import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, signIn } from '../lib/auth';

export default function Auth() {
  const [step, setStep] = useState<'login' | 'register'>('login');
  const [userType, setUserType] = useState<'founder' | 'developer'>('founder');
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (step === 'register') {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords don't match");
          return;
        }
        await signUp(formData.email, formData.password, userType);
      } else {
        await signIn(formData.email, formData.password);
      }
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <div className="pt-16">
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setUserType('founder')}
            className={`px-4 py-2 rounded-lg ${userType === 'founder' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-400'}`}
          >
            Founder
          </button>
          <button
            onClick={() => setUserType('developer')}
            className={`px-4 py-2 rounded-lg ${userType === 'developer' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-400'}`}
          >
            Developer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2"
              required
            />
          </div>
          {step === 'register' && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-3 rounded-lg"
          >
            {step === 'register' ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setStep(step === 'login' ? 'register' : 'login')}
            className="text-cyan-500 hover:underline"
          >
            {step === 'login' ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
