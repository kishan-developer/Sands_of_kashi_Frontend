import type { Metadata } from "next";
import { poppins, montserrat, playfair, raleway } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sands of Kashi - Luxury Hotel",
  description: "Experience true comfort and luxury at Sands of Kashi.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${playfair.variable} ${raleway.variable} font-poppins antialiased`}
      >

        
        {/* <header className="flex items-center justify-between gap-5 px-10 h-20 text-black bg-white ">
          <h2 className="text-2xl">Sands Of Kashi</h2>
          <ul className="flex items-center text-[18px] justify-between gap-20 ">
            <li className="hover:border-b-[1px] border-black transition px-5">Home</li>
            <li className="hover:border-b-[1px] border-black transition px-5">Rooms</li>
            <li className="hover:border-b-[1px] border-black transition px-5">About</li>
            <li className="hover:border-b-[1px] border-black transition px-5">Contact</li>
          </ul>

          <button className="bg-black px-5 py-2 text-white rounded-lg cursor-pointer  ">
            Book Now 
          </button>
        </header> */}

        {children}
        
      </body>
    </html>
  );
}
