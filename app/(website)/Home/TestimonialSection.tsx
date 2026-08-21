"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  stars: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mahak Minta",
    role: "Local Explorer",
    image: "/reviews/mahak.png",
    stars: 5,
    quote: "Excellent food, peaceful atmosphere, and very courteous staff. Everything was well maintained, and the overall experience was comfortable and enjoyable. Highly recommended when visiting Sigra."
  },
  {
    id: 2,
    name: "Neeti Mishra",
    role: "Official Visit",
    image: "/reviews/neeti.png",
    stars: 5,
    quote: "Had a wonderful experience here. The food was delicious, the ambience was calm and pleasant, and the service was warm and professional. Definitely a great place to stay and dine."
  },
  {
    id: 3,
    name: "Amarjeet Rai",
    role: "Business Man",
    image: "/reviews/abul.png",
    stars: 5,
    quote: "Really enjoyed the hospitality and overall ambience. The rooms were comfortable, the food was tasty, and the staff was attentive and helpful throughout our visit. Would happily recommend this place."
  },
  {
    id: 4,
    name: "Krishna Raj Singh",
    role: "Business Man",
    image: "/reviews/kshitij.png",
    stars: 5,
    quote: "Wonderful experience with delicious food, a relaxing ambience, and excellent hospitality. The staff was friendly, attentive, and professional. A comfortable and enjoyable place to stay—highly recommended."
  }
 
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="py-24 bg-[#fffcf9]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c5a37f]"></span>
              <p className="text-[#c5a37f] font-medium uppercase tracking-widest text-sm">
                Guest Reviews
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
              What Our Guests Say
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-gray-200 flex text-[#1a1a1a] items-center justify-center rounded-full hover:bg-[#c5a37f] hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-gray-200 flex text-[#1a1a1a] items-center justify-center rounded-full hover:bg-[#c5a37f] hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative overflow-hidden min-h-[450px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-12 items-center"
            >
              {/* Image Side */}
              <div className="relative aspect-square w-full max-w-[350px] mx-auto">
                <div className="absolute inset-0 border-[1px] border-[#c5a37f]/20 rounded-full scale-110 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
                  <img
                    src={current.image}
                    alt="Guest"
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex flex-col text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill={i < current.stars ? "#c5a37f" : "none"}
                      stroke={i < current.stars ? "#c5a37f" : "#ccc"}
                      className="drop-shadow-sm"
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-[#1a1a1a] font-serif leading-relaxed mb-10 italic">
                  &quot;{current.quote}&quot;
                </blockquote>

                <div className="mt-auto">
                  <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Verified Guest</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden gap-8 justify-center mt-12">
          <button
            onClick={prevTestimonial}
            className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-full text-[#1a1a1a] active:bg-[#c5a37f] active:text-white transition-all shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-full text-[#1a1a1a] active:bg-[#c5a37f] active:text-white transition-all shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}