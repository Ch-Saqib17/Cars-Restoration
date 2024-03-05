"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check, Cross, Play } from "lucide-react";

const Hero2: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex justify-center mt-[350px] relative">
      <section>
        <div className="lg:flex md:flex flex-row justify-evenly gap-[60px] mb-20">
          {/*Left Side */}
          <div className="flex-1">
            {/*First Image */}
            <Image
              src={"/cardealer.jpg"}
              alt={""}
              width={1100}
              height={1100}
              className="px-8 "
            />
            {/*First Image */}
            <Image
              src={"/repair.jpg"}
              alt={""}
              width={200}
              height={200}
              className="-mt-20 ml-4 md:-ml-7 lg:-ml-7"
            />
            {/*Box */}
            <div className="bg-gray-100 w-32 h-32 lg:w-60 lg:h-44 md:w-60 md:h-40 shadow-lg flex justify-center items-center -mt-60 ml-[220px] md:-mt-80 md:ml-[400px] lg:-mt-60 lg:ml-[360px] absolute">
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
          {/*Right Side */}
          <div className="flex-1 px-5 md:px-0 lg:px-0">
            <div className="">
              <div className="mt-14 md:mt-0 lg:mt-0">
                <span className="uppercase text-red-500 font-bold mt-4">
                  Who we are
                </span>
              </div>
              <div className="mt-6 md:mt-0 lg:mt-6">
                <span className="uppercase font-extrabold text-2xl">
                  Building your vehicle with us is the best experience{" "}
                </span>
              </div>
              <div className="mt-6 md:mt-0 lg:mt-6 pr-0 md:pr-0 lg:pr-4 ">
                {" "}
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </span>
              </div>
              <div className="lg:flex md:flex text-center flex-row justify-center md:justify-start lg:justify-start mt-6 md:mt-0 lg:mt-6 gap-[150px]">
                <div>
                  {isPlaying && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-4 rounded">
                        <video
                          width="820"
                          height="820"
                          loop
                          playsInline
                          muted
                          autoPlay
                        >
                          <source src="/video3.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <Button
                          onClick={toggleVideo}
                          className="top-0 right-0 m-2 text-red-400 hover:text-red-600"
                        >
                          <Cross className="w-6 h-6 rotate-45" />
                        </Button>
                      </div>
                    </div>
                  )}
                  <Button
                    onClick={toggleVideo}
                    className="w-40 h-40 rounded-full text-red-400 bg-white border shadow-lg hover:bg-red-600"
                  >
                    <Play className="w-14 h-14" />
                  </Button>
                  <div className="text-red-500 uppercase font-extrabold mt-4">
                    {" "}
                    Play Intro
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-4 md:mt-0 lg:mt-0">
                  <span className="flex gap-3">
                    <Check className="text-red-500" />
                    Professional
                  </span>
                  <span className="flex gap-3">
                    <Check className="text-red-500" />
                    Certified
                  </span>
                  <span className="flex gap-3">
                    <Check className="text-red-500" />
                    Experience
                  </span>
                  <span className="flex gap-3">
                    <Check className="text-red-500" />
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
