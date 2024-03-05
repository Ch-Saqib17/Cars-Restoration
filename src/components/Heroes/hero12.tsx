import React from "react";
import { Button } from "../ui/button";

const Hero12 = () => {
  return (
    <div className=" relative flex flex-col md:flex lg:flex-row pt-10 md:pt-20  lg:pt-40 gap-4">
      <div className="">
        <video
          src="/video3.mp4"
          controls
          playsInline
          muted
          width={1000}
          height={1000}
          className="pr-10 md:pr-0 lg:pr-0"
        ></video>
        <div className="bg-gray-100 w-32 h-32 lg:w-60 lg:h-44 md:w-60 md:h-40 shadow-lg flex justify-center items-center -mt-44 ml-[220px] md:-mt-80 md:ml-[400px] lg:-mt-60 lg:ml-[400px] absolute">
          <div className="text-center">
            <div className="text-red-500 font-extrabold text-4xl md:text-4xl lg:text-6xl">
              25 K+
            </div>
            <div className="font-medium md:font-semibold lg:font-semibold uppercase">
              Years Experience
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 justify-between">
        <div className="text-red-500 font-semibold"> Our Service</div>
        <div className=" uppercase text-lg md:text-2xl lg:text-3xl  font-bold tracking-tight mt-4 md:mt-0 lg:mt-0">
          {" "}
          We value your need that is made for more{" "}
        </div>
        <div className="mt-4 md:mt-0 lg:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <div className="mt-4 md:mt-0 lg:mt-0">
          <Button>Discover More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero12;
