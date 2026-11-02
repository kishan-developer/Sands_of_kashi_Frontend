"use client";

import React, { useState, useEffect } from "react";
import { Users, Bed } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import BookingForm from "../../Components/BookingForm";

interface Room {
  _id: string;
  title: string;
  images: string[];
  amenities: string[];
  maxGuests: number;
  price: number;
}

export default function RoomListing() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rooms`);
        const data = await res.json();
        if (data.success) {
          setRooms(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  if (loading) {
    return <div className="py-20 text-center font-serif text-2xl">Loading luxury stays...</div>;
  }
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Side Room Cards */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <div key={room._id} className="group bg-white rounded-xl border shadow-sm hover:shadow-md overflow-hidden">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={room.images[0] || "/room_1.jpg"}
                    alt={room.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">{room.title}</h3>

                  <div className="flex flex-col gap-3 text-gray-500 text-sm mb-6">
                    {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Bed size={16} /> {amenity}
                        </div>
                    ))}
                    <div className="flex items-center gap-2">
                       <Users size={16} /> Max {room.maxGuests} Guests
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="text-xl font-medium text-[#c5a37f]">₹{room.price}.00</p>
                    <Link
                      href={`/rooms/${room.title.toLowerCase().replace(/\s+/g, '_')}` as Route}
                      className="text-sm underline hover:text-[#c5a37f]">
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={"/rooms/standard_room" as Route}
              className="px-8 py-3 border rounded-md hover:bg-gray-50">
              View All Rooms
            </Link>
          </div>
        </div>

        {/* Right Side Booking Form (Now Reusable) */}
        <div className="order-1 lg:order-2">
          <div className="lg:sticky lg:top-24">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}