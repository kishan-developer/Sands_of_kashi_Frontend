"use client";
 
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Check } from "lucide-react";
import BookingSuccessModal from "./BookingSuccessModal";

export interface Room {
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

interface BookingFormProps {
  onSuccess?: () => void;
  initialRoomType?: string;
  rooms?: Room[];
}

const parseInputDate = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const formatDateForInput = (date: Date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function BookingForm({ onSuccess, initialRoomType = "", rooms = [] }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [roomType, setRoomType] = useState(initialRoomType);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomCount, setRoomCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: tomorrow,
      key: "selection",
    },
  ]);

  // Find currently selected room details
  const selectedRoomDetails = rooms?.find((r) => r.title === roomType);

  // Sync selected room type from parent component selection
  useEffect(() => {
    if (initialRoomType) {
      setRoomType(initialRoomType);
    }
  }, [initialRoomType]);

  // Calculate length of stay (in nights)
  const checkInDate = dateRange[0].startDate;
  const checkOutDate = dateRange[0].endDate;
  const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Calculate total price
  const pricePerNight = selectedRoomDetails?.price || 0;
  const totalAmount = nights * pricePerNight * roomCount;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    // Validation
    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (checkInDate >= checkOutDate) {
      toast.error("Check-out date must be after check-in date");
      return;
    }
    if (!roomType) {
      toast.error("Please select a room");
      return;
    }
    if (adults < 1) {
      toast.error("At least 1 adult is required");
      return;
    }
    if (roomCount < 1) {
      toast.error("At least 1 room is required");
      return;
    }

    setLoading(true);

    const formData = {
      name,
      email,
      phone,
      roomType,
      roomId: selectedRoomDetails?._id || "",
      checkIn: dateRange[0].startDate.toISOString(),
      checkOut: dateRange[0].endDate.toISOString(),
      adults,
      children,
      rooms: roomCount,
      guests: adults + children,
      totalAmount,
      message,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings/public/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setShowSuccessModal(true);
        setName("");
        setEmail("");
        setPhone("");
        setRoomType("");
        setAdults(1);
        setChildren(0);
        setRoomCount(1);
        setMessage("");
        if (onSuccess) onSuccess();
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Form Submit Error:", error);
      toast.error("Failed to send booking request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f7f5] p-2  sm:px-4 sm:py-2 rounded-2xl max-w-lg mx-auto">
      <h3 className="text-2xl font-serif text-black text-center mb-4 font-playfair">Book Your Stay</h3>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        {/* Name */}
        <div className="">
          <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-white border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition text-black"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-white border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition text-black"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full p-3 rounded-lg bg-white border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition text-black"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Room Type */}
        <div>
          <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Room Preference</label>
          <select
            className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition"
            required
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">Choose a Room</option>
            {rooms && rooms.length > 0 ? (
              rooms.map((room) => (
                <option key={room._id} value={room.title}>
                  {room.title} – ₹{room.price}
                </option>
              ))
            ) : (
              <>
                <option value="Standard Room">Standard Room – ₹3500</option>
                <option value="Executive Room">Executive Room – ₹4500</option>
                <option value="Royal Suite Room">Royal Suite Room – ₹5500</option>
              </>
            )}
          </select>
        </div>

        {/* Guests & Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Adults</label>
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition"
              required
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Children</label>
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition"
              required
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
            >
              {Array.from({ length: 11 }, (_, i) => i).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Rooms</label>
            <select
              className="w-full p-3 rounded-lg bg-white text-gray-700 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition"
              required
              value={roomCount}
              onChange={(e) => setRoomCount(Number(e.target.value))}
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Picker */}
        <div>
          <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Select Dates</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Check-in</label>
              <input
                type="date"
                required
                value={formatDateForInput(dateRange[0].startDate)}
                onChange={(e) => {
                  const newStart = parseInputDate(e.target.value);
                  const currentEnd = dateRange[0].endDate;
                  setDateRange([
                    {
                      ...dateRange[0],
                      startDate: newStart,
                      endDate: currentEnd < newStart ? newStart : currentEnd,
                    },
                  ]);
                }}
                className="w-full p-3 rounded-lg bg-white border border-gray-100 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Check-out</label>
              <input
                type="date"
                required
                value={formatDateForInput(dateRange[0].endDate)}
                min={formatDateForInput(dateRange[0].startDate)}
                onChange={(e) => {
                  setDateRange([
                    {
                      ...dateRange[0],
                      endDate: parseInputDate(e.target.value),
                    },
                  ]);
                }}
                className="w-full p-3 rounded-lg bg-white border border-gray-100 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-[13px] uppercase text-gray-500 block mb-1 tracking-wider font-semibold">Message / Special Request (Optional)</label>
          <textarea
            placeholder="Any special requests? (optional)"
            className="w-full p-4 rounded-lg bg-white border border-gray-100 h-24 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#c5a37f] transition"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Pricing Summary */}
        {selectedRoomDetails && (
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-2">
            <h4 className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-2">Price Details</h4>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Rate per night</span>
              <span>₹{selectedRoomDetails.price}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Nights</span>
              <span>{nights} night{nights > 1 ? "s" : ""}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Adults</span>
              <span>{adults}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Children</span>
              <span>{children}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Rooms</span>
              <span>{roomCount}</span>
            </div>
            <div className="border-t border-gray-100 pt-2 flex justify-between font-semibold text-lg text-black">
              <span>Total Amount</span>
              <span className="text-[#c5a37f]">₹{totalAmount}</span>
            </div>
          </div>
        )}

        {/* Privacy Note */}
        <div className="bg-white/60 rounded-lg p-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#c5a37f] mt-0.5 shrink-0" />
            <span>We only use your details to process this request.</span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#c5a37f] mt-0.5 shrink-0" />
            <span>Your information is kept secure and never shared with third parties.</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-4 rounded-lg text-white font-semibold tracking-wide transition-all duration-300 ${
            loading 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-[#1a1a1a] hover:bg-[#c5a37f] hover:shadow-lg active:scale-95"
          }`}
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>
      </form>

      {/* Success Modal */}
      <BookingSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
}
