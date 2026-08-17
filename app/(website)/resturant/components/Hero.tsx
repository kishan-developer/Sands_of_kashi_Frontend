import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783768649/DSC_0366_shctsq.jpg"
                    alt="Restaurant Ambience"
                    className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl">
                <div className="flex justify-center mb-6">
                    <span className="flex items-center gap-2 bg-[#c5a059]/10 border border-[#c5a059]/30 px-4 py-1 rounded-full text-[#c5a059] text-xs uppercase tracking-widest font-bold">
                        <Star size={14} fill="currentColor" /> Masala Mist
                    </span>
                </div>
                <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                    Experience <span className="text-[#c5a059]">Authentic</span> Taste & Luxury Dining
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                    Experience the authentic flavors of our cuisine, where time-honored recipes meet creative culinary artistry. Every dish is thoughtfully prepared with traditional techniques, genuine flavors, and the freshest ingredients, bringing the true essence of our restaurant to every plate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#reserve" className="bg-[#c5a059] text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#c5a059]/20">
                        Reserve Table
                    </a>
                    <a href="#menu" className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        View Menu
                    </a>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <p className="text-[#c5a059] font-serif text-2xl font-bold">12:00 AM - 23:00 PM</p>
                        <p className="text-xs uppercase tracking-widest text-gray-500">Opening Hours</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[#c5a059] font-serif text-2xl font-bold">5000+</p>
                        <p className="text-xs uppercase tracking-widest text-gray-500">Happy Guests</p>
                    </div>
                    <div className="hidden md:block text-center">
                        <p className="text-[#c5a059] font-serif text-2xl font-bold">Award Winning</p>
                        <p className="text-xs uppercase tracking-widest text-gray-500">Chef & Team</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
