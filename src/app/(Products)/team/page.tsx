import Hero18 from "@/components/Heroes/hero18";
import Hero19 from "@/components/Heroes/hero19";
import Hero20 from "@/components/Heroes/hero20";
import React from "react";

const Service = () => {
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
            Team
          </div>
          <div className="absolute z-10 top-20 mt-10 md:mt-16 lg:mt-20 md:top-52 lg:top-60 px-4 md:px-0 lg:px-0 text-center right-0 left-0 text-lg md:text-4xl lg:text-3xl font-medium tracking-tight uppercase text-white">
            It takes two flints to make a fire.
          </div>
        </div>
      </div>
      <div>
        <Hero18 />
      </div>
      <div>
        <Hero19 />
      </div>
      <div className="mt-20">
        <Hero20 />
      </div>
    </div>
  );
};

export default Service;
