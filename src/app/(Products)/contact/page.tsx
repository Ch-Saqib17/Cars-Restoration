import Hero15 from "@/components/Heroes/hero15";
import Hero16 from "@/components/Heroes/hero16";
import Hero17 from "@/components/Heroes/hero17";
import Hero2 from "@/components/Heroes/hero2";

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
            Contact Us
          </div>
          <div className="absolute z-10 top-20 mt-10 md:mt-16 lg:mt-16 md:top-52 lg:top-60 px-4 md:px-0 lg:px-0 text-center right-0 left-0 text-lg md:text-4xl lg:text-3xl font-medium tracking-tight uppercase text-white">
            Get the assistance you need.
          </div>
        </div>
      </div>
      <div className="mt-40">
        <Hero15 />
      </div>
      <div className="mt-40">
        <Hero16 />
      </div>
      <div>
        <Hero17/>
      </div>
    </div>
  );
};

export default AboutUs;
