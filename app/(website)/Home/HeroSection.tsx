"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="./room_1.jpg" // Replace with your image path
        alt="Luxury Hotel"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-serif leading-tight">
          Experience Varanasi&apos;s <br />
          <span className="text-yellow-400 font-serif">
            Finest Luxury Stay
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mt-4">
          A sanctuary of elegance in the heart of Varanasi
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md text-lg shadow hover:bg-yellow-500 transition">
            Book Now
          </button>

          <button className="border border-yellow-400 text-white px-8 py-3 rounded-md text-lg hover:bg-yellow-400 hover:text-black transition">
            Explore Rooms
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 flex justify-center w-full">
        <div className="w-6 h-10 rounded-full border-2 border-yellow-400 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-yellow-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
