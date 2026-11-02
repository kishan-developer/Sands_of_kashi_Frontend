import { LocationEdit, Phone } from 'lucide-react'
import React from 'react'

export default function USP_Section() {
    
    return (
        <div className='bg-white text-black w-full h-[40vh] flex items-center justify-center  '>

            <div className="cards grid grid-cols-5 gap-10 w-[80%] h-[60%]">

                <div className="card rounded-full flex flex-col gap-5 items-center justify-center text-[18px] text-center font-semibold">
                    <div className="rounded-full bg-black hover:bg-white p-3 text-white hover:text-black">
                        <LocationEdit className='w-10 h-10' />
                    </div>
                    <h1>Prime Location (Sigra, Varanasi)</h1>
                </div>

                <div className="card rounded-full flex flex-col gap-5 items-center justify-center text-[18px] text-center font-semibold">
                    <div className="rounded-full bg-black hover:bg-white p-3 text-white hover:text-black">
                        <LocationEdit className='w-10 h-10' />
                    </div>
                    <h1>Premium Rooms & Suites</h1>
                </div>

                <div className="card rounded-full flex flex-col gap-5 items-center justify-center text-[18px] text-center font-semibold">
                    <div className="rounded-full bg-black hover:bg-white p-3 text-white hover:text-black">
                        <LocationEdit className='w-10 h-10' />
                    </div>
                    <h1> Rooftop Dining</h1>
                </div>


                <div className="card rounded-full flex flex-col gap-5 items-center justify-center text-[18px] text-center font-semibold">
                    <div className="rounded-full bg-black hover:bg-white p-3 text-white hover:text-black">
                        <LocationEdit className='w-10 h-10' />
                    </div>
                    <h1>Banquet & Events</h1>
                </div>


                <div className="card rounded-full flex flex-col gap-5 items-center justify-center text-[18px] text-center font-semibold">
                    <div className="rounded-full bg-black hover:bg-white p-3 text-white hover:text-black">
                        <Phone className='w-10 h-10' />
                    </div>
                    <h1>24/7 Support</h1>
                </div>

            </div>
        </div>
    )
}
