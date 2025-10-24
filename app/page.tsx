"use client";

import Navbar from "@/components/Navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen text-white  overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero_img.jpg"
          alt="Hero background"
          fill
          className="object-fill brightness-75"
        />

        {/* Overlay layer for blur effect */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        {/* Tagline */}
        <p className="absolute top-[12%] left-1/2 -translate-x-1/2 text-[#ffdd00] text-sm md:text-xl font-blackops z-10">
          Strategy. Collaboration. Growth.
        </p>

        {/* Main Title */}
        <h1 className="z-50 absolute text-[#ffffff] top-[25%] left-1/2 -translate-x-1/2 text-5xl md:text-8xl  font-medium text-center ">
          Elevate Your
        </h1>

        {/* “Digital Future” with overlay background and glow */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 bg-black/50 px-1 py-5 rounded-sm w-max shadow-[0_0_30px_rgba(6,182,212,0.7)] z-10">
          <h2 className="text-[#02dcfe] text-5xl md:text-9xl  font-normal drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
            Digital Future
          </h2>
        </div>

        {/* Description */}
        <p className="absolute font-sans top-[61%] left-1/2 -translate-x-1/2 max-w-[700px] text-center text-[#e2e2d3] text-base md:text-xl z-10 px-4">
          Premium digital marketing agency, modern coworking space, and professional academy. All under one roof to accelerate your success.
        </p>

        {/* Buttons */}
        <div className="absolute top-[72%] left-1/2 -translate-x-1/2 flex gap-5 flex-wrap justify-center z-10 ">
          <button className="bg-[#02dcfe] hover:bg-[#02dcfe] text-[#202a2f] font-medium py-2.5 px-6 lg:text-[16px] rounded-md transition">
            Explore Services
          </button>
          <button className="bg-[#706e6f] hover:bg-gray-600 text-[#02dcfe] font-medium py-2.5 px-6 rounded-md lg:text-[16px] transition">
            Book a Consultation
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[90%] md:w-full flex flex-col md:flex-row items-center justify-center  gap-40 z-10">
          <div className="bg-black bg-opacity-80 px-5 py-3 rounded-md shadow-md text-center">
            <h3 className="text-[#ffdd00] text-3xl font-blackops">500+</h3>
            <p className="text-[#ffdd00] text-sm">Projects Delivered</p>
          </div>
          <div className="bg-black bg-opacity-80 px-5 py-3 rounded-md shadow-md text-center">
            <h3 className="text-[#ffdd00] text-3xl font-blackops">200+</h3>
            <p className="text-[#ffdd00] text-sm">Active Members</p>
          </div>
          <div className="bg-black bg-opacity-80 px-5 py-3 rounded-md shadow-md text-center">
            <h3 className="text-[#ffdd00] text-3xl font-blackops">50+</h3>
            <p className="text-[#ffdd00] text-sm">Expert Mentors</p>
          </div>
        </div>

      </section>
    </>
  );
}
