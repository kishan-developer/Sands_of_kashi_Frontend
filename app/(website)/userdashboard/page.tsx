"use client";

import React from 'react';
import Link from 'next/link';
import { Gift, Ticket, User, LogIn, UserPlus, ArrowRight } from 'lucide-react';

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans pb-24">
      <div className="border-b border-white/10 pt-24 md:pt-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors font-bold text-sm sm:text-base"
          >
            ← Home
          </Link>
          <h1 className="text-xl md:text-2xl font-serif text-[#c5a059]">Customer Dashboard</h1>
          <div className="hidden sm:block w-24" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-6 mt-10 space-y-8">
        <div className="bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50 text-center">
          <img
            src="/logo.png"
            alt="Sands of Kashi"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 border-2 border-[#c5a059] p-1 bg-black"
          />
          <h2 className="text-2xl md:text-3xl font-serif text-[#c5a059] mb-2">Welcome to Your Dashboard</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Manage your rewards, view your coupons, and discover exclusive restaurant offers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/userdashboard/rewards"
            className="group bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#c5a059]/60 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <Gift size={32} className="text-[#c5a059]" />
              <ArrowRight size={20} className="text-[#c5a059] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-xl font-serif text-white">My Rewards</h3>
            <p className="text-gray-400 text-sm mt-1">Coupons, scratch cards and offers.</p>
          </Link>

          <Link
            href="/resturant/rewards/login"
            className="group bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#c5a059]/60 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <LogIn size={32} className="text-[#c5a059]" />
              <ArrowRight size={20} className="text-[#c5a059] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-xl font-serif text-white">Sign In</h3>
            <p className="text-gray-400 text-sm mt-1">Access your account.</p>
          </Link>

          <Link
            href="/resturant/rewards/register"
            className="group bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#c5a059]/60 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <UserPlus size={32} className="text-[#c5a059]" />
              <ArrowRight size={20} className="text-[#c5a059] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-xl font-serif text-white">Create Account</h3>
            <p className="text-gray-400 text-sm mt-1">Join and start earning rewards.</p>
          </Link>

          <Link
            href="/resturant"
            className="group bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#c5a059]/60 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <Ticket size={32} className="text-[#c5a059]" />
              <ArrowRight size={20} className="text-[#c5a059] group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-xl font-serif text-white">Restaurant</h3>
            <p className="text-gray-400 text-sm mt-1">Back to the restaurant page.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
