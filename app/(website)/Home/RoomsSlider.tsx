"use client";

import { useState } from "react";
import type { Route } from "next";
import {
  Users,
  Ruler,
  Bed,
  ShowerHead,
  X,
} from "lucide-react";
import Link from "next/link";
import BookingModal from "../Components/BookingModal";
import { Room as BookingRoom } from "../Components/BookingForm";

interface Room {
  id: number;
  title: string;
  image: string;
  hoverImage?: string;
  size: string;
  capacity: string;
  price: string;
  bed: string;
  bathroom: string;
  url: string;
}

const rooms: Room[] = [
  {
    id: 1,
    title: "Standard Room",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783765559/DSC_0262_yfggis.jpg",
    hoverImage:"https://res.cloudinary.com/drmpv5vne/image/upload/v1783765318/DSC_0252_ytc4df.jpg",
    bed: "1 King Bed",
    bathroom: "1 Bathroom",
    size: "130 sq.ft (12 sq.mt)",
    capacity: "Max 3 Guests",
    price: "₹3500.00",
    url: "/booking"
  },
  {
    id: 2,
    title: "Executive Room",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783765559/DSC_0282_tde5ty.jpg",
    hoverImage:"https://res.cloudinary.com/drmpv5vne/image/upload/v1783764968/DSC_0273_d7yn2u.jpg",
    bed: "1 King Bed",
    bathroom: "1 Bathroom",
    size: "200 sq.ft (19 sq.mt)",
    capacity: "Max 3 Guests",
    price: "₹4500.00",
    url: "/booking"
  },
  {
    id: 3,
    title: "Royal Suite Room",
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783765570/DSC_0222_kzr40q.jpg",
    hoverImage:"https://res.cloudinary.com/drmpv5vne/image/upload/v1783764963/DSC_0227_mgde7h.jpg",
    bed: "1 King Bed",
    bathroom: "1 Bathroom",
    size: "282 sq.ft (26 sq.mt)",
    capacity: "Max 3 Guests",
    price: "₹5500.00",
    url: "/booking"
  },
];

const bookingRooms: BookingRoom[] = rooms.map((room) => ({
  _id: String(room.id),
  title: room.title,
  description: "",
  images: [room.image],
  amenities: [],
  features: [],
  maxGuests: Number(room.capacity.match(/\d+/)?.[0] || 3),
  price: Number(room.price.replace(/[^\d.]/g, "")),
  size: room.size,
  roomType: room.title,
}));

export default function RoomsGridSection() {
  const [modalRoom, setModalRoom] = useState<Room | null>(null);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);

  return (
    <section className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
            <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-sm">
              Rooms
            </p>
            <span className="w-12 h-[1px] bg-[#c5a37f]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-[#1a1a1a]">
            Our Rooms
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover comfort and elegance in our selection of rooms crafted for a luxurious stay.
          </p>
        </div>

        {/* Heading */}
        {
        /* 
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8c735a]">Our Rooms</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover comfort and elegance in our selection of rooms crafted for a luxurious stay.
          </p>
        </div> 
        */
        }

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                {room.hoverImage && (
                  <img
                    src={room.hoverImage}
                    alt={`${room.title} - alternate`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                  />
                )}
              </div>

              <div className="p-4 bg-white">

                {/* Title */}
                <h3 className="text-2xl font-serif text-[#8c735a] mb-3">{room.title}</h3>

                {/* Info */}
                <div className="space-y-2 text-gray-700 text-sm mb-4">
                  <p className="flex items-center gap-2">
                    <Bed className="w-4 h-4" /> {room.bed}
                  </p>
                  <p className="flex items-center gap-2">
                    <ShowerHead className="w-4 h-4" /> {room.bathroom}
                  </p>
                  <p className="flex items-center gap-2">
                    <Ruler className="w-4 h-4" /> {room.size}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> {room.capacity}
                  </p>
                </div>

                <p className="text-2xl font-bold text-[#8c735a] mb-4">
                  {room.price}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={room.url as Route}
                    target="_blank"
                    className="px-4 py-2 border border-[#8c735a] text-[#8c735a] rounded-md hover:bg-[#8c735a] hover:text-white transition"
                  >
                    View Details
                  </Link>

                  <button
                    onClick={() => setBookingRoom(room)}
                    className="px-4 py-2 bg-[#8c735a] text-white rounded-md hover:bg-[#705c49] transition"
                  >
                    Book Your Stay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      {modalRoom && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg relative">
            <button onClick={() => setModalRoom(null)} className="absolute top-3 right-3">
              <X className="w-6 h-6 text-[#8c735a]" />
            </button>

            <img src={modalRoom.image} className="w-full mt-5 h-60 object-cover rounded-md mb-4" />
            <h1 className="text-2xl font-serif mb-2">{modalRoom.title}</h1>

            <div className="space-y-2 text-gray-700">
              <p><strong>Bed:</strong> {modalRoom.bed}</p>
              <p><strong>Bathroom:</strong> {modalRoom.bathroom}</p>
              <p><strong>Size:</strong> {modalRoom.size}</p>
              <p><strong>Capacity:</strong> {modalRoom.capacity}</p>
              <p><strong>Price:</strong> {modalRoom.price}</p>
            </div>


            <Link
              href="/booking"
              className="px-2 py-2 bg-[#8c735a] mt-10 text-white rounded-md hover:bg-[#705c49] transition block text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={!!bookingRoom}
        onClose={() => setBookingRoom(null)}
        placeName={bookingRoom?.title || ""}
      />
    </section>
  );
}