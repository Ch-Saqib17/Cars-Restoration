import Hero1 from "@/components/Heroes/hero1";

import Hero13 from "@/components/Heroes/hero13";
import Hero14 from "@/components/Heroes/hero14";

import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className=" relative">
        <div>
          <div>
            <Image
              src="/image1.jpg"
              alt="About Us"
              width="1440"
              height="625"
              className="w-full h-[300px] md:w-full md:h-full lg:w-full lg:h-full"
            />
            <div className="absolute inset-0 bg-red-600 opacity-40"></div>
          </div>
          <div className="absolute z-10 top-20 md:top-52 lg:top-60 text-center right-0 left-0 text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
            Portfolio
          </div>
          <div className="absolute z-10 top-20 mt-10 md:mt-16 lg:mt-16 md:top-52 lg:top-60 px-4 md:px-0 lg:px-0 text-center right-0 left-0 text-lg md:text-4xl lg:text-3xl font-medium tracking-tight uppercase text-white">
            You explore, we discover
          </div>
        </div>
      </div>
      <div className="-mt-[350px] md:-mt-[200px] lg:-mt-[200px] pb-[250px] md:pb-[200px] lg:pb-[200px]">
        <Hero1 />
      </div>
      <div>
        <Hero14 />
      </div>
      <div className="-mb-[100px] md:-mb-0 lg:-mb-0 pb-0 md:pb-[100px] lg:pb-[130px]">
        <Hero13 />
      </div>
    </div>
  );
};

export default Portfolio;
