"use client";

import React from "react";

export default function ContactHero() {
  return (
     <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-105"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/drmpv5vne/image/upload/v1783764978/DSC_0360_gdf7ab.jpg')`, // Replace with your actual image path
        }}
      >
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-[0.7]" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Title with Serif Font and Fade-In Animation */}
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Contact Us
        </h1>
        
        {/* Description Subtext */}
        <p className="text-white/90 text-sm md:text-base lg:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-10 delay-300 duration-1000">
          We are here to assist you with any inquiries and ensure your stay is perfect.
        </p>
      </div>

      {/* Bottom Soft Fade for smooth transition into the blog cards */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" /> */}
    </section>
  );
}