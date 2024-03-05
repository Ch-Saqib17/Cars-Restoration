import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Hero5 = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center pt-20">
      <div>
        <span className="text-red-500 font-bold uppercase">What we offer</span>
      </div>
      <div className="mt-8">
        <span className="text-lg md:text-2xl lg:text-3xl font-extrabold uppercase">
          We have quality in every work{" "}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 px-4 mt-14">
        {/*First Box */}

        <div className="relative">
          <div className="">
            <div className="overflow-hidden">
              <Image
                src={"/carpainting.jpg"}
                alt={""}
                width={400}
                height={400}
                className="hover:scale-105 duration-150 rounded-md"
              />
            </div>
          </div>
          <div className="absolute z-10 -mt-8 ml-2">
            <div className="w-[360px] h-48 md:w-[380px] md:h-48 lg:w-[380px] lg:h-[240px] bg-gray-100 shadow-lg flex flex-col justify-center rounded-md items-center">
              <span className="text-xl md:text-2xl lg:text-2xl font-medium mb-4">
                Car Painting{" "}
              </span>
              <span className="px-8 mb-4">
                Ut nec interdum cursus torquent elementum fames curae erat
                phasellus platea euismod{" "}
              </span>
              <div className="flex items-center justify-center">
                <Button>
                  <span className="mr-2"> Discover More</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/*Second Box */}
        <div className="relative mt-40 md:mt-0 lg:mt-0">
          <div className="">
            <div className="overflow-hidden">
              <Image
                src={"/bodyrepair.jpg"}
                alt={""}
                width={400}
                height={400}
                className="hover:scale-105 duration-150 rounded-md"
              />
            </div>
          </div>
          <div className="absolute z-10 -mt-8 ml-2">
            <div className="w-[360px] h-48 md:w-[380px] md:h-48 lg:w-[380px] lg:h-[240px] bg-gray-100 shadow-lg flex flex-col justify-center rounded-md items-center">
              <span className="text-xl md:text-2xl lg:text-2xl font-medium mb-4">
                Body Repair{" "}
              </span>
              <span className="px-8 mb-4">
                Ut nec interdum cursus torquent elementum fames curae erat
                phasellus platea euismod{" "}
              </span>
              <div className="flex items-center justify-center">
                <Button>
                  <span className="mr-2"> Discover More</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/*Third Box */}
        <div className="relative mt-40 md:mt-0 lg:mt-0">
          <div className="">
            <div className="overflow-hidden">
              <Image
                src={"/parts.jpg"}
                alt={""}
                width={400}
                height={400}
                className="hover:scale-105 duration-150 rounded-md"
              />
            </div>
          </div>
          <div className="absolute z-10 -mt-8 ml-2">
            <div className="w-[360px] h-48 md:w-[380px] md:h-48 lg:w-[380px] lg:h-[240px] bg-gray-100 shadow-lg flex flex-col justify-center rounded-md items-center">
              <span className="text-xl md:text-2xl lg:text-2xl font-medium mb-4">
                Parts Replacement{" "}
              </span>
              <span className="px-8 mb-4">
                Ut nec interdum cursus torquent elementum fames curae erat
                phasellus platea euismod{" "}
              </span>
              <div className="flex items-center justify-center">
                <Button>
                  <span className="mr-2"> Discover More</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*Fourth Box */}
        <div className="relative mt-40 md:mt-44 lg:mt-[220px]">
          <div className="">
            <div className="overflow-hidden">
              <Image
                src={"/headlight.jpg"}
                alt={""}
                width={400}
                height={400}
                className="hover:scale-105 duration-150 rounded-md"
              />
            </div>
          </div>
          <div className="absolute z-10 -mt-8 ml-2">
            <div className="w-[360px] h-48 md:w-[380px] md:h-48 lg:w-[380px] lg:h-[240px] bg-gray-100 shadow-lg flex flex-col justify-center rounded-md items-center">
              <span className="text-xl md:text-2xl lg:text-2xl font-medium mb-4">
                Headlight Restoration{" "}
              </span>
              <span className="px-8 mb-4">
                Ut nec interdum cursus torquent elementum fames curae erat
                phasellus platea euismod{" "}
              </span>
              <div className="flex items-center justify-center">
                <Button>
                  <span className="mr-2"> Discover More</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*Fifth Box */}
        <div className="relative mt-40 md:mt-44 lg:mt-[220px]">
          <div className="">
            <div className="overflow-hidden">
              <Image
                src={"/pins.jpg"}
                alt={""}
                width={400}
                height={400}
                className="hover:scale-105 duration-150 rounded-md"
              />
            </div>
          </div>
          <div className="absolute z-10 -mt-8 ml-2">
            <div className="w-[360px] h-48 md:w-[380px] md:h-48 lg:w-[380px] lg:h-[240px] bg-gray-100 shadow-lg flex flex-col justify-center rounded-md items-center">
              <span className="text-xl md:text-2xl lg:text-2xl font-medium mb-4">
                Pinstripes{" "}
              </span>
              <span className="px-8 mb-4">
                Ut nec interdum cursus torquent elementum fames curae erat
                phasellus platea euismod{" "}
              </span>
              <div className="flex items-center justify-center">
                <Button>
                  <span className="mr-2"> Discover More</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*Sixth Box */}
        <div className="relative mt-40 md:mt-44 lg:mt-[220px]">
          <div className="">
            <div className="overflow-hidden">
              <Image
                src={"/spot.jpg"}
                alt={""}
                width={400}
                height={400}
                className="hover:scale-105 duration-150 rounded-md"
              />
            </div>
          </div>
          <div className="absolute z-10 -mt-8 ml-2">
            <div className="w-[360px] h-48 md:w-[380px] md:h-48 lg:w-[380px] lg:h-[240px] bg-gray-100 shadow-lg flex flex-col justify-center rounded-md items-center">
              <span className="text-xl md:text-2xl lg:text-2xl font-medium mb-4">
                Spot Painting{" "}
              </span>
              <span className="px-8 mb-4">
                Ut nec interdum cursus torquent elementum fames curae erat
                phasellus platea euismod{" "}
              </span>
              <div className="flex items-center justify-center">
                <Button>
                  <span className="mr-2"> Discover More</span>
                  <MoveRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
