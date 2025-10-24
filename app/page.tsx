"use client";

import Navbar from "@/components/Navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative  h-screen text-white  overflow-hidden">
     
        <Image
          src="/images/hero_img.jpg"
          alt="Hero background"
          fill
          className="lg:object-fill object-cover brightness-75"
        />

        
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

   
        <p className="max-w-full lg:w-sm w-xl absolute lg:top-[12%] top-[15%] lg:left-1/2 left-[65%] -translate-x-1/2 text-[#ffdd00] text-sm md:text-xl font-blackops z-10">
          Strategy. Collaboration. Growth.
        </p>

    
        <h1 className="max-w-full lg:w-3xl w-xs z-40 absolute text-[#ffffff] top-[25%] left-1/2 -translate-x-1/2 text-4xl md:text-8xl  font-medium text-center ">
          Elevate Your
        </h1>

   
        <div className="absolute lg:top-[35%] top-[30%] left-1/2 -translate-x-1/2 bg-black/50 px-1 py-5 rounded-sm w-max shadow-[0_0_30px_rgba(6,182,212,0.7)] z-10">
          <h2 className="text-[#02dcfe] text-5xl md:text-9xl  font-normal drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
            Digital Future
          </h2>
        </div>

        
        <p className="absolute font-sans lg:top-[61%] top-[50%] left-1/2 -translate-x-1/2 max-w-full lg:w-3xl w-sm text-center text-[#e2e2d3] text-base md:text-xl z-10 px-4">
          Premium digital marketing agency, modern coworking space, and professional academy. All under one roof to accelerate your success.
        </p>

      
        <div className="absolute lg:top-[72%] top-[65%] left-1/2 -translate-x-1/2 flex gap-5 flex-wrap justify-center z-10 ">
          <button className="bg-[#02dcfe] hover:bg-[#02dcfe] text-[#202a2f] font-medium lg:py-2.5 py-2 lg:px-6 px-3 text-sm lg:text-[16px] rounded-md transition">
            Explore Services
          </button>
          <button className="bg-[#706e6f] hover:bg-gray-600 text-[#02dcfe] font-medium lg:py-2.5 py-2 lg:px-6 px-3 rounded-md text-sm lg:text-[16px] transition">
            Book a Consultation
          </button>
        </div>

      
        <div className="absolute lg:bottom-[4%] bottom-[7%] left-1/2 -translate-x-1/2 w-[90%] md:w-full flex items-center justify-center gap-4  lg:gap-40 z-10">
          <div className="bg-black bg-opacity-80 lg:px-5 px-3 py-2 lg:py-3 rounded-md shadow-md text-center">
            <h3 className="text-[#ffdd00] text-xl lg:text-3xl font-blackops">500+</h3>
            <p className="text-[#ffdd00] lg:text-sm text-[10px]">Projects Delivered</p>
          </div>
          <div className="bg-black bg-opacity-80 lg:px-5 px-3 py-2 lg:py-3 rounded-md shadow-md text-center">
            <h3 className="text-[#ffdd00] text-xl lg:text-3xl font-blackops">200+</h3>
            <p className="text-[#ffdd00] lg:text-sm text-[10px]">Active Members</p>
          </div>
          <div className="bg-black bg-opacity-80 lg:px-5 px-3 py-2 lg:py-3 rounded-md shadow-md text-center">
            <h3 className="text-[#ffdd00] text-xl lg:text-3xl font-blackops">50+</h3>
            <p className="text-[#ffdd00] lg:text-sm text-[10px]">Expert Mentors</p>
          </div>
        </div>

      </section>
{/* 
      <section>
        <div className=" w-full h-screen relative">
          <div>
            <Image
              src="/images/hero_img.jpg"
              alt="Hero background"
              width={1200}
              height={50}
              className="object-cover w-full lg:h-full  h-screen brightness-75"
            />
          </div>

          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          <div>
            <p className="absolute top-[12%] left-1/2 -translate-x-1/2 text-[#ffdd00] text-sm md:text-xl font-blackops z-10">
              Strategy. Collaboration. Growth.
            </p>
          </div>
          <div>
            <h1 className="z-40 absolute text-[#ffffff] top-[25%] left-1/2 -translate-x-1/2 text-xl md:text-8xl  font-medium text-center ">
              Elevate Your
            </h1>


            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 bg-black/50 px-1 py-5 rounded-sm w-max shadow-[0_0_30px_rgba(6,182,212,0.7)] z-10">
              <h2 className="text-[#02dcfe] text-xl md:text-9xl  font-normal drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                Digital Future
              </h2>
            </div>
          </div>
          <div>
            <p className="absolute font-sans top-[61%] left-1/2 -translate-x-1/2 max-w-[700px] text-center text-[#e2e2d3] text-base md:text-xl z-10 px-4">
              Premium digital marketing agency, modern coworking space, and professional academy. All under one roof to accelerate your success.
            </p>
          </div>

          <div className="absolute top-[72%] left-1/2 -translate-x-1/2 flex gap-5 flex-wrap justify-center z-10 ">
            <button className="bg-[#02dcfe] hover:bg-[#02dcfe] text-[#202a2f] font-medium py-2.5 px-6 lg:text-[16px] rounded-md transition">
              Explore Services
            </button>
            <button className="bg-[#706e6f] hover:bg-gray-600 text-[#02dcfe] font-medium py-2.5 px-6 rounded-md lg:text-[16px] transition">
              Book a Consultation
            </button>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-full flex flex-row items-center justify-center  lg:gap-40 z-10">
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
      </section> */}
    </>
  );
}
