"use client";

import React from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  className?: string; // Used to control spanning for masonry effect
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/room_1.jpg", alt: "Modern Living Room", className: "md:row-span-2" },
  { id: 2, src: "/room_1.jpg", alt: "Cozy Bedroom" },
  { id: 3, src: "/room_1.jpg", alt: "Ocean View Suite", className: "md:row-span-2" },
  { id: 4, src: "/room_1.jpg", alt: "Classic Lounge" },
  { id: 5, src: "/room_1.jpg", alt: "Armchair Corner" },
  { id: 6, src: "/room_1.jpg", alt: "Luxury Bed" },
  { id: 7, src: "/room_1.jpg", alt: "Tropical View" },
  { id: 8, src: "/room_1.jpg", alt: "Sleek Bedroom Design" },
];

export default function GalleryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative group overflow-hidden rounded-2xl bg-gray-100 ${image.className || ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}