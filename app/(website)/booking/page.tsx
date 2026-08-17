"use client";

import React, { useState, useEffect } from "react";
import { Users, Bed, Star, Check, Calendar, MapPin, Wifi, Car, Coffee, ShowerHead, Plane, Tent, Refrigerator, Headphones, Laptop, Dumbbell, Waves, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import BookingModal from "../Components/BookingModal";

interface Room {
  _id: string;
  title: string;
  description: string;
  images: string[];
  amenities: string[];
  features: string[];
  maxGuests: number;
  price: number;
  size: string;
  roomType: string;
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  "Free Wifi": <Wifi size={20} />,
  "Shower": <ShowerHead size={20} />,
  "Airport transport": <Plane size={20} />,
  "Balcony": <Tent size={20} />,
  "Refrigerator": <Refrigerator size={20} />,
  "24/7 Support": <Headphones size={20} />,
  "Work Desk": <Laptop size={20} />,
  "Fitness Center": <Dumbbell size={20} />,
  "Swimming Pool": <Waves size={20} />,
};

export default function BookingPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [imageIndexes, setImageIndexes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/rooms`);
        const data = await res.json();
        if (data.success) {
          setRooms(data.data);
          // Initialize image indexes
          const indexes: { [key: string]: number } = {};
          data.data.forEach((room: Room) => {
            indexes[room._id] = 0;
          });
          setImageIndexes(indexes);
        }
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const handleRoomSelect = (roomTitle: string) => {
    setSelectedRoom(roomTitle);
    setIsBookingModalOpen(true);
  };

  const nextImage = (roomId: string) => {
    setImageIndexes(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % (rooms.find(r => r._id === roomId)?.images.length || 1)
    }));
  };

  const prevImage = (roomId: string) => {
    setImageIndexes(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + (rooms.find(r => r._id === roomId)?.images.length || 1)) % (rooms.find(r => r._id === roomId)?.images.length || 1)
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7f5]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#c5a37f] mx-auto mb-4"></div>
          <div className="text-2xl font-serif text-[#1a1a1a]">Loading luxury rooms...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      {/* Hero Section with Background */}
      <div className="relative h-[60vh] min-h-[400px] bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <img 
          src="https://res.cloudinary.com/drmpv5vne/image/upload/v1783764978/DSC_0360_gdf7ab.jpg"
          alt="Hotel Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-[#c5a37f] fill-[#c5a37f]" size={24} />
            <Star className="text-[#c5a37f] fill-[#c5a37f]" size={24} />
            <Star className="text-[#c5a37f] fill-[#c5a37f]" size={24} />
            <Star className="text-[#c5a37f] fill-[#c5a37f]" size={24} />
            <Star className="text-[#c5a37f] fill-[#c5a37f]" size={24} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif mb-4 text-center">Book Your Stay</h1>
          <p className="text-xl text-gray-200 text-center max-w-2xl">
            Experience luxury and comfort at Sands of Kashi. Select your perfect room and create unforgettable memories.
          </p>
          <div className="flex items-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#c5a37f]" />
              <span>Varanasi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi size={18} className="text-[#c5a37f]" />
              <span>Free WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <Car size={18} className="text-[#c5a37f]" />
              <span>Free Parking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 h-[1px] bg-[#c5a37f]"></span>
            <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-sm">
              Accommodations
            </p>
            <span className="w-16 h-[1px] bg-[#c5a37f]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-4">
            Choose Your Perfect Room
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each room is thoughtfully designed to provide the ultimate comfort and luxury experience during your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side - Room Selection */}
          <div className="lg:col-span-2 space-y-8">
            {rooms.map((room) => (
              <div
                key={room._id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  selectedRoom === room.title
                    ? "ring-4 ring-[#c5a37f] transform scale-[1.01]"
                    : "hover:shadow-2xl hover:transform hover:scale-[1.005]"
                }`}
              >
                {/* Image Gallery */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={room.images[imageIndexes[room._id] || 0] || room.images[0] || "/hotel/placeholder.jpg"}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  
                  {/* Image Navigation */}
                  {room.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(room._id)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                      >
                        <ChevronLeft size={24} className="text-gray-800" />
                      </button>
                      <button
                        onClick={() => nextImage(room._id)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                      >
                        <ChevronRight size={24} className="text-gray-800" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {room.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === (imageIndexes[room._id] || 0) ? "bg-white" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {selectedRoom === room.title && (
                    <div className="absolute top-4 right-4 bg-[#c5a37f] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Check size={16} /> Selected
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {room.roomType}
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-serif text-[#1a1a1a] mb-2">{room.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} className="text-[#c5a37f]" />
                          <span>{room.size}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} className="text-[#c5a37f]" />
                          <span>Max {room.maxGuests} Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[#c5a37f]">
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                      <Star size={20} fill="currentColor" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                  {/* Room Amenities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-serif text-[#1a1a1a] mb-4 border-b border-gray-100 pb-2">Room Amenities</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-600 text-sm hover:text-[#c5a37f] transition-colors group">
                          <span className="text-[#c5a37f] group-hover:scale-110 transition-transform">
                            {amenityIcons[amenity] || <Check size={16} />}
                          </span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Room Features */}
                  {room.features && room.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-serif text-[#1a1a1a] mb-4 border-b border-gray-100 pb-2">Room Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {room.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                            <CheckCircle2 size={16} className="text-[#c5a37f] shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <p className="text-4xl font-bold text-[#c5a37f]">₹{room.price}</p>
                      <p className="text-sm text-gray-500">per night</p>
                    </div>
                    <button
                      onClick={() => handleRoomSelect(room.title)}
                      className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                        selectedRoom === room.title
                          ? "bg-[#c5a37f] text-white shadow-lg"
                          : "bg-[#1a1a1a] text-white hover:bg-[#c5a37f] hover:shadow-lg"
                      }`}
                    >
                      {selectedRoom === room.title ? "Selected ✓" : "Select Room"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Booking Form */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                {/* <div className="mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-2xl font-serif text-center text-[#1a1a1a] mb-2">Complete Your Booking</h3>
                  <p className="text-sm text-center text-gray-500">
                    {selectedRoom ? `Selected: ${selectedRoom}` : "Select a room to begin"}
                  </p>
                </div> */}
                <div className="text-center py-8">
                  <h3 className="text-2xl font-serif text-[#1a1a1a] mb-2">Book Your Stay..</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    {selectedRoom ? `Selected: ${selectedRoom}` : "Select a room or book directly"}
                  </p>
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="px-8 py-4 bg-[#1a1a1a] text-white rounded-xl font-semibold hover:bg-[#c5a37f] transition-all w-full"
                  >
                    {selectedRoom ? "Continue Booking" : "Book Now"}
                  </button>
                </div>
                
                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Check size={20} className="text-[#c5a37f] mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Best Price</p>
                    </div>
                    <div>
                      <Check size={20} className="text-[#c5a37f] mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Free Cancellation</p>
                    </div>
                    <div>
                      <Check size={20} className="text-[#c5a37f] mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Secure Booking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="mt-6 bg-[#1a1a1a] rounded-2xl p-6 text-white">
                <h4 className="font-serif text-lg mb-3">Need Help?</h4>
                <p className="text-sm text-gray-300 mb-4">
                  Our team is available 24/7 to assist you with your booking.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-[#c5a37f]">📞</span>
                    +91-7522801564
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#c5a37f]">✉️</span>
                    info@sandsofkashi.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        placeName={selectedRoom}
      />
    </div>
  );
}
