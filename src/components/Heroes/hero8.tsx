import React from "react";
import { Button } from "../ui/button";
import { Accordion1 } from "../ui/Accordion1";
import { Card1 } from "../ui/Card1";

const Hero8 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center md:justify-between lg:justify-between text-start items-center px-4 md:px-14 lg:px-6 mt-20 md:mt-40 lg:mt-[200px] ">
      <div>
        <div className=" uppercase text-4xl font-extrabold mb-6 ">
          Most popular Questions
        </div>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
        <div className="pt-10">
          {" "}
          <Accordion1 />
        </div>
      </div>
      <div>
        <div className="w-[400px] h-[250px] bg-blue-500 text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl lg:text-4xl pt-6 font-extrabold text-white">
            Need help?
          </h1>
          <h2 className="text-white font-extrabold">____</h2>
          <span className="px-4 pt-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </span>
          <Button className="flex gap-4 mt-4">
            {" "}
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z" />
            </svg>
            Call Us
          </Button>
        </div>
        <div className="mt-4 ml-6">
          {" "}
          <Card1 />
        </div>
      </div>
    </div>
  );
};

export default Hero8;
