"use client";

import React from "react";
import { Car, Wifi, CreditCard, User, Languages, Utensils, Clock, Dog, Bed } from "lucide-react";
import Image from "next/image";

interface AmenityItem {
  name: string;
  free?: boolean;
}

interface FacilityCategory {
  title: string;
  icon: React.ReactNode;
  items: AmenityItem[];
}

const facilities: FacilityCategory[] = [
  {
    title: "Popular amenities",
    icon: <Wifi className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "Parking", free: true },
      { name: "Breakfast", free: true },
      { name: "Wi-Fi", free: true },
    ],
  },
  {
    title: "Policies & payments",
    icon: <CreditCard className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "Smoke-free property" },
      { name: "Credit cards accepted" },
      { name: "Debit cards accepted" },
      { name: "Cash accepted" },
    ],
  },
  {
    title: "Services",
    icon: <Clock className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "Front desk (24-hour)" },
      { name: "Baggage storage" },
      { name: "Concierge" },
      { name: "Full-service laundry" },
      { name: "Lift" },
    ],
  },
  {
    title: "Parking & transport",
    icon: <Car className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "Parking", free: true },
    ],
  },
  {
    title: "Accessibility",
    icon: <User className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "Not accessible" },
    ],
  },
  {
    title: "Languages spoken",
    icon: <Languages className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "English" },
      { name: "Hindi" },
    ],
  },
  {
    title: "Food and drink",
    icon: <Utensils className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "Restaurant" },
      { name: "Table service" },
      { name: "Room service" },
      { name: "Breakfast", free: true },
    ],
  },
  {
    title: "Pets",
    icon: <Dog className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "No pets allowed" },
    ],
  },
  {
    title: "Rooms",
    icon: <Bed className="w-6 h-6 text-[#AB8A63]" />,
    items: [
      { name: "Air conditioning" },
    ],
  },
];

export default function HotelFacilities() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#f8f7f5] overflow-hidden">
      {/* Decorative background shape for desktop */}
      <div className="hidden lg:block absolute top-0 left-0 w-1/2 h-full bg-[#efedeb]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content Side */}
          <div className="z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#c5a37f]"></span>
              <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-sm">
                Facilities
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-12">
              Hotel Facilities
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {facilities.map((category, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#f8f7f5] rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-base font-serif text-[#1a1a1a] font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((amenity, amenityIdx) => (
                      <li key={amenityIdx} className="flex items-center justify-between text-gray-600 text-xs">
                        <span className="text-gray-700">{amenity.name}</span>
                        {amenity.free && (
                          <span className="text-green-600 font-semibold text-[10px] bg-green-50 px-2 py-0.5 rounded-full border border-green-100">FREE</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783764963/DSC_0221_ocnztf.jpg"
                alt="Modern Hotel Room"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element (optional circular line seen in bottom left of screenshot) */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gray-200 rounded-full opacity-20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}