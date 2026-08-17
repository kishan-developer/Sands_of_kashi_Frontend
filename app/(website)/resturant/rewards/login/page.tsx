"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function RewardsLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warn('Please enter email and password.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(data.message || 'Login successful');
        router.push('/resturant/rewards/dashboard');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans pb-24">
      <ToastContainer theme="dark" position="bottom-right" />

      <div className="border-b border-white/10 pt-24 md:pt-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
          <Link
            href="/resturant/rewards"
            className="flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-bold">Back to Rewards</span>
          </Link>
          <h1 className="text-2xl font-serif text-[#c5a059]">Customer Login</h1>
          <div className="w-24" />
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 mt-10">
        <div className="bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/50">
          <div className="text-center mb-8">
            <img
              src="/logo.png"
              alt="Sands of Kashi"
              className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[#c5a059] p-1 bg-black"
            />
            <h2 className="text-3xl font-serif text-[#c5a059]">Welcome Back</h2>
            <p className="text-gray-400 text-sm mt-1">Sign in to view your rewards</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c5a059] text-black py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-white transition-all disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/resturant/rewards/register" className="text-[#c5a059] hover:text-white font-medium">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
