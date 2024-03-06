import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero14 = () => {
  return (
    <div>
      <div className="flex flex-col text-center mt-[200px]">
        <div className=" uppercase text-red-500 font-bold">Our Project</div>
        <div className="text-xl md:text-6xl lg:text-4xl font-extrabold uppercase mt-4">
          Latest Project
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-4 gap-4 mt-10">
        {/*First Box */}
        <div>
          <div className=" overflow-hidden">
            <div className="relative  hover:scale-125 transition duration-500 ">
              <Image
                src={"/girl1.jpg"}
                alt={""}
                width={1000}
                height={1000}
                className="w-full h-[320px] md:w-full md:h-[380px] lg:w-full lg:h-[380px] rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 hover:bg-black hover:opacity-70"></div>
            </div>
          </div>
          <div className="absolute z-10 -mt-40 pl-4 flex flex-col">
            <div className="text-white font-bold text-sm md:text-xl lg:text-xl uppercase  ">
              Painting Car{" "}
            </div>
            <div className="text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase mt-2 w-full md:w-[300px] lg:w-[300px]">
              Timor V1 Special Editions{" "}
            </div>
            <div className="mt-2">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
        {/*Second Box */}
        <div>
          <div className=" overflow-hidden">
            <div className="relative  hover:scale-125 transition duration-500 ">
              <Image
                src={"/image2.jpg"}
                alt={""}
                width={600}
                height={600}
                className="w-full h-[320px] md:w-full md:h-[380px] lg:w-full lg:h-[380px] rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 hover:bg-black hover:opacity-70"></div>
            </div>
          </div>
          <div className="absolute z-10 -mt-40 pl-4 flex flex-col">
            <div className="text-white font-bold text-sm md:text-xl lg:text-xl uppercase  ">
              Body Restorations{" "}
            </div>
            <div className="text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase mt-2 w-full md:w-[300px] lg:w-[300px]">
              Timor V1 Special Editions{" "}
            </div>
            <div className="mt-2">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
        {/*Third Box */}
        <div>
          <div className=" overflow-hidden">
            <div className="relative  hover:scale-125 transition duration-500 ">
              <Image
                src={"/image3.jpg"}
                alt={""}
                width={1000}
                height={1000}
                className="w-full h-[320px] md:w-full md:h-[380px] lg:w-full lg:h-[380px] rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 hover:bg-black hover:opacity-70"></div>
            </div>
          </div>
          <div className="absolute z-10 -mt-40 pl-4 flex flex-col">
            <div className="text-white font-bold text-sm md:text-xl lg:text-xl uppercase  ">
              Painting Car{" "}
            </div>
            <div className="text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase mt-2 w-full md:w-[300px] lg:w-[300px]">
              Timor V1 Special Editions{" "}
            </div>
            <div className="mt-2">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
        {/*Fourth Box */}
        <div>
          <div className=" overflow-hidden">
            <div className="relative  hover:scale-125 transition duration-500 ">
              <Image
                src={"/image4.jpg"}
                alt={""}
                width={1000}
                height={1000}
                className="w-full h-[320px] md:w-full md:h-[380px] lg:w-full lg:h-[380px] rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 hover:bg-black hover:opacity-70"></div>
            </div>
          </div>
          <div className="absolute z-10 -mt-40 pl-4 flex flex-col">
            <div className="text-white font-bold text-sm md:text-xl lg:text-xl uppercase  ">
              Painting Car{" "}
            </div>
            <div className="text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase mt-2 w-full md:w-[300px] lg:w-[300px]">
              Timor V1 Special Editions{" "}
            </div>
            <div className="mt-2">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
        {/*Fiveth Box */}
        <div>
          <div className=" overflow-hidden">
            <div className="relative  hover:scale-125 transition duration-500 ">
              <Image
                src={"/image5.jpg"}
                alt={""}
                width={1000}
                height={1000}
                className="w-full h-[320px] md:w-full md:h-[380px] lg:w-full lg:h-[380px] rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 hover:bg-black hover:opacity-70"></div>
            </div>
          </div>
          <div className="absolute z-10 -mt-40 pl-4 flex flex-col">
            <div className="text-white font-bold text-sm md:text-xl lg:text-xl uppercase  ">
              Painting Car{" "}
            </div>
            <div className="text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase mt-2 w-full md:w-[300px] lg:w-[300px]">
              Timor V1 Special Editions{" "}
            </div>
            <div className="mt-2">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
        {/*Sixth Box */}
        <div>
          <div className=" overflow-hidden">
            <div className="relative  hover:scale-125 transition duration-500 ">
              <Image
                src={"/image6.jpg"}
                alt={""}
                width={1000}
                height={1000}
                className="w-full h-[320px] md:w-full md:h-[380px] lg:w-full lg:h-[380px] rounded-lg"
              />

              <div className="absolute inset-0 bg-black opacity-40 hover:bg-black hover:opacity-70"></div>
            </div>
          </div>
          <div className="absolute z-10 -mt-40 pl-4 flex flex-col">
            <div className="text-white font-bold text-sm md:text-xl lg:text-xl uppercase  ">
              Painting Car{" "}
            </div>
            <div className="text-xl md:text-2xl lg:text-2xl font-bold text-white uppercase mt-2 w-full md:w-[300px] lg:w-[300px]">
              Timor V1 Special Editions{" "}
            </div>
            <div className="mt-2">
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero14;
