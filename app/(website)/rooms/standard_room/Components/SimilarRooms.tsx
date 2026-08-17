"use client";

import React from "react";
import Image from "next/image";
import { Users, Ruler, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Room {
  id: number;
  title: string;
  image: string;
  size: string;
  capacity: string;
  price: string;
  bed: string;
  bathroom: string;
  url: string;
}

const similarRooms: Room[] = [
  {
    id: 1,
    title: "Standard Room",
    image: "/DSC_0262.JPG",
    bed: "1 King Bed",
    bathroom: "1 Bathroom",
    size: "130 sq.ft (12 sq.mt)",
    capacity: "Max 3 Guests",
    price: "₹3500.00",
    url: "/rooms/standard_room"
  },
  {
    id: 2,
    title: "Executive Room",
    image: "/DSC_0282.JPG",
    bed: "1 King Bed",
    bathroom: "1 Bathroom",
    size: "200 sq.ft (19 sq.mt)",
    capacity: "Max 3 Guests",
    price: "₹4500.00",
    url: "/rooms/executive_room"
  },
  {
    id: 3,
    title: "Royal Suite Room",
    image: "/DSC_0222.JPG",
    bed: "1 King Bed",
    bathroom: "1 Bathroom",
    size: "282 sq.ft (26 sq.mt)",
    capacity: "Max 3 Guests",
    price: "₹5500.00",
    url: "/rooms/royal_suite_room"
  },
];

export default function SimilarRooms() {
  return (
    <section className="py-24 bg-[#f8f7f5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c5a37f]"></span>
              <p className="text-[#c5a37f] font-medium uppercase tracking-widest text-sm">
                Explore More
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
              Similar Rooms
            </h1>
          </div>
          <Link href="/rooms" className="flex items-center gap-2 text-[#1a1a1a] font-medium hover:text-[#c5a37f] transition-colors group">
            View All Rooms 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold text-[#1a1a1a]">
                  {room.price} <span className="text-gray-400 font-normal">/ Night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-4 text-black group-hover:text-[#c5a37f] transition-colors">
                  {room.title}
                </h3>
                
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <Ruler size={16} className="text-[#c5a37f]" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#c5a37f]" />
                    <span>{room.capacity}</span>
                  </div>
                </div>

                <Link
                  href={room.url}
                  className="block w-full py-4 border border-gray-100 rounded-xl font-medium text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 text-center"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}