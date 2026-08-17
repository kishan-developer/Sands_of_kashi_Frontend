"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ArrowLeft,
  Gift,
  Ticket,
  QrCode,
  Clock,
  Tag,
  Award,
  CheckCircle2,
  X,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface Coupon {
  id: string;
  code: string;
  title: string;
  minimumBill: string;
  validUntil: string;
  status: 'Available' | 'Redeemed' | 'Used' | 'Expired';
}

interface ScratchCard {
  id: string;
  reward: string;
  minimumBill: string;
  validUntil: string;
  scratched: boolean;
}

const initialCoupons: Coupon[] = [
  {
    id: '1',
    code: 'RST-82A91',
    title: '10% OFF',
    minimumBill: '₹500',
    validUntil: '11 Nov 2026',
    status: 'Available',
  },
  {
    id: '2',
    code: 'RST-82A92',
    title: '₹100 OFF',
    minimumBill: '₹999',
    validUntil: '10 Nov 2026',
    status: 'Available',
  },
  {
    id: '3',
    code: 'RST-82A93',
    title: '20% OFF',
    minimumBill: '₹1,500',
    validUntil: '01 Sep 2026',
    status: 'Redeemed',
  },
  {
    id: '4',
    code: 'RST-82A94',
    title: 'Free Dessert',
    minimumBill: 'Any order',
    validUntil: '15 Aug 2026',
    status: 'Used',
  },
  {
    id: '5',
    code: 'RST-82A95',
    title: '5% OFF',
    minimumBill: '₹300',
    validUntil: '01 Jul 2026',
    status: 'Expired',
  },
];

const initialRewards: ScratchCard[] = [
  {
    id: '1',
    reward: '20% OFF',
    minimumBill: '₹999',
    validUntil: '30 Sep 2026',
    scratched: false,
  },
  {
    id: '2',
    reward: 'Free Coke',
    minimumBill: 'Any order',
    validUntil: '30 Sep 2026',
    scratched: false,
  },
  {
    id: '3',
    reward: '₹250 OFF',
    minimumBill: '₹1,299',
    validUntil: '30 Sep 2026',
    scratched: true,
  },
];

const RewardsPage = () => {
  const [activeTab, setActiveTab] = useState<'coupons' | 'rewards'>('coupons');
  const [couponTab, setCouponTab] = useState<'Available' | 'Redeemed' | 'Used' | 'Expired'>('Available');
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  const [rewards, setRewards] = useState<ScratchCard[]>(initialRewards);
  const [confirmCoupon, setConfirmCoupon] = useState<Coupon | null>(null);
  const [qrCoupon, setQrCoupon] = useState<Coupon | null>(null);
  const router = useRouter();

  const filteredCoupons = coupons.filter((c) => c.status === couponTab);

  const handleRedeem = (coupon: Coupon) => {
    const query = new URLSearchParams({
      code: coupon.code,
      title: coupon.title,
      minimumBill: coupon.minimumBill,
      validUntil: coupon.validUntil,
    }).toString();
    router.push(`/resturant/rewards/redeem?${query}`);
  };

  const confirmRedeem = () => {
    if (!confirmCoupon) return;
    setCoupons((prev) =>
      prev.map((c) => (c.id === confirmCoupon.id ? { ...c, status: 'Redeemed' } : c))
    );
    setQrCoupon({ ...confirmCoupon, status: 'Redeemed' });
    setConfirmCoupon(null);
    toast.success(`Coupon ${confirmCoupon.code} redeemed!`);
  };

  const scratchNow = (card: ScratchCard) => {
    setRewards((prev) =>
      prev.map((r) => (r.id === card.id ? { ...r, scratched: true } : r))
    );
    toast.success(`You won ${card.reward}!`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans pb-24">
      <ToastContainer theme="dark" position="bottom-right" />

      <div className="border-b border-white/10 pt-24 md:pt-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
          <Link
            href="/resturant"
            className="flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={20} />
            <span className="font-bold">Back to Restaurant</span>
          </Link>
          <h1 className="text-xl md:text-xl md:text-2xl font-serif text-[#c5a059]">Rewards & Coupons</h1>
          <div className="hidden sm:block w-24" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('coupons')}
            className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm transition-all flex items-center gap-2 ${
              activeTab === 'coupons'
                ? 'bg-[#c5a059] text-black'
                : 'border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10'
            }`}
          >
            <Ticket size={16} /> My Coupons
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm transition-all flex items-center gap-2 ${
              activeTab === 'rewards'
                ? 'bg-[#c5a059] text-black'
                : 'border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059]/10'
            }`}
          >
            <Gift size={16} /> My Rewards
          </button>
        </div>

        {activeTab === 'coupons' ? (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {(['Available', 'Redeemed', 'Used', 'Expired'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCouponTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                    couponTab === tab
                      ? 'bg-white/10 text-[#c5a059] border border-[#c5a059]'
                      : 'bg-black border border-white/10 text-gray-400 hover:border-[#c5a059]/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCoupons.length === 0 ? (
                <p className="col-span-full text-center text-gray-500 py-12">
                  No {couponTab.toLowerCase()} coupons.
                </p>
              ) : (
                filteredCoupons.map((coupon) => (
                  <div
                    key={coupon.id}
                    className="relative overflow-hidden bg-gradient-to-br from-[#161616] to-black border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/40 hover:border-[#c5a059]/60 hover:shadow-[#c5a059]/10 transition-all group"
                  >
                    <div className="text-center mb-6">
                      <div className="relative mx-auto w-20 h-20 mb-4">
                        <img
                          src="/logo.png"
                          alt="Sands of Kashi"
                          className="w-fit h-full rounded-full object-cover border-2 border-[#c5a059] p-1 bg-black shadow-md shadow-[#c5a059]/20"
                        />
                        
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif text-[#c5a059]">{coupon.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">Restaurant Reward</p>
                      <div className="h-px w-16 bg-[#c5a059] mx-auto mt-4" />
                    </div>

                    <div className="space-y-2 text-sm text-gray-300 mb-5">
                      <div className="flex items-center gap-2">
                        <Tag size={14} className="text-[#c5a059]" /> Minimum Bill: {coupon.minimumBill}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#c5a059]" /> Valid Until: {coupon.validUntil}
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket size={14} className="text-[#c5a059]" /> Coupon: {coupon.code}
                      </div>
                    </div>

                    <div className="text-center mb-5">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 text-xs text-gray-300 uppercase tracking-widest">
                        {coupon.status === 'Available' && <Tag size={12} className="text-[#c5a059]" />}
                        {coupon.status === 'Redeemed' && <QrCode size={12} className="text-[#c5a059]" />}
                        {coupon.status === 'Used' && <CheckCircle2 size={12} className="text-green-500" />}
                        {coupon.status === 'Expired' && <Clock size={12} className="text-gray-500" />}
                        {coupon.status}
                      </span>
                    </div>

                    {(coupon.status === 'Redeemed' || coupon.status === 'Used') && (
                      <div className="bg-[#0a0a0a] border border-[#c5a059]/20 rounded-xl p-4 mb-4 flex flex-col items-center">
                        <p className="text-[#c5a059] text-xs font-bold uppercase tracking-widest mb-3">
                          Scan at restaurant
                        </p>
                        <QRCodeSVG
                          value={coupon.code}
                          size={160}
                          bgColor="#0a0a0a"
                          fgColor="#c5a059"
                          level="H"
                          imageSettings={{
                            src: '/logo.png',
                            height: 28,
                            width: 28,
                            excavate: true,
                          }}
                        />
                      </div>
                    )}

                    {coupon.status === 'Available' && (
                      <button
                        onClick={() => handleRedeem(coupon)}
                        className="w-full bg-[#c5a059] text-black py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-white transition-all"
                      >
                        Redeem
                      </button>
                    )}
                    {coupon.status === 'Redeemed' && (
                      <button
                        onClick={() => setQrCoupon(coupon)}
                        className="w-full border border-[#c5a059] text-[#c5a059] py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#c5a059]/10 transition-all flex items-center justify-center gap-2"
                      >
                        <QrCode size={16} /> Show Full QR
                      </button>
                    )}
                    {coupon.status === 'Used' && (
                      <div className="w-full py-3 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 text-green-500 border border-green-500/30 bg-green-500/5">
                        <CheckCircle2 size={16} /> Used
                      </div>
                    )}
                    {coupon.status === 'Expired' && (
                      <div className="w-full py-3 rounded-lg font-bold uppercase tracking-widest text-sm text-gray-500 border border-white/10 text-center">
                        Expired
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((card) => (
              <div
                key={card.id}
                className="bg-black border border-white/10 rounded-xl p-6 hover:border-[#c5a059]/50 transition-all"
              >
                <div className="text-center mb-6">
                  <Award size={40} className="mx-auto text-[#c5a059] mb-3" />
                  <h3 className="text-xl font-serif text-white">Scratch Reward</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Scratch Card #{card.id.padStart(3, '0')}
                  </p>
                </div>

                {!card.scratched ? (
                  <div
                    className="relative h-44 rounded-lg bg-gradient-to-br from-[#c5a059]/30 to-black border border-[#c5a059]/30 flex flex-col items-center justify-center mb-4 overflow-hidden group cursor-pointer"
                    onClick={() => scratchNow(card)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="space-y-2 text-center">
                        <p className="text-[#c5a059] font-bold uppercase tracking-widest">
                          Scratch Here
                        </p>
                        <p className="text-gray-400 text-xs">Tap to reveal your special offer</p>
                      </div>
                    </div>
                    <div className="h-10 w-40 bg-[#c5a059]/20 rounded my-4 blur-[2px]" />
                  </div>
                ) : (
                  <div className="h-44 rounded-lg bg-gradient-to-br from-[#c5a059] to-[#8a6a2f] text-black p-6 flex flex-col items-center justify-center mb-4">
                    <p className="text-3xl md:text-4xl font-serif font-bold mb-2">{card.reward}</p>
                    <p className="text-sm font-bold uppercase tracking-widest">You Won!</p>
                  </div>
                )}

                {card.scratched ? (
                  <>
                    <div className="space-y-2 text-sm text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Tag size={14} className="text-[#c5a059]" /> Minimum Bill: {card.minimumBill}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#c5a059]" /> Valid Until: {card.validUntil}
                      </div>
                    </div>
                    <button
                      onClick={() => toast.info('Offer saved to your coupons.')}
                      className="w-full bg-[#c5a059] text-black py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-white transition-all"
                    >
                      View Offer
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => scratchNow(card)}
                    className="w-full bg-[#c5a059] text-black py-3 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-white transition-all"
                  >
                    Scratch Now
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {confirmCoupon && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-[#0a0a0a] border border-[#c5a059] rounded-2xl p-6 md:p-8 max-w-md w-full text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#c5a059] mb-4">Confirm Redemption</h3>
              <p className="text-gray-300 mb-6">
                Are you sure you want to redeem{' '}
                <span className="text-white font-bold">{confirmCoupon.title}</span>?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setConfirmCoupon(null)}
                  className="flex-1 py-3 border border-white/20 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRedeem}
                  className="flex-1 py-3 bg-[#c5a059] text-black rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-white transition-all"
                >
                  Redeem Now
                </button>
              </div>
            </div>
          </div>
        )}

        {qrCoupon && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setQrCoupon(null)}
          >
            <div
              className="bg-[#0a0a0a] border border-[#c5a059] rounded-2xl p-6 md:p-8 max-w-sm w-full text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setQrCoupon(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl md:text-2xl font-serif text-[#c5a059] mb-2">Coupon QR</h3>
              <p className="text-gray-400 text-sm mb-6">Show this QR to the restaurant staff.</p>
              <div className="bg-[#0a0a0a] border border-[#c5a059]/20 p-4 rounded-xl mb-4 flex justify-center">
                <QRCodeSVG
                  value={qrCoupon.code}
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
              <p className="text-[#c5a059] font-bold tracking-widest mb-2">{qrCoupon.code}</p>
              <p className="text-white font-serif text-xl mb-1">{qrCoupon.title}</p>
              <p className="text-gray-400 text-sm">Min. Bill: {qrCoupon.minimumBill}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardsPage;
