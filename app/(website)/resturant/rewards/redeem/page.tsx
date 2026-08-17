"use client";

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, Gift, Tag, Clock, Ticket } from 'lucide-react';

function RedeemContent() {
  const searchParams = useSearchParams();
  const [redeemed, setRedeemed] = useState(false);

  const code = searchParams.get('code') || 'RST-82A92';
  const title = searchParams.get('title') || '₹100 OFF';
  const minimumBill = searchParams.get('minimumBill') || '₹999';
  const validUntil = searchParams.get('validUntil') || '10 Nov 2026';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans pb-24">
      <div className="border-b border-white/10 pt-24 md:pt-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
          <Link
            href="/resturant/rewards"
            className="flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={20} />
            <span className="font-bold">Back to Rewards</span>
          </Link>
          <h1 className="text-xl md:text-xl md:text-2xl font-serif text-[#c5a059]">Redeem</h1>
          <div className="hidden sm:block w-24" />
        </div>
      </div>

      <div className="max-w-xl mx-auto p-4 md:p-6">
        <div className="bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-4 md:p-8 shadow-2xl shadow-black/50">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-serif text-[#c5a059] mb-1">Restaurant Reward</h2>
            <p className="text-gray-400 text-sm">Scan or show this QR to the staff</p>
          </div>

          <div className="bg-[#0a0a0a] border border-[#c5a059]/20 rounded-2xl p-4 md:p-6 mb-6 flex justify-center">
            <QRCodeSVG
              value={code}
              size={200}
              bgColor="#0a0a0a"
              fgColor="#c5a059"
              level="H"
              imageSettings={{
                src: '/logo.png',
                height: 44,
                width: 44,
                excavate: true,
              }}
            />
          </div>

          {!redeemed ? (
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Click below to reveal your offer details.
              </p>
              <button
                onClick={() => setRedeemed(true)}
                className="w-full bg-[#c5a059] text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white transition-all"
              >
                Redeem
              </button>
            </div>
          ) : (
            <div className="border border-[#c5a059] rounded-2xl p-6 bg-[#0a0a0a] text-center">
              <div className="mb-5">
                <Gift size={40} className="mx-auto text-[#c5a059] mb-2" />
                <h3 className="text-3xl md:text-4xl font-serif text-[#c5a059]">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">Restaurant Reward</p>
              </div>

              <div className="space-y-3 text-sm text-gray-300 text-left mb-6">
                <div className="flex items-center gap-3">
                  <Tag size={16} className="text-[#c5a059]" /> Minimum Bill: {minimumBill}
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#c5a059]" /> Valid Until: {validUntil}
                </div>
                <div className="flex items-center gap-3">
                  <Ticket size={16} className="text-[#c5a059]" /> Coupon: {code}
                </div>
              </div>

              <p className="text-green-500 text-sm font-bold uppercase tracking-widest">
                Offer Unlocked
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RedeemPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans pb-24 flex items-center justify-center">Loading...</div>}>
      <RedeemContent />
    </Suspense>
  );
}
