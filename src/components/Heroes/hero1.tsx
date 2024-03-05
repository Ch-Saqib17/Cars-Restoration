import React from "react";

const Hero1 = () => {
  return (
    <div className="text-black mt-[400px] flex-row justify-center items-center">
      <div className="text-center">
        <span className="text-4xl font-extrabold ">
          Trusted by 5,000+ world-class brands of all sizes.
        </span>
      </div>
      <div className="text-center">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </span>
      </div>
      <HeroData />
    </div>
  );
};

export default Hero1;

function HeroData() {
  return (
    <section className="flex justify-center p-6 relative">
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 absolute z-10">
        {/*First Box */}
        <div className="bg-gray-200 shadow-lg w-40 h-40 lg:w-60 lg:h-40 md:w-60 md:h-40 flex justify-center items-center ">
          <div className="text-center">
            <div className="text-red-500 font-extrabold text-4xl md:text-4xl lg:text-6xl">
              7 K+
            </div>
            <div className="font-medium md:font-semibold lg:font-semibold uppercase">
              Project Done
            </div>
          </div>
        </div>
        {/*Second Box */}
        <div className="bg-gray-200 shadow-lg w-40 h-40 lg:w-60 lg:h-40 md:w-60 md:h-40 flex justify-center items-center mt-0 md:mt-0 lg:mt-14">
          <div className="text-center">
            <div className="text-red-500 font-extrabold text-4xl md:text-4xl lg:text-6xl">
              5 K+
            </div>
            <div className=" font-medium md:font-semibold lg:font-semibold uppercase">
              Happy Customer
            </div>
          </div>
        </div>
        {/*Third Box */}
        <div className="bg-gray-200 shadow-lg w-40 h-40 lg:w-60 lg:h-40 md:w-60 md:h-40 flex justify-center items-center mt-0 md:mt-0 lg:mt-14">
          <div className="text-center">
            <div className="text-red-500 font-extrabold text-4xl md:text-4xl lg:text-6xl">
              211 K+
            </div>
            <div className="font-medium md:font-semibold lg:font-semibold uppercase">
              Pro Expert
            </div>
          </div>
        </div>
        {/*Forth Box */}
        <div className="bg-gray-200 shadow-lg   w-40 h-40 lg:w-60 lg:h-40 md:w-60 md:h-40 flex justify-center items-center">
          <div className="text-center">
            <div className="text-red-500 font-extrabold text-4xl md:text-4xl lg:text-6xl">
              75 K+
            </div>
            <div className="font-medium md:font-semibold lg:font-semibold uppercase">
              Award Win
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
