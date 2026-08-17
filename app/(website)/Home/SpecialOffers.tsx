"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useState } from 'react';
import BookingModal from '../Components/BookingModal';

// 1. Define the Interface for an Offer
interface Offer {
  title: string;
  price: string;
  image: string;
  features: string[];
  isLarge?: boolean;
}

const offers: Offer[] = [
  {
    title: "Royal Suite Room",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783765570/DSC_0222_kzr40q.jpg",
    price: "₹5500.00",
    features: [
      "Healthy breakfast and lunch",
      "Access to all Service",
    ],
    isLarge: true,
  },
  {
    title: "Standard Room",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783765559/DSC_0262_yfggis.jpg",
    price: "₹3500.00",
    features: [
      "15% off on family suites",
      "Free meals for kids under 12",
      "Complimentary tickets",
      "The local amusement park",
    ],
    isLarge: false,
  },
  {
    title: "Executive Room",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783765559/DSC_0282_tde5ty.jpg",
    price: "₹4500.00",
    features: [
      "Healthy breakfast and lunch",
      "Access to all Service",
    ],
    isLarge: false,
  },

];

export default function SpecialOffers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleBookNow = (roomTitle: string) => {
    setSelectedRoom(roomTitle);
    setIsModalOpen(true);
  };

  const largeOffer = offers.find((o) => o.isLarge);
  const smallOffers = offers.filter((o) => !o.isLarge);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
            <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-sm">
              Special Offer
            </p>
            <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-[#1a1a1a]">
            Special Offer
          </h1>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Side: Large Vertical Card */}
          {largeOffer && (
            <div className="flex flex-col h-full bg-[#1a1a1a] rounded-xl overflow-hidden group">
              {/* Fixed h-[full] to h-full or a specific height for mobile */}
              <div className="relative h-[300px] md:h-[450px] lg:h-full overflow-hidden">
                <img
                  src={largeOffer.image}
                  alt={largeOffer.title}

                  className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-10 text-white">
                <h3 className="text-2xl font-serif mb-6">{largeOffer.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  {largeOffer.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={16} className="text-white shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-3xl  text-[#c5a37f] mb-6">{largeOffer.price}</p>
                <button
                  onClick={() => handleBookNow(largeOffer.title)}
                  className="bg-[#c5a37f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1a1a] transition-colors"
                >
                  Book Your Stay
                </button>
              </div>
            </div>
          )}

          {/* Right Side: Two Horizontal Stacked Cards */}
          <div className="flex flex-col gap-8">
            {smallOffers.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-[#1a1a1a] rounded-xl overflow-hidden group min-h-[300px]"
              >
                <div className="relative w-full md:w-1/2 h-[250px] md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}

                    className="object-cover h-full group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-2xl font-serif text-white mb-4">{item.title}</h3>
                  <div className="space-y-3 mb-6">
                    {item.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                        <CheckCircle2 size={14} className="text-white shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl  text-[#c5a37f] mb-4">{item.price}</p>
                  <button
                    onClick={() => handleBookNow(item.title)}
                    className="bg-[#c5a37f] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1a1a] transition-colors"
                  >
                    Book Your Stay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        placeName={selectedRoom}
      />
    </section>
  );
}