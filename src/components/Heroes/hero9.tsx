import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero9 = () => {
  return (
    <div className=" pt-40">
      <Image
        src={"/carpainting1.jpg"}
        alt={""}
        width={1000}
        height={1000}
        className="w-full"
      />
      <div className="flex-row text-center -mt-[200px] px-[50px] md:-mt-[400px] md:px-[200px]  lg:-mt-[500px] lg:px-[300px]">
        <div className="mb-2 md:mb-3 lg:mb-10">
          <span className="text-lg md:text-2xl lg:text-5xl font-extrabold text-white">
            Discount up to 30% only this month for new member
          </span>
        </div>
        <div className="mb-2 md:mb-3 lg:mb-10">
          <span className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </span>
        </div>
        <div>
          <Button>Claim Promo</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero9;
