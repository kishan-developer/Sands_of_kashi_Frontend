"use client";

import { Wifi, Wind, Coffee, Utensils, Clock, Shirt, Luggage, Car, ChefHat, Bell, ArrowUp } from "lucide-react";
import { useState } from 'react';
import BookingModal from '../Components/BookingModal';

interface AmenityItem {
  name: string;
  icon: React.ReactNode;
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
    icon: <Wifi className="w-8 h-8" />,
    items: [
      { name: "Parking", icon: <Car className="w-4 h-4" />, free: true },
      { name: "Air conditioning", icon: <Wind className="w-4 h-4" /> },
      { name: "Breakfast", icon: <Coffee className="w-4 h-4" />, free: true },
      { name: "Wi-Fi", icon: <Wifi className="w-4 h-4" />, free: true },
    ],
  },
  {
    title: "Food and drink",
    icon: <Utensils className="w-8 h-8" />,
    items: [
      { name: "Restaurant", icon: <Utensils className="w-4 h-4" /> },
      { name: "Table service", icon: <ChefHat className="w-4 h-4" /> },
      { name: "Room service", icon: <Bell className="w-4 h-4" /> },
    ],
  },
  {
    title: "Services",
    icon: <Clock className="w-8 h-8" />,
    items: [
      { name: "Front desk (24-hour)", icon: <Clock className="w-4 h-4" /> },
      { name: "Baggage storage", icon: <Luggage className="w-4 h-4" /> },
    ],
  },
  {
    title: "Additional services",
    icon: <Shirt className="w-8 h-8" />,
    items: [
      { name: "Full-service laundry", icon: <Shirt className="w-4 h-4" /> },
      { name: "Lift", icon: <ArrowUp className="w-4 h-4" /> },
    ],
  },
];

export default function HotelFacilities() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="bg-[#000000]/60 relative bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('https://res.cloudinary.com/drmpv5vne/image/upload/v1786880532/jpeg-optimizer_ARY04270_h0fko2.jpg')" }}>
      <div className="flex p-20 md:p-40 w-full items-center justify-center bg-[#000000]/60">
        <div className="max-w-7xl mx-auto text-center z-20">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
              <p className="text-[#ffffff] font-medium uppercase tracking-[0.2em] text-sm">
                Facilities
              </p>
              <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-[#ffffff]">
              Hotel Facilities
            </h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-[#AB8A63]/30 group"
              >
                <div className="mb-5 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#AB8A63] to-[#8B7355] rounded-2xl shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg text-[#1a1a1a] font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((amenity, amenityIdx) => (
                    <div key={amenityIdx} className="flex items-center justify-between text-gray-600 text-sm py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="text-[#AB8A63]">
                          {amenity.icon}
                        </div>
                        <span>{amenity.name}</span>
                      </div>
                      {amenity.free && (
                        <span className="text-green-600 font-bold text-xs bg-green-100 px-2 py-1 rounded-md">FREE</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleBookNow}
            className="mt-8 bg-[#c5a37f] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#1a1a1a] transition-colors"
          >
            Book Your Stay
          </button>

          <h1 className="mt-10 text-center text-[#ffffff] font-bold text-xl md:text-xl">Note : Extra Person @ ₹1200.00/- *Rates are subject to change</h1>

        </div>
      </div>
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
