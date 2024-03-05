import { MoveRight, ShoppingBagIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="pb-40 md:pb-0 lg:pb-0">
      <div className=" relative">
        <div>
          <div>
            <video src="/video.mp4" loop autoPlay playsInline muted></video>
          </div>
          <div className="absolute z-10 top-10 md:top-52 lg:top-60 text-center md:text-start lg:text-start ml-0 md:ml-4 lg:ml-4 right-0 left-0 text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
            Expertise.
            <br /> convenience.
            <br /> reliability.
          </div>
          <div className="px-4 z-10 absolute -mt-10">
            <div className="w-full bg-gray-200 shadow-lg flex flex-col md:flex lg:flex-row justify-center  p-10">
              <div className="flex flex-col md:flex lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex flex-col">
                    <div className="text-red-500 font-bold text-center md:text-start lg:text-start">
                      Mangata Auto Painting & Body repair
                    </div>
                    <div className=" text-center md:text-start lg:text-start text-4xl font-extrabold tracking-tight mt-4">
                      We are here to help you with your car{" "}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <div className=" text-center md:text-start lg:text-start text-xl">
                      Our Best Price Guarantee will help make sure you are
                      getting quality work done at the best price. Saving money
                      is as easy as book, quote, fix.
                    </div>
                    <div className=" text-center md:text-start lg:text-start mt-4">
                      <Button>
                        Discover More <MoveRight />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
