"use client";

import Link from "next/link";

export default function DiningExperience() {
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/drmpv5vne/image/upload/v1783768649/DSC_0366_shctsq.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex-1 text-white text-center lg:text-left">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
                <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-sm">
                  Dining Experience
                </p>
                <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                A Taste Worth Remembering
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From leisurely breakfasts to comforting dinners, enjoy a delicious dining experience designed to complement your stay.
              </p>
            </div>

            <Link
              href="https://masalamist.in"
              target="_blank"
              className="inline-block bg-[#c5a37f] text-white py-4 px-8 rounded-lg font-semibold text-sm uppercase tracking-widest hover:bg-[#1a1a1a] transition-colors"
            >
              Explore Dining
            </Link>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-[#c5a37f] mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Multi-Cuisine Restaurant</h3>
              <p className="text-gray-300 text-sm">In-house restaurant serving diverse cuisines</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-[#c5a37f] mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">24-Hour In-Room Dining</h3>
              <p className="text-gray-300 text-sm">Delicious meals delivered to your room anytime</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-[#c5a37f] mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Leisurely Breakfasts</h3>
              <p className="text-gray-300 text-sm">Start your day with a hearty breakfast spread</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-[#c5a37f] mb-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Comforting Dinners</h3>
              <p className="text-gray-300 text-sm">End your day with exquisite dining experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
