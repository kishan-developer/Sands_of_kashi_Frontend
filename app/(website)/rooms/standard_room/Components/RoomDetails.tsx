"use client";

import React from "react";
import Image from "next/image";
import { 
  Wifi, 
  ShowerHead, 
  Plane, 
  Tent, 
  Refrigerator, 
  Headphones, 
  Laptop, 
  Dumbbell, 
  Waves,
  CheckCircle2 
} from "lucide-react";
import BookingForm from "../../../Components/BookingForm";

// --- Types ---
interface Amenity {
  icon: React.ReactNode;
  label: string;
}

// --- Data ---
const amenities: Amenity[] = [
  { icon: <Wifi size={20} />, label: "Free Wifi" },
  { icon: <ShowerHead size={20} />, label: "Shower" },
  { icon: <Plane size={20} />, label: "Airport transport" },
  { icon: <Tent size={20} />, label: "Balcony" },
  { icon: <Refrigerator size={20} />, label: "Refrigerator" },
  { icon: <Headphones size={20} />, label: "24/7 Support" },
  { icon: <Laptop size={20} />, label: "Work Desk" },
  { icon: <Dumbbell size={20} />, label: "Fitness Center" },
  { icon: <Waves size={20} />, label: "Swimming Pool" },
];

const features: string[] = [
  "Children and extra beds",
  "Climate Control",
  "Art and Decor",
  "Coffee/Tea Maker",
  "High-End Bedding",
  "Smart Technology"
];

export default function RoomDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* LEFT: Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Header Information */}
            <div>
              <p className="text-[#c5a37f] text-2xl font-serif mb-2">₹4000</p>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6">Standard Room </h1>
              <div className="flex gap-6 text-gray-400 text-sm mb-8">
                 <span className="flex items-center gap-1">📏 130 sq.ft (12 sq.mt)</span>
                 <span className="flex items-center gap-1">👥 Max 3 Guests</span>
              </div>
              <p className="text-gray-500 leading-relaxed text-base">
                Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and style. 
                Each room features modern amenities, plush furnishings, and thoughtful touches to ensure a relaxing stay. 
                Whether you are here for business or leisure, our Standard Room provides the perfect sanctuary.
              </p>
            </div>

            {/* Visual Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[450px]">
              <Image 
                src="/hotel/DSC_0253.JPG" 
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl shadow-sm" 
                alt="Room View 1" 
              />
              <Image 
                src="/hotel/DSC_0254.JPG" 
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl shadow-sm" 
                alt="Room View 2" 
              />
            </div>

            {/* Room Amenities Section */}
            <div className="pt-4">
              <h1 className="text-2xl font-serif mb-8 border-b border-gray-100 pb-4 text-black">Room Amenities</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8">
                {amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-500 text-sm hover:text-[#c5a37f] transition-colors group">
                    <span className="text-[#c5a37f] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Room Features Section */}
            <div>
              <h1 className="text-2xl font-serif mb-8 border-b border-gray-100 pb-4">Room Features</h1>
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
                <Image 
                  src="/hotel/DSC_0272.JPG" 
                  fill
                  className="object-cover" 
                  alt="Main Feature View" 
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                    <CheckCircle2 size={16} className="text-[#c5a37f] shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar Booking Widget */}
          <div className="relative">
            <div className="lg:sticky lg:top-24">
              <BookingForm initialRoomType="Standard Room" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}