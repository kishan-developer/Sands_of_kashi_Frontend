import Hero from './Home/Hero';
import AboutSection from './Home/AboutSection';
import HotelFacilities from './Home/HotelFacilities';
import RoomsSlider from './Home/RoomsSlider';
import TestimonialSection from './Home/TestimonialSection';
import VideoHeroSection from './Home/VideoHeroSection';
import SpecialOffers from './Home/SpecialOffers';
import InstagramGallery from './Home/InstagramGallery';
import { Gallery } from './Home/Gallery'
import DistanceSection from './Home/DistanceSection';
import DiningExperience from './Home/DiningExperience';

export default function page() {
  return (
    <div className='w-full bg-[#FFFFFF]'>

      <Hero />

      <AboutSection />

      <RoomsSlider />

      <DiningExperience />

      <Gallery />

      <SpecialOffers />

      {/* <VideoHeroSection /> */}

      <DistanceSection />

      <HotelFacilities />

      <InstagramGallery />

      <TestimonialSection />



    </div>
  )
}
