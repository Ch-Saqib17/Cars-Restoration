"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check, Cross, Play } from "lucide-react";

const Hero18: React.FC = () => {
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
              width={250}
              height={250}
              className="-mt-20 ml-4 md:-ml-7 lg:-ml-7"
            />
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
                <span className="uppercase font-extrabold text-xl md:text-4xl lg:text-5xl">
                  Focus on being productive instead of busy.{" "}
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
              <div className="mt-10">
                <Button>Discover More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero18;
