
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "../Components/BookingModal";
import { MoveLeft, MoveRight } from "lucide-react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [
    // "./photo/DSC_0360.JPG",
    "https://res.cloudinary.com/drmpv5vne/image/upload/v1783764978/DSC_0360_gdf7ab.jpg",
    "https://res.cloudinary.com/drmpv5vne/image/upload/v1783765318/DSC_0252_ytc4df.jpg",
    "https://res.cloudinary.com/drmpv5vne/image/upload/v1783764974/DSC_0288_ph0phq.jpg"
  ];
  const [current, setCurrent] = useState(0);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const nextSlide = useCallback(() =>
    setCurrent((prev) => (prev + 1) % images.length), [images.length]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 4s
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[100vh] md:h-screen flex flex-col justify-center items-center text-white overflow-hidden">

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Hero background"
            fill
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="hidden md:absolute left-10 top-1/2 -translate-y-1/2 z-20 bg-black hover:bg-black text-white p-5 rounded-full backdrop-blur-md transition"
      >
        <MoveLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="hidden md:absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-black hover:bg-black text-white p-3 md:p-5 rounded-full backdrop-blur-md transition"
      >
        <MoveRight />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-[-30vh] md:mt-[-40vh] lg:mt-[-80px]">

        {/* Top Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-4 ">
          <div className="h-[1px] w-8 bg-white/60" />
          <span className="uppercase tracking-[0.3em] text-sm font-light">
            Welcome to Our Hotel
          </span>
          <div className="h-[1px] w-8 bg-white/60" />
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif md:mb-2 mb-1 leading-tight">
          Experience Pure Comfort <br />
          {/* <span className="italic">Comfort & Elegance</span> */}
        </h1>

        {/* Sub Text */}
        <p className="text-md md:text-md lg:text-lg font-light max-w-2xl mx-auto mb-2 md:mb-5 lg:mb-8 opacity-90">
          Experience pure comfort at Sands of Kashi Hotel, where elegant rooms, warm hospitality, and a peaceful ambience <br /> create a perfect stay.
        </p>

        {/* CTA Button */}
        <div className="hidden md:flex items-center justify-center gap-5 md:gap-20">
          <button
            onClick={handleBookNow}
            className="bg-[#b5946a] hover:bg-[#a3835a] transition-colors px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium"
          >
            Book Your Stay
          </button>

          <Link
            href="/contact"
            className="bg-[#b5946a] hover:bg-[#a3835a] transition-colors px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium"
          >
            Contact Now
          </Link>
        </div>
      </div>

      {/* Booking Bar */}
      {/* <BookingBar /> */}
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
