import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero16 = () => {
  return (
    <div className="">
      <Image
        src="/cardealer.jpg"
        className="w-full"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="flex-row text-center -mt-[200px] px-[50px] md:-mt-[400px] md:px-[200px]  lg:-mt-[500px] lg:px-[300px]">
        <div className="mb-2 md:mb-3 lg:mb-4">
          <span className=" text-xm md:text-2xl lg:text-5xl lg:font-extrabold font-bold md:font-extrabold text-white mb-0 md:mb-6 lg:mb-6">
            Discount up to 30% only this month for new member
          </span>
        </div>
        <div className="mb-0 md:mb-3 lg:mb-4">
          <span className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </span>
        </div>
        <div>
          <Button>Claim Promo</Button>
        </div>
      </div>
      {/* */}
      <div>
        <section className="mb-10 px-4">
          <div className="flex-row md:flex lg:flex pt-6 md:pt-6 lg:pt-[200px] gap-x-[30px]">
            {/*First Box */}
            <div className="flex flex-col justify-center items-center text-center  bg-gray-200 shadow-lg w-full h-[200px] lg:w-full lg:h-60 md:w-full md:h-40 mb-8 md:mb-0 lg:mb-0">
              {/*Circle */}
              <div className="flex justify-center items-center w-20 h-20 bg-red-500 rounded-full mt-2 md:mt-0 lg:mt-0 ">
                <svg
                  viewBox="0 0 384 512"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  color="white"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192 384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2 12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
                </svg>
              </div>
              {/*data */}
              <div className="text-2xl font-bold mt-2">Location </div>
              <div className="mt-2 px-4 md:px-0 lg:px-0">
                Jln Cempaka Wangi No 22, Jakarta - Indonesia
              </div>
            </div>
            {/*Second Box */}
            <div className="flex flex-col justify-center items-center text-center  bg-gray-200 shadow-lg w-full h-[200px] lg:w-full lg:h-60 md:w-full md:h-40  mb-8 md:mb-0 lg:mb-0">
              {/*Circle */}
              <div className="flex justify-center items-center w-20 h-20 bg-red-500 rounded-full mt-2 md:mt-0 lg:mt-0">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  color="white"
                >
                  <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
                </svg>
              </div>
              {/*data */}
              <div className="text-2xl font-bold mt-2">Email us </div>
              <div className="mt-2 px-4 md:px-0 lg:px-0">
                support@yourdomain.tld
              </div>
            </div>
            {/*Third Box */}
            <div className="flex flex-col justify-center items-center text-center  bg-gray-200 shadow-lg w-full h-[200px] lg:w-full lg:h-60 md:w-full md:h-40  mb-8 md:mb-0 lg:mb-0">
              {/*Circle */}
              <div className="flex justify-center items-center w-20 h-20 bg-red-500 rounded-full mt-2 md:mt-0 lg:mt-0 ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="2em"
                  width="2em"
                  color="white"
                >
                  <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              {/*data */}
              <div className="text-2xl font-bold mt-2">Phone us </div>
              <div className="mt-2 px-4 md:px-0 lg:px-0">+(62)21 2002-2012</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero16;
