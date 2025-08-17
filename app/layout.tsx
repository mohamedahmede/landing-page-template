import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/reusable/navbar/Navbar";
import Footer from "./components/reusable/footer/Footer";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const poppinsSemiBold = localFont({
  src: [
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins-semibold",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "This is a landing page template",
  icons: {
    icon: '/orbit-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppinsSemiBold.variable} antialiased font-poppins bg-black`}
        style={{
          fontFamily: poppins.style.fontFamily
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
