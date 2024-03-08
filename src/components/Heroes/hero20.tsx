import Image from "next/image";
import React from "react";

const Hero20 = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col md:flex lg:flex-row justify-center items-center">
          <div className="flex-1 p-6">
            <div className=" uppercase text-red-500 font-bold mb-6">
              Our Capabilities
            </div>
            <div className=" uppercase text-1xl md:text-4xl lg:text-4xl font-extrabold tracking-tight mb-6">
              If you want to lift yourself up, lift up someone else
            </div>
            <div className="mb-6 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center text-center">
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
              <div>Hello</div>
            </div>
          </div>
          <div className="flex-1">
            <div className=" relative">
              <div className="w-full">
                <Image
                  src={"/bodyrepair.jpg"}
                  alt={""}
                  width={1000}
                  height={1000}
                />
              </div>

              <div className=" absolute z-10 w-32 h-32 md:w-52 md:h-52 lg:w-52 lg:h-52 shadow-lg bg-gray-100 top-0 flex flex-col justify-center items-center">
                <div className="text-2xl md:text-6xl lg:text-6xl text-red-500 font-extrabold">
                  25 +
                </div>
                <div className=" uppercase text-xs font-bold">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero20;
