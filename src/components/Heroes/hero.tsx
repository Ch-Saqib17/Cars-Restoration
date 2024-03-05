import { MoveRight, ShoppingBagIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full"
      ></video>

      <div className="absolute top-0 lg:p-8 md:p-6 p-10 lg:pl-0 md:pl-0 ml-[70px] lg:mt-10 md:mt-6 mt-4 z-10">
        <span className="font-extrabold lg:text-8xl md:text-6xl text-4xl text-white">
          Expertise. <br /> convenience. <br /> reliability.
        </span>
      </div>
      <div className="pl-4">
        <div className="absolute shadow-lg top-0 bg-gray-200 flex justify-center items-center lg:w-[1230px] md:w-[1080px] w-[380px] h-[260px] lg:px-4  md:px-0 px-0 lg:mt-[600px] md:mt-[400px] mt-[180px] z-10">
          <section className="flex-row md:flex lg:flex px-6 gap-4">
            <div className="flex-1">
              <div className="text-center md:text-start lg:text-start mt-4 md:mt-0 lg:mt-0">
                <span className=" text-red-500 font-semibold">
                  Auto Painting and Body Repair
                </span>
              </div>
              <span className="font-extrabold  lg:text-4xl md:text-2xl text-lg pb-4  text-center md:text-start lg:text-start">
                We are here to help you with your car{" "}
              </span>
            </div>
            <div className="flex-1 text-center md:text-start lg:text-start  mt-4 md:mt-0 lg:mt-0">
              <span className="font-semibold">
                Our Best Price Guarantee will help make sure you are getting
                quality work done at the best price. Saving money is as easy as
                book, quote, fix.
              </span>

              <Button className="mt-6 gap-2 flex items-center ml-20 md:ml-0 lg:ml-0 mb-6 md:mb-0 lg:mb-0">
                Discover More <MoveRight />
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
