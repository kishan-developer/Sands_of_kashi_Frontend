"use client";

import React from "react";

interface BookingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingSuccessModal({ isOpen, onClose }: BookingSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-serif text-[#1a1a1a] mb-4 font-playfair">
          Booking Request Received!
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for choosing Sands of Kashi. Your booking request has been successfully submitted.
        </p>

        {/* 12-hour Contact Promise */}
        <div className="bg-[#f8f7f5] rounded-xl p-4 mb-6">
          <p className="text-[#c5a37f] font-semibold mb-1">
            ⏰ We&apos;ll Contact You Within 12 Hours
          </p>
          <p className="text-gray-500 text-sm">
            Our team will review your request and get back to you via email or phone to confirm availability and payment details.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-500 mb-6">
          <p className="mb-1">
            <span className="font-semibold">Email:</span> info@sandsofkashi.in
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91-7522801564
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-[#1a1a1a] text-white py-3 rounded-xl font-semibold hover:bg-[#c5a37f] transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
