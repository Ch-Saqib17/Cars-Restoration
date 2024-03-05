import Image from "next/image";
import React from "react";
import { Slider } from "../ui/slider";

const Hero6 = () => {
  return (
    <div className="flex justify-center items-center mt-[200px] md:mt-[250px] lg:mt-[250px]">
      <div className="relative w-full flex justify-center md:justify-start lg:justify-start items-center">
        <Image
          src={"/dealership.png"}
          alt={""}
          width={2178}
          height={1200}
          className="w-full h-[600px] md:w-full md:h-full lg:w-full lg:h-full"
        />
        <div className="absolute  bg-gray-100 shadow-lg w-[400px] h-[560px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[600px] ml-0 md:ml-0 lg:ml-10 p-6">
          <h1 className="text-red-500 text-lg font-medium"> Testimonial</h1>
          <h2 className="text-xl md:text-3xl lg:text-3xl font-extrabold uppercase mt-0 mb-4 md:mt-4 md:mb-4 lg:mt-4 lg:mb-4">
            What they say about us
          </h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
          <div className="ml-4 mt-16 md:mt-10 md:ml-16 lg:ml-16 lg:mt-10">
            {" "}
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
