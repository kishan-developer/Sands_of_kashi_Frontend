"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User, Mail, Phone, Shield, Gift, Ticket, LogOut, ArrowLeft } from 'lucide-react';

interface UserData {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
}

export default function RewardsDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/user`, {
          credentials: 'include',
        });
        const data = await res.json();
        if (res.ok && data.success && data.data) {
          setUser(data.data);
        } else {
          router.push('/resturant/rewards/login');
        }
      } catch (error) {
        toast.error('Unable to load user. Please log in again.');
        router.push('/resturant/rewards/login');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      if (res.ok) {
        toast.success('Logged out successfully.');
        router.push('/resturant/rewards/login');
      } else {
        toast.error('Logout failed.');
      }
    } catch (error) {
      toast.error('Network error.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans flex items-center justify-center">
        <p className="text-[#c5a059] text-lg font-serif">Loading your dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

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
          <h1 className="text-2xl font-serif text-[#c5a059]">Customer Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors font-bold"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 mt-10 space-y-8">
        <div className="bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/logo.png"
              alt="Sands of Kashi"
              className="w-24 h-24 rounded-full border-2 border-[#c5a059] p-1 bg-black"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-serif text-[#c5a059] capitalize">{user.fullName}</h2>
              <p className="text-gray-400 mt-1">Customer ID: #{user._id.slice(-6).toUpperCase()}</p>
              <span className="inline-flex items-center gap-1 px-3 py-1 mt-3 rounded-full border border-[#c5a059]/30 text-[#c5a059] text-xs uppercase tracking-widest">
                <Shield size={12} /> {user.role}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <Mail className="text-[#c5a059]" size={20} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                <p className="text-sm text-gray-200">{user.email}</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <Phone className="text-[#c5a059]" size={20} />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                <p className="text-sm text-gray-200">{user.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/resturant/rewards"
            className="group bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#c5a059]/60 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <Gift size={32} className="text-[#c5a059]" />
              <span className="text-[#c5a059] group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <h3 className="text-xl font-serif text-white">My Rewards</h3>
            <p className="text-gray-400 text-sm mt-1">View your coupons and scratch cards.</p>
          </Link>

          <Link
            href="/resturant"
            className="group bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#c5a059]/60 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <Ticket size={32} className="text-[#c5a059]" />
              <span className="text-[#c5a059] group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <h3 className="text-xl font-serif text-white">Restaurant</h3>
            <p className="text-gray-400 text-sm mt-1">Go back to the restaurant page.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
