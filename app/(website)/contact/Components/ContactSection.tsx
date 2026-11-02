"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin, Check } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  detail: string;
  subDetail: string;
}

const contactDetails: ContactInfo[] = [
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    detail: "+91-7522801564, +91-5423533526",
    subDetail: "Available 24/7 for bookings",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    detail: "info@sandsofkashi.in, sandsofkashi@gmail.com",
    subDetail: "Response within 24 hours",
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    detail: "Gulab Bagh Colony",
    subDetail: "C 19/27-14-A-C,(Opposite Sigra P.S.) Gulab Bagh Colony, Varanasi 221002",
  },
];

export default function ContactSection() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [roomPreference, setRoomPreference] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const formData = {
      name,
      phone,
      email,
      enquiryType,
      checkIn,
      checkOut,
      guests,
      roomPreference,
      message,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message Sent Successfully!");

        setName("");
        setPhone("");
        setEmail("");
        setEnquiryType("");
        setCheckIn("");
        setCheckOut("");
        setGuests("");
        setRoomPreference("");
        setMessage("");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      toast.error("Failed to send your message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

       
        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6">
                Send Us a Message
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Have questions about our suites or special events? Fill out the form below and our concierge team will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-[#f8f7f5] border-none text-black rounded-xl p-4 text-sm"
              />

              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-[#f8f7f5] border-none text-black rounded-xl p-4 text-sm"
              />

              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#f8f7f5] border-none text-black rounded-xl p-4 text-sm"
              />

              <select
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                required
                className="w-full bg-[#f8f7f5] border-none text-gray-700 rounded-xl p-4 text-sm"
              >
                <option value="">Enquiry Type *</option>
                <option value="Booking Enquiry">Booking Enquiry</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Event">Event</option>
                <option value="Feedback">Feedback</option>
              </select>

              <input
                type="date"
                placeholder="Check-in Date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#f8f7f5] border-none text-gray-700 rounded-xl p-4 text-sm"
              />

              <input
                type="date"
                placeholder="Check-out Date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#f8f7f5] border-none text-gray-700 rounded-xl p-4 text-sm"
              />

              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#f8f7f5] border-none text-gray-700 rounded-xl p-4 text-sm"
              >
                <option value="">Number of Guests</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} Guest{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>

              <select
                value={roomPreference}
                onChange={(e) => setRoomPreference(e.target.value)}
                className="w-full bg-[#f8f7f5] border-none text-gray-700 rounded-xl p-4 text-sm"
              >
                <option value="">Room Preference</option>
                <option value="Standard Room">Standard Room</option>
                <option value="Executive Room">Executive Room</option>
                <option value="Royal Suite Room">Royal Suite Room</option>
              </select>

              <textarea
                placeholder="Message / Special Request *"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-[#f8f7f5] text-gray-700 border-none rounded-xl p-4 text-sm sm:col-span-2 resize-none"
              ></textarea>

              <div className="bg-[#f8f7f5] rounded-xl p-4 space-y-2 text-sm text-gray-600 sm:col-span-2">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c5a37f] mt-0.5 shrink-0" />
                  <span>We only use your details to respond to your message.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c5a37f] mt-0.5 shrink-0" />
                  <span>Your information is kept secure and never shared with third parties.</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#b48f6a] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#1a1a1a] transition-all w-fit"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Map Integration */}
          <div className="w-full h-[400px] lg:h-fit min-h-[fit] rounded-3xl overflow-hidden shadow-sm s hover:grayscale-0 transition-all duration-700">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5052.954501694999!2d82.9915453!3d25.318651899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2de2cb2f5429%3A0xaf5c6b4c3963a3f2!2sSands%20Of%20Kashi%20By%20Coral%20Group!5e1!3m2!1sen!2sin!4v1770630983329!5m2!1sen!2sin" width="600" height="450" loading="lazy" ></iframe>
          </div>

        </div>

         {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {contactDetails.map((info, index) => (
            <div
              key={index}
              className="group p-10 bg-[#f8f7f5] rounded-3xl text-center hover:bg-[#1a1a1a] transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[#c5a37f] mb-6 group-hover:bg-[#c5a37f] group-hover:text-white transition-all duration-500 shadow-sm">
                {info.icon}
              </div>
              <h3 className="text-xl font-serif text-[#1a1a1a] group-hover:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-lg font-medium text-[#c5a37f] mb-1">
                {info.detail}
              </p>
              <p className="text-sm text-gray-400">
                {info.subDetail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}