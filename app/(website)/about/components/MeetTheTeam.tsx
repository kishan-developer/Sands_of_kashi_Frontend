"use client";

import React from "react";
import Image from "next/image";

import { Facebook, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook: string;
    linkedin: string;
    twitter: string;
  };
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Emma Elizabeth",
    role: "Manager",
   image: "https://html.themewant.com/moonlit/assets/images/author/author-5.webp",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Jonathon Doe",
    role: "Assistant Manager",
    image: "https://html.themewant.com/moonlit/assets/images/author/author-5.webp",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Emma Elizabeth",
    role: "General Manager",
   image: "https://html.themewant.com/moonlit/assets/images/author/author-5.webp",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
  {
    id: 4,
    name: "Jhon Doe",
    role: "Quality Inspector",
    image: "https://html.themewant.com/moonlit/assets/images/author/author-5.webp",
    socials: { facebook: "#", linkedin: "#", twitter: "#" },
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-10 h-[1px] bg-[#c5a37f]"></span>
            <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-sm">
              Our Team
            </p>
            <span className="w-10 h-[1px] bg-[#c5a37f]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-[#1a1a1a]">
            Meet The Team
          </h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member) => (
            <div key={member.id} className="group flex flex-col items-center">
              
              {/* Profile Image Container */}
              <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-[#1a1a1a]">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {member.role}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
                <a href={member.socials.facebook} className="text-gray-600 hover:text-[#c5a37f] transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={member.socials.linkedin} className="text-gray-600 hover:text-[#c5a37f] transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={member.socials.twitter} className="text-gray-600 hover:text-[#c5a37f] transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}