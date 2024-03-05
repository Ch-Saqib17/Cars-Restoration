import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero4 = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/*Left Side */}
          <div className="flex-1">
            <div className="flex-row px-10 text-start ">
              <div>
                <span className="font-bold text-red-500">Why choose us</span>
              </div>
              <div className="mt-4 mb-4">
                <span className="text-4xl font-extrabold">
                  Meeting your needs with future technology{" "}
                </span>
              </div>
              <div className="mb-4">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </span>
              </div>
            </div>
            {/*First Section */}
            <section>
              <div className="flex flex-col md:flex lg:flex-row items-center md:items-baseline lg:items-baseline justify-center md:justify-start lg:justify-start  text-center md:text-start lg:text-start">
                <div className="flex-1 mb-4 pl-0 md:pl-0 lg:pl-10">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-red-400 ">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-red-600 text-white">
                      <Check />
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-4 md:px-0 lg:px-0 -ml-0 md:-ml-[300px]  lg:-ml-[400px]">
                  <div className="text-lg md:text-3xl lg:text-3xl  font-medium md:font-normal lg:font-sans mb-4">
                    Best price guarantee
                  </div>
                  <div className="mb-4">
                    {" "}
                    Porttitor scelerisque egestas purus praesent mattis habitant
                    primis mus auctor dictum sollicitudin
                  </div>
                </div>
              </div>
            </section>

            {/*Second Section */}
            <section>
              <div className="flex flex-col md:flex lg:flex-row items-center md:items-baseline lg:items-baseline justify-center md:justify-start lg:justify-start  text-center md:text-start lg:text-start">
                <div className="flex-1 mb-4 pl-0 md:pl-0 lg:pl-10">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-red-400 ">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-red-600 text-white">
                      <Check />
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-4 md:px-0 lg:px-0 -ml-0 md:-ml-[300px]  lg:-ml-[400px]">
                  <div className="text-lg md:text-3xl lg:text-3xl  mb-4 font-medium md:font-normal lg:font-sans">
                    Lifetime warranty
                  </div>
                  <div className="mb-4">
                    {" "}
                    Porttitor scelerisque egestas purus praesent mattis habitant
                    primis mus auctor dictum sollicitudin
                  </div>
                </div>
              </div>
            </section>
            {/*Third Section */}
            <section>
              <div className="flex flex-col md:flex lg:flex-row items-center md:items-baseline lg:items-baseline justify-center md:justify-start lg:justify-start  text-center md:text-start lg:text-start">
                <div className="flex-1 mb-4 pl-0 md:pl-0 lg:pl-10">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-red-400 ">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-red-600 text-white">
                      <Check />
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-4 md:px-0 lg:px-0 -ml-0 md:-ml-[300px]  lg:-ml-[400px]">
                  <div className="text-lg md:text-3xl lg:text-3xl font-medium md:font-normal lg:font-sans mb-4">
                    Premium support
                  </div>
                  <div className="mb-4">
                    {" "}
                    Porttitor scelerisque egestas purus praesent mattis habitant
                    primis mus auctor dictum sollicitudin
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*Right Side */}
          <div className="flex-1">
            <Image src={"/redcar.jpg"} alt={""} width={600} height={600} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero4;
