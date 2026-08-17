import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookingBar from './BookingBar';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-50 md:mt-20 bg-[#FFFFFF]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Overlapping Images */}
        <div className="relative h-[500px] md:h-[600px]">
          {/* Main Large Image */}
          <div className="absolute left-0 bottom-0 w-[85%] h-[90%] rounded-2xl overflow-hidden border-8 border-white shadow-xl z-10">
            <img
              src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783764977/DSC_0356_uqafdc.jpg"
              // Replace with your image
              alt="Reseption_area"

              className="object-cover w-full h-full "
            />
          </div>

          {/* Top Overlapping Image */}
          <div className="absolute right-0 top-100 w-[40%] h-[40%] rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-20">
            <img
              // Replace with your image
              src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783764978/hotel_front_m9mphh.jpg"
              alt="hotel_front_look"
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

        {/* Right Side: Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[#b5946a]" />
            <span className="text-[#b5946a] font-medium tracking-wide uppercase text-sm">
              About Us
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Welcome To Our <br />
            Sands Of Kashi Hotel & Resort
          </h1>

          <p className="text-gray-500 leading-relaxed text-sm md:text-base lg:max-w-xl">

            A proud unit of Coral Group, Hotel Sands of Kashi offers the perfect blend of Varanasi's timeless heritage and modern hospitality. Designed for both business and leisure travelers, our hotel provides a comfortable and memorable stay with warm service and contemporary amenities.

          </p>

          <p className="text-gray-500 leading-relaxed text-sm md:text-base lg:max-w-xl">
            Experience thoughtfully designed accommodations, exceptional dining at our in-house restaurant and personalized hospitality that reflects the spirit of Kashi. Whether you're visiting for business, celebrations, or a spiritual journey, Hotel Sands of Kashi ensures every moment is comfortable, convenient, and memorable.
          </p>

          <Link href="/about" className="bg-[#b5946a] hover:bg-[#a3835a] text-white px-10 py-4 rounded-md transition-all font-medium shadow-lg hover:shadow-xl active:scale-95">
            Learn More
          </Link>

          <div className="pt-6">
            <div className="text-4xl font-serif italic text-[#c5a37f] opacity-80">
              Sands Of Kashi
            </div>
          </div>

        </div>
      </div>

      {/* <BookingBar /> */}
    </section>
  );
};

export default AboutSection;