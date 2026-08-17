import React from 'react'

import RoomDetailHero from './Components/RoomDetailHero'
import RoomListing from './Components/RoomListing'
import TestimonialSection from '../Home/TestimonialSection'

export default function page() {
  return (
    <div>
      <RoomDetailHero />

      <RoomListing />

      <TestimonialSection />
    </div>
  )
}
