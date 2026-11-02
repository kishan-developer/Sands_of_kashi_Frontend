import { Hotel } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

export default function Our_Services() {
    return (
        <div className='bg-white text-black w-full h-screen flex items-center justify-center gap-10'>

            <div className="grid grid-cols-2 gap-5 w-[80%]">

                <div className="left flex flex-col relative">
                    <Image src="/room_1.jpg" alt="room_image" width={400} height={300} className='rounded-lg' />
                </div>

                <div className="Right  p-5 flex flex-col">
                    <h3 className='text-[14px] font-bold border-b-2 border-yellow-700 w-fit mb-5'>Our Services </h3>
                    <h1 className='text-[45px] leading-12 font-bold  text-yellow-700 '>Experience Varanasi’s Finest Luxury Stay</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci tempora, commodi expedita iusto, eum reprehenderit consequatur nam impedit voluptatem, minima ducimus tempore corrupti ad? Molestias minus debitis 
                    </p>

                    <div className="main_1 grid grid-cols-2 mt-5 p-2">
                        <div className="one flex items-center gap-2">
                            <div className="rounded-full bg-yellow-700 hover:bg-white p-2 text-white hover:text-black">
                                <Hotel className='w-5 h-5' />
                            </div>
                            <h1>Superior Room</h1>
                        </div>
                         <div className="one flex items-center gap-2">
                            <div className="rounded-full bg-yellow-700 hover:bg-white p-2 text-white hover:text-black">
                                <Hotel className='w-5 h-5' />
                            </div>
                            <h1>Deluxe Suite</h1>
                        </div>
                        
                    </div>

                    <div className="main_1 grid grid-cols-2 mt-5 p-2 ">
                        <div className="one flex items-center gap-2">
                            <div className="rounded-full bg-yellow-700 hover:bg-white p-2 text-white hover:text-black">
                                <Hotel className='w-5 h-5' />
                            </div>
                            <h1>Family Suite</h1>
                        </div>
                         <div className="one flex items-center gap-2">
                            <div className="rounded-full bg-yellow-700 hover:bg-white p-2 text-white hover:text-black">
                                <Hotel className='w-5 h-5' />
                            </div>
                            <h1>Premium Balcony View</h1>
                        </div>
                    </div>

                
                    <button className='bg-yellow-700 text-white rounded-lg py-2 px-5 w-[50%] mt-5 text-[18px]'>Explore More Details </button>
                </div>
            </div>
        </div>
    )
}
