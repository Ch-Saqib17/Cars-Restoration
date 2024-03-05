import { Car, MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero7 = () => {
  return (
    <div>
      <div className="text-center mt-10 md:mt-30 lg:mt-40">
        <h1 className=" uppercase text-red-500 font-semibold md:font-bold lg:font-bold">
          How it works
        </h1>
        <h2 className=" uppercase text-lg md:text-3xl lg:text-3xl font-extrabold mt-4">
          Easy Step to get services
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center md:justify-between lg:justify-between items-center px-4 lg:px-16 text-center mt-10">
        <div className="flex-row">
          {/*Left First Box */}
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-10">
            <div className="w-14 h-14 md:w-20 md:h-14 lg:w-[120px] text-white lg:h-14 rounded-full bg-red-500 flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M22 7v9c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.1.3-.1.7-.1 1 0 2.8 2.2 5 5 5 1.1 0 2.2-.4 3-1m-6-4c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z" />
              </svg>
            </div>
            <div className="flex flex-col mt-4 md:mt-16 lg:mt-16 text-center md:text-start lg:text-start">
              <div className="text-2xl font-medium">Consultations </div>
              <div>
                Potenti ad purus cras consectetur felis etiam mi dignissim curae
                tellus sapien
              </div>
            </div>
          </div>
          {/*Left Second Box */}
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-10">
            <div className="w-14 h-14 md:w-20 md:h-14 lg:w-[120px] text-white lg:h-14 rounded-full bg-red-500 flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM9 18H7v-6h2v6zm4 0h-2V7h2v11zm4 0h-2v-8h2v8z" />
              </svg>
            </div>
            <div className="flex flex-col  mt-4 md:mt-16 lg:mt-16 text-center md:text-start lg:text-start">
              <div className="text-2xl font-medium">Choose Package </div>
              <div>
                Potenti ad purus cras consectetur felis etiam mi dignissim curae
                tellus sapien
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <Image src={"/Sports_car.png"} alt={""} width={1000} height={1000} />
        </div>
        <div className="">
          {/*Right First Box */}
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-10">
            <div className="w-14 h-14 md:w-20 text-white md:h-14 lg:w-[120px] lg:h-14 rounded-full bg-red-500 flex justify-center items-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M20.772 13.155l-1.368-4.104A2.995 2.995 0 0016.559 7H7.441a2.995 2.995 0 00-2.845 2.051l-1.368 4.104A2.001 2.001 0 002 15v3c0 .738.404 1.376 1 1.723V21a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-1.277A1.99 1.99 0 0022 18v-3c0-.831-.507-1.542-1.228-1.845zM7.441 9h9.117a1 1 0 01.949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684zM5.5 18a1.5 1.5 0 11.001-3.001A1.5 1.5 0 015.5 18zm13 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0118.5 18zM9 4.378c.005-1.088-1.037-2.051-1.387-2.344a.176.176 0 00-.228 0C7.033 2.325 5.995 3.271 6 4.377 6 5.272 6.673 6 7.5 6S9 5.272 9 4.378zm4.5 0c.005-1.088-1.037-2.052-1.387-2.344a.176.176 0 00-.228 0c-.353.291-1.391 1.238-1.386 2.344C10.5 5.272 11.173 6 12 6s1.5-.728 1.5-1.622zm4.5 0c.005-1.088-1.037-2.052-1.387-2.344a.176.176 0 00-.228 0c-.352.291-1.39 1.237-1.385 2.343C15 5.272 15.673 6 16.5 6S18 5.272 18 4.378z" />
              </svg>
            </div>
            <div className="flex flex-col  mt-4 md:mt-16 lg:mt-16 text-center md:text-start lg:text-start">
              <div className="text-2xl font-medium">Get Services </div>
              <div>
                Potenti ad purus cras consectetur felis etiam mi dignissim curae
                tellus sapien
              </div>
            </div>
          </div>
          {/*Right Second Box */}
          <div className="flex flex-col lg:flex-row gap-4 items-center mb-10">
            <div className="w-14 h-14 md:w-20 md:h-14 lg:w-[120px] text-white lg:h-14 rounded-full bg-red-500 flex justify-center items-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="2em"
                width="2em"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                <path d="M11 3 H13 A2 2 0 0 1 15 5 V5 A2 2 0 0 1 13 7 H11 A2 2 0 0 1 9 5 V5 A2 2 0 0 1 11 3 z" />
                <path d="M9 17v-5M12 17v-1M15 17v-3" />
              </svg>
            </div>
            <div className="flex flex-col  mt-4 md:mt-16 lg:mt-16 text-center md:text-start lg:text-start ">
              <div className="text-2xl font-medium">Report Project </div>
              <div>
                Potenti ad purus cras consectetur felis etiam mi dignissim curae
                tellus sapien
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero7;
