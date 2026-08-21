"use client";

import React from "react";

export default function WelcomeSection() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Overlapping Images */}
        <div className="relative h-[500px] md:h-[600px]">
          {/* Main Large Image */}
          <div className="absolute left-0 bottom-0 w-[85%] h-[90%] rounded-2xl overflow-hidden border-8 border-white shadow-xl z-10">
            <img
              src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783764978/DSC_0361_uqgmnq.jpg"
              // Replace with your image
              alt="Luxury Bedroom"

              className="object-cover w-full h-full "
            />
          </div>

          {/* Top Overlapping Image */}
          <div className="absolute right-0 top-100 w-[40%] h-[40%] rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-20">
            <img
              // Replace with your image
              src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783764978/DSC_0360_gdf7ab.jpg"
              alt="Room Detail"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute left-[-20px] bottom-10 bg-white p-6 rounded-xl shadow-2xl z-30 flex items-center gap-4 animate-bounce-slow">
            <div className="bg-[#fdf8f3] p-3 rounded-lg">
              {/* Replace with your specific SVG icon */}
              <div className="w-10  h-10 border-2 border-[#b5946a] rounded-full flex items-center justify-center text-[#b5946a] font-bold">
                10+
              </div>
            </div>
            <div>
              {/* <p className="text-2xl font-bold text-gray-800">10+</p> */}
              <p className="text-sm text-gray-500 whitespace-nowrap"> Years Experience Staff</p>
            </div>
          </div>
        </div>


                    {/* Right Side: Text Content */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="w-10 h-[1px] bg-[#c5a37f]"></span>
                            <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-sm">
                                About Us
                            </p>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] leading-tight">
                            Welcome To Our Sands Of Kashi <br className="hidden md:block" /> Hotel & Resort
                        </h1>

                        <p className="text-gray-500 leading-relaxed text-sm md:text-base lg:max-w-xl">

                            A proud unit of Coral Group, Sands of Kashi Hotel & Resort offers the perfect blend of Varanasi&apos;s timeless heritage and modern hospitality. Designed for both business and leisure travelers, our hotel provides a comfortable and memorable stay with warm service and contemporary amenities.

                        </p>

                        <p className="text-gray-500 leading-relaxed text-sm md:text-base lg:max-w-xl">
                            Experience thoughtfully designed accommodations, exceptional dining at our in-house restaurant, elegant event and banquet spaces, and personalized hospitality that reflects the spirit of Kashi. Whether you&apos;re visiting for business, celebrations, or a spiritual journey, Sands of Kashi ensures every moment is comfortable, convenient, and memorable.
                        </p>

                        {/* Signature / Decorative Element */}
                        <div className="pt-6">
                            <div className="text-4xl font-serif italic text-[#c5a37f] opacity-80">
                                Sands Of Kashi
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}