import Hero11 from "@/components/Heroes/hero11";
import Hero2 from "@/components/Heroes/hero2";
import Hero3 from "@/components/Heroes/hero3";
import Hero4 from "@/components/Heroes/hero4";
import Hero5 from "@/components/Heroes/hero5";
import Hero6 from "@/components/Heroes/hero6";
import { Slider } from "@/components/ui/slider2";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className=" relative">
        <div>
          <div>
            <img
              src="/aboutus.jpg"
              alt="About Us"
              width="1440"
              height="625"
              className="w-full h-[300px] md:w-full md:h-full lg:w-full lg:h-full"
            />
            <div className="absolute inset-0 bg-red-600 opacity-40"></div>
          </div>
          <div className="absolute z-10 top-20 md:top-52 lg:top-60 text-center right-0 left-0 text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
            About Us
          </div>
          <div className="absolute z-10 top-20 mt-10 md:mt-16 lg:mt-16 md:top-52 lg:top-60 px-4 md:px-0 lg:px-0 text-center right-0 left-0 text-lg md:text-4xl lg:text-3xl font-medium tracking-tight uppercase text-white">
            Professional auto service at affordable prices
          </div>
        </div>
      </div>
      <div className="-mt-[300px] md:-mt-56 lg:-mt-56">
        <Hero2 />
      </div>
      <div>
        <Hero3 />
      </div>
      <div>
        <Hero4 />
      </div>

      <div>
        <Hero6 />
      </div>
      <div>
        <Hero11 />
      </div>
      <div className="pt-10">
        <Slider />
      </div>
    </div>
  );
};

export default AboutUs;
