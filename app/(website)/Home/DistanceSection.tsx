"use client";

import { MapPin, Map, Navigation, Train, Plane, MapPinned } from "lucide-react";
import { useState } from 'react';
import Image from 'next/image';
import BookingModal from '../Components/BookingModal';

const places = [
  {
    name: "Kashi Vishwanath Temple",
    distance: "1 K.M.",
    icon: Map,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766746/kashi_vishwanath_w2ti4s.jpg",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva, located in the heart of Varanasi.",
    mapUrl: "https://www.google.com/maps/search/Kashi+Vishwanath+Temple+Varanasi"
  },
  {
    name: "Dashashwamedh Ghat",
    distance: "1 K.M.",
    icon: MapPin,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766744/Dashashwamedh_Ghat_aixmp6.jpg",
    description: "The main ghat in Varanasi, known for its spectacular Ganga Aarti ceremony every evening.",
    mapUrl: "https://www.google.com/maps/search/Dashashwamedh+Ghat+Varanasi"
  },
  {
    name: "Kalbhairav Temple",
    distance: "3 K.M.",
    icon: Map,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766834/Kalbhairav_Temple_1_rcb9ku.jpg",
    description: "Ancient temple dedicated to Kaal Bhairav, the fierce form of Lord Shiva and the guardian of Varanasi.",
    mapUrl: "https://www.google.com/maps/search/Kalbhairav+Temple+Varanasi"
  },
  {
    name: "Manas Mandir",
    distance: "2 K.M.",
    icon: MapPin,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766746/Manas_Mandir_gjohpe.jpg",
    description: "A beautiful temple complex known for its peaceful atmosphere and spiritual significance.",
    mapUrl: "https://www.google.com/maps/search/Manas+Mandir+Varanasi"
  },
  {
    name: "Sankat Mochan",
    distance: "2.05 K.M.",
    icon: Map,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766748/Sankat_Mochan_zjchzn.jpg",
    description: "Dedicated to Lord Hanuman, this temple is believed to relieve devotees from all troubles and fears.",
    mapUrl: "https://www.google.com/maps/search/Sankat+Mochan+Temple+Varanasi"
  },
  {
    name: "B.H.U ( Vishwanath Temple )",
    distance: "3 K.M.",
    icon: MapPin,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766744/BHU_VT_Temple_onh1sr.jpg",
    description: "A magnificent temple within Banaras Hindu University campus, featuring beautiful architecture.",
    mapUrl: "https://www.google.com/maps/search/BHU+Vishwanath+Temple+Varanasi"
  },
  {
    name: "Ramnagar Fort",
    distance: "4.05 K.M.",
    icon: Map,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766747/Ramnagar_Fort_mdz897.jpg",
    description: "Historic fort built in the 18th century, home to the Maharaja of Varanasi and a museum.",
    mapUrl: "https://www.google.com/maps/search/Ramnagar+Fort+Varanasi"
  },
  {
    name: "Sarnath",
    distance: "10 K.M.",
    icon: MapPin,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766748/Sarnath_bjqqit.jpg",
    description: "The place where Buddha gave his first sermon, featuring ancient stupas and archaeological remains.",
    mapUrl: "https://www.google.com/maps/search/Sarnath+Varanasi"
  },
  {
    name: "Durga Kund",
    distance: "3 K.M.",
    icon: Map,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766962/Durga_Kund_ozsx6x.jpg",
    description: "A sacred pond dedicated to Goddess Durga, surrounded by temples and spiritual significance.",
    mapUrl: "https://www.google.com/maps/search/Durga+Kund+Varanasi"
  },
  {
    name: "Cantt Railway Station",
    distance: "1 K.M.",
    icon: Train,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766744/Cantt_Railway_Station_phm8rl.jpg",
    description: "Major railway station connecting Varanasi to all major cities across India.",
    mapUrl: "https://www.google.com/maps/search/Varanasi+Cantt+Railway+Station"
  },
  {
    name: "Bharat Mata Mandir",
    distance: "0.05 K.M.",
    icon: MapPinned,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766743/Bharat_Mata_Mandir_lneosq.jpg",
    description: "Unique temple dedicated to Mother India, featuring a marble map of undivided India.",
    mapUrl: "https://www.google.com/maps/search/Bharat+Mata+Mandir+Varanasi"
  },
  {
    name: "Varanasi Airport",
    distance: "24 K.M.",
    icon: Plane,
    image: "https://res.cloudinary.com/drmpv5vne/image/upload/v1783766749/Varanasi_Airport_tjtgd3.jpg",
    description: "Lal Bahadur Shastri International Airport, connecting Varanasi to domestic and international destinations.",
    mapUrl: "https://www.google.com/maps/search/Lal+Bahadur+Shastri+Airport+Varanasi"
  },
];

export default function DistanceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState('');

  const handleBookNow = (placeName: string) => {
    setSelectedPlace(placeName);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-[#fffcf9]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 shadow-none">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-10 h-[1px] bg-[#c5a37f]"></span>
            <p className="text-[#c5a37f] font-medium uppercase tracking-[0.2em] text-xs md:text-sm shadow-none">
              Explore Kashi
            </p>
            <span className="w-10 h-[1px] bg-[#c5a37f]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] shadow-none">
            Distance From Hotel
          </h2>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white border text-black border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="w-full h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Distance Badge on Image */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                   <Navigation size={14} className="text-[#c5a37f]" />
                   <span className="text-xs font-bold text-[#1a1a1a] tracking-wider">{place.distance}</span>
                </div>

                {/* View on Map Badge */}
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 bg-[#c5a37f] text-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1a1a1a]"
                >
                   <MapPin size={14} />
                   <span className="text-xs font-bold tracking-wider">View on Map</span>
                </a>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#c5a37f]/10 p-2.5 rounded-full text-[#c5a37f] shrink-0">
                    <place.icon size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#1a1a1a] leading-tight">
                    {place.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{place.description}</p>
                <button 
                  onClick={() => handleBookNow(place.name)}
                  className="mt-auto bg-[#c5a37f] text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-[#1a1a1a] transition-colors"
                >
                  Book Your Stay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        placeName={selectedPlace}
      />
    </section>
  );
}