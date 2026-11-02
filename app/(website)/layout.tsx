import type { Metadata } from "next";
import Header from "./Components/Header";
import "react-toastify/dist/ReactToastify.css";

// import "./globals.css";

import { Playfair_Display } from "next/font/google";
import Footer from "./Components/Footer";
import { Montserrat } from "next/font/google";
import ChatBot from "./Components/ChatBot";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sands Of Kashi",
  description: "Sands Of Kashi Hotel in Varanasi | Varanasi Hotel",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} ${montserrat.className} antialiased`}
      >
        <Header />
        {children}
        {/* <ToastContainer position="top-right" autoClose={3000} /> */}
        <ChatBot />
        <Footer />
      </body>
    </html>
  );
}
