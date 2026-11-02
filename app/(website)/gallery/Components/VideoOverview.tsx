"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a37f]"></span>
            <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-xs md:text-sm">
              Our Video
            </p>
            <span className="w-8 h-[1px] bg-[#c5a37f]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
            Our Restaurant Overview
          </h1>
        </div>

        {/* Video Thumbnail Container */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden group shadow-2xl">
          {/* Background Image / Placeholder */}
          <Image
            src="/room_1.jpg"
            alt="Restaurant Overview"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Centered Interactive Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
              
              {/* Rotating SVG Text Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                  </defs>
                  <text className="fill-white text-[7px] uppercase tracking-[0.25em] font-medium">
                    <textPath xlinkHref="#circlePath">
                      Watch Full Video • Watch Now • Watch Full Video • Watch Now •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Central Glassmorphism Play Icon */}
              <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20">
                <Play className="text-white fill-white ml-1 w-6 h-6 md:w-8 md:h-8" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}