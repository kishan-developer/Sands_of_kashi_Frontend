"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-[120] transition-colors duration-300 ${scrolled ? "bg-[#000000]/80" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">

        {/* LOGO */}
        <Link href="/" className=" z-120 flex items-center">
          <Image src="/logo.png" alt="logo" width={88} height={88} className="h-16 md:h-20 lg:h-22 w-auto" />
        </Link>

        {/* DESKTOP NAV - Hidden on mobile and tablet, visible on laptop/desktop */}
        <div className="hidden lg:flex items-center  gap-5">
          <nav className="flex text-base lg:text-lg items-center capitalize space-x-4 lg:space-x-6 text-white font-medium">
            <Link href="/" className="hover:text-[#b5946a] transition-colors font-serif uppercase hover:border-b-2 hover:border-[#b5946a]">Home</Link>
            <Link href="/booking" className="hover:text-[#b5946a] transition-colors font-serif uppercase hover:border-b-2 hover:border-[#b5946a]">Our Rooms</Link>
            <Link href="https://masalamist.in" target="_blank" className="hover:text-[#b5946a] transition-colors font-serif uppercase hover:border-b-2 hover:border-[#b5946a]">Restaurant</Link>
            <Link href="/about" className="hover:text-[#b5946a] transition-colors font-serif uppercase hover:border-b-2 hover:border-[#b5946a]">About</Link>
            <Link href="/blogs" className="hover:text-[#b5946a] transition-colors font-serif uppercase hover:border-b-2 hover:border-[#b5946a]">Blogs</Link>
            <Link href="/contact" className="hover:text-[#b5946a] transition-colors font-serif uppercase hover:border-b-2 hover:border-[#b5946a]">Contact</Link>
          </nav>

          <Link
            href="/booking"
            className="px-4 lg:px-6 py-2 font-serif uppercase bg-[#b5946a] text-white text-sm lg:text-base rounded-md hover:bg-[#705c49] transition shadow-md hover:shadow-lg active:scale-95"
          >
            Book Your Stay
          </Link>
        </div>

        {/* MOBILE/TABLET MENU BUTTON */}
        <button
          className="lg:hidden z-120 text-white hover:text-[#b5946a] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE/TABLET MENU */}
      {open && (
        <div className="lg:hidden fixed pt-20 top-[-2px] left-0 right-0 bg-black/95 backdrop-blur-sm border-t px-8 pb-4 shadow-lg animate-slideDown">
          <nav className="flex flex-col space-y-3 text-white mt-4 border-t border-white/20 opacity-0 animate-fadeIn">
            <Link href="/" onClick={() => setOpen(false)} className="py-2 hover:text-[#b5946a] transition-colors font-serif uppercase">Home</Link>
            <Link href="/rooms" onClick={() => setOpen(false)} className="py-2 hover:text-[#b5946a] transition-colors font-serif uppercase">Our Rooms</Link>
             <Link href="https://masalamist.in" target="_blank" className="hover:text-[#b5946a] transition-colors font-serif uppercase hover:border-b-2 hover:border-[#b5946a]">Restaurant</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="py-2 hover:text-[#b5946a] transition-colors font-serif uppercase">About</Link>
            <Link href="/blogs" onClick={() => setOpen(false)} className="py-2 hover:text-[#b5946a] transition-colors font-serif uppercase">Blogs</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-[#b5946a] transition-colors font-serif uppercase">Contact</Link>
          </nav>

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="w-full mt-4 px-6 py-3 bg-[#b5946a] font-serif uppercase text-white text-sm rounded-md hover:bg-[#705c49] transition shadow-md hover:shadow-lg active:scale-95 opacity-0 animate-fadeIn"
          >
           Book Your Stay
          </Link>
        </div>
      )}
    </header>
  );
}