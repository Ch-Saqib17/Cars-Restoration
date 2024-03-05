import Hero12 from "@/components/Heroes/hero12";
import Hero13 from "@/components/Heroes/hero13";
import Hero4 from "@/components/Heroes/hero4";
import Hero5 from "@/components/Heroes/hero5";
import Hero6 from "@/components/Heroes/hero6";
import Hero7 from "@/components/Heroes/hero7";
import Hero8 from "@/components/Heroes/hero8";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <div>
            <img
              src="/service.webp"
              alt="About Us"
              width="1440"
              height="625"
              className="w-full h-[300px] md:w-full md:h-full lg:w-full lg:h-full"
            />
            <div className="absolute inset-0 bg-red-600 opacity-40"></div>
          </div>
          <div className="absolute z-10 top-20 md:top-52 lg:top-60 text-center right-0 left-0 text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
            Services
          </div>
          <div className="absolute z-10 top-20 mt-10 md:mt-16 lg:mt-20 md:top-52 lg:top-60 px-4 md:px-0 lg:px-0 text-center right-0 left-0 text-lg md:text-4xl lg:text-3xl font-medium tracking-tight uppercase text-white">
            Professional auto service at affordable prices
          </div>
        </div>
      </div>
      <div>
        <Hero12 />
      </div>
      <div>
        <Hero5 />
      </div>
      <div className="pt-40">
        <Hero13 />
      </div>
      <div className="pt-[70px] md:pt-[300px] lg:pt-[400px]">
        <Hero4 />
      </div>
      <div>
        <Hero6 />
      </div>
      <div>
        <Hero7 />
      </div>
      <div>
        <Hero8 />
      </div>
    </div>
  );
};

export default page;
