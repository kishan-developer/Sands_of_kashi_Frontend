"use client";

import React from "react";

export default function BlogHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/drmpv5vne/image/upload/v1783764978/DSC_0360_gdf7ab.jpg')`, // Replace with your actual image path
        }}
      >
        {/* The Dark Overlay - Essential for text readability */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-[0.7]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Title with Serif Font */}
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-serif mb-6 tracking-tight">
          Our Blog
        </h1>

        {/* Subtitle/Description */}
        <p className="text-white/90 text-sm md:text-base lg:text-lg font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Discover the blog where luxury, comfort, and adventure come together.
        </p>
      </div>

      {/* Optional: Subtle Bottom Gradient for smooth transition to next section */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" /> */}
    </section>
  );
}