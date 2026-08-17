import React from 'react'

import AboutHero from './components/AboutHero'
import WelcomeSection from './components/WelcomeSection'
import HotelFacilities from './components/HotelFacilities'
import TestimonialSection from '../Home/TestimonialSection'
import MeetTheTeam from './components/MeetTheTeam'
import DistanceSection from '../Home/DistanceSection'
import { Gallery } from '../Home/Gallery'
import DiningExperience from '../Home/DiningExperience'
import AboutSection from '../Home/AboutSection'

export default function page() {
  return (
    <div>
      <AboutHero />

      <AboutSection />



      <DiningExperience />

      <Gallery />



      {/* <VideoHeroSection /> */}

      <DistanceSection />

      {/* <HotelFacilities /> */}

      <TestimonialSection />

      {/* <MeetTheTeam /> */}
    </div>
  )
}
