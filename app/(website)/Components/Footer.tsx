"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Map, MapPinCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  

  return (
    <footer className="bg-[#f8f7f5] pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 opacity-5 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 200 200">
          <circle cx="10" cy="10" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="10" cy="10" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="10" cy="10" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>




      <div className="max-w-7xl mx-auto px-2 md:px-6">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
          <h1 className="text-3xl md:text-6xl font-serif text-[#1a1a1a]">
            Join Our Newsletter
          </h1>
          <div className="relative w-full max-w-md">
            <div className="flex items-center bg-white p-2 rounded-lg shadow-sm border border-gray-100">
              <input
                type="email"
                placeholder="Enter your mail"
                className="flex-grow px-2 md:px-4 py-2 outline-none text-gray-600 bg-transparent"
              />
              <button className="bg-[#b48f6a] hover:bg-[#8c735a] text-white px-2 md:px-6 py-3 rounded-md transition-colors text-sm font-medium">
                Subscribe
              </button> 
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-1">
          {/* Brand Info */}
          <div className="space-y-6 ">
            <div className="flex items-center gap-2">

              <img src="/logo.png" alt="logo" className="h-14 w-auto" />
              {/* <h3 className="text-2xl font-serif text-[#1a1a1a]">Sands Of Kashi</h3> */}
            </div>

            <p className="text-gray-500 leading-relaxed text-lg">
              Experience the rich cultural heritage of Varanasi with a blend of modern comfort and traditional elegance.
            </p>

            <div className="pt-4 opacity-20">
              <svg width="100" height="40" viewBox="0 0 100 40">
                <path d="M0 20 Q 25 0, 50 20 T 100 20" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h4 className="text-lg text-black font-serif mb-6">Quick Links</h4>
            <ul className="space-y-4 text-md text-gray-500">
              <li><Link href="/rooms" className="hover:text-[#b48f6a] transition-colors">Rooms & Suites</Link></li>
              <li><Link href="/resturant" className="hover:text-[#b48f6a] transition-colors">Resturant</Link></li>
              <li><Link href="/about" className="hover:text-[#b48f6a] transition-colors">About</Link></li>
              <li><Link href="/blogs" className="hover:text-[#b48f6a] transition-colors">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-[#b48f6a] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Guest Service */}
          <div className="">
            <h4 className="text-lg text-black font-serif mb-6">Guest Service</h4>
            <ul className="space-y-4 text-md text-gray-500">
              <li>24/7 Front Desk</li>
              <li>Parking</li>
              <li> Room Service</li>
              <li>Free Wi-Fi</li>
              <li><Link href="/resturant" className="hover:text-[#b48f6a] transition-colors">Resturant</Link></li>

            </ul>
          </div>

          {/* Contact Us */}
          <div className="">
            <h4 className="text-lg text-black font-serif mb-6">Contact Us</h4>
            <ul className="space-y-4 text-md text-gray-500">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#b48f6a]" />
                +91-7522801564, +91-5423533526
              </li>

              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#b48f6a]" />
                info@Sandsofkashi.com , Sandsofkashi@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <MapPinCheck className="text-[#b48f6a] w-10 h-10" />
                C 19/27-14-A-C, Opposite Sigra P.S. Gulab Bagh Colony, Varanasi 221002
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6">
          <a href="https://www.linkedin.com/in/kishan-kumar-ray-372972234/" target="_blank" className="text-gray-400 text-md">
            Copyright © 2026 Coral-Group Developed By "Kishan Kumar Ray"
          </a>

          <div className="flex items-center gap-2 md:gap-8 text-md text-gray-500">
            <Link href="#" className="hover:text-[#b48f6a]">Facebook</Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-[#b48f6a]">Linkedin</Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-[#b48f6a]">Twitter</Link>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="bg-[#b48f6a] text-white p-3 rounded-md hover:bg-[#8c735a] transition-all shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Background Floral/Pattern Element */}
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none">
        <div className="w-32 h-32 border-4 border-dotted border-gray-400 rounded-full animate-spin-slow" />
      </div>
    </footer>
  );
}