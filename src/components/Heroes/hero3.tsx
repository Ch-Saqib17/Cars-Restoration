import React from "react";
import { Button } from "../ui/button";

const Hero3 = () => {
  return (
    <div className="">
      <video src="/video2.mp4" autoPlay loop muted playsInline></video>
      <div className="flex-row text-center -mt-[200px] px-[50px] md:-mt-[400px] md:px-[200px]  lg:-mt-[500px] lg:px-[300px]">
        <div className="mb-2 md:mb-3 lg:mb-4">
          <span className=" text-xm md:text-2xl lg:text-5xl lg:font-extrabold font-bold md:font-extrabold text-white mb-0 md:mb-6 lg:mb-6">
            Building your vehicle with us is the best experience
          </span>
        </div>
        <div className="mb-0 md:mb-3 lg:mb-4">
          <span className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </span>
        </div>
        <div>
          <Button>Discover More</Button>
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
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M959 413.4L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM220 418l72.7-199.9.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z" />
                </svg>
              </div>
              {/*data */}
              <div className="text-2xl font-bold mt-2">Body repair </div>
              <div className="mt-2 px-4 md:px-0 lg:px-0">
                Cursus class si non luctus proin ridiculus at porttitor tempus
                feugiat sollicitudin{" "}
              </div>
            </div>
            {/*Second Box */}
            <div className="flex flex-col justify-center items-center text-center  bg-gray-200 shadow-lg w-full h-[200px] lg:w-full lg:h-60 md:w-full md:h-40  mb-8 md:mb-0 lg:mb-0">
              {/*Circle */}
              <div className="flex justify-center items-center w-20 h-20 bg-red-500 rounded-full mt-2 md:mt-0 lg:mt-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M20.772 13.155l-1.368-4.104A2.995 2.995 0 0016.559 7H7.441a2.995 2.995 0 00-2.845 2.051l-1.368 4.104A2.001 2.001 0 002 15v3c0 .738.404 1.376 1 1.723V21a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-1.277A1.99 1.99 0 0022 18v-3c0-.831-.507-1.542-1.228-1.845zM7.441 9h9.117a1 1 0 01.949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684zM5.5 18a1.5 1.5 0 11.001-3.001A1.5 1.5 0 015.5 18zm13 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0118.5 18zM9 4.378c.005-1.088-1.037-2.051-1.387-2.344a.176.176 0 00-.228 0C7.033 2.325 5.995 3.271 6 4.377 6 5.272 6.673 6 7.5 6S9 5.272 9 4.378zm4.5 0c.005-1.088-1.037-2.052-1.387-2.344a.176.176 0 00-.228 0c-.353.291-1.391 1.238-1.386 2.344C10.5 5.272 11.173 6 12 6s1.5-.728 1.5-1.622zm4.5 0c.005-1.088-1.037-2.052-1.387-2.344a.176.176 0 00-.228 0c-.352.291-1.39 1.237-1.385 2.343C15 5.272 15.673 6 16.5 6S18 5.272 18 4.378z" />
                </svg>
              </div>
              {/*data */}
              <div className="text-2xl font-bold mt-2">Body Painting </div>
              <div className="mt-2 px-4 md:px-0 lg:px-0">
                Cursus class si non luctus proin ridiculus at porttitor tempus
                feugiat sollicitudin{" "}
              </div>
            </div>
            {/*Third Box */}
            <div className="flex flex-col justify-center items-center text-center  bg-gray-200 shadow-lg w-full h-[200px] lg:w-full lg:h-60 md:w-full md:h-40  mb-8 md:mb-0 lg:mb-0">
              {/*Circle */}
              <div className="flex justify-center items-center w-20 h-20 bg-red-500 rounded-full mt-2 md:mt-0 lg:mt-0 ">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M20.772 13.155l-1.368-4.104A2.995 2.995 0 0016.559 7H7.441a2.995 2.995 0 00-2.845 2.051l-1.368 4.104A2.001 2.001 0 002 15v3c0 .738.404 1.376 1 1.723V21a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-1.277A1.99 1.99 0 0022 18v-3c0-.831-.507-1.542-1.228-1.845zM7.441 9h9.117a1 1 0 01.949.684L18.613 13H5.387l1.105-3.316c.137-.409.519-.684.949-.684zM5.5 18a1.5 1.5 0 11.001-3.001A1.5 1.5 0 015.5 18zm13 0a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0118.5 18zM5.277 5c.347.595.985 1 1.723 1s1.376-.405 1.723-1h6.555c.346.595.984 1 1.722 1s1.376-.405 1.723-1H17V3h1.723c-.347-.595-.985-1-1.723-1s-1.376.405-1.723 1H8.723C8.376 2.405 7.738 2 7 2s-1.376.405-1.723 1H7v2H5.277z" />
                </svg>
              </div>
              {/*data */}
              <div className="text-2xl font-bold mt-2">Auto Bodycare </div>
              <div className="mt-2 px-4 md:px-0 lg:px-0">
                Cursus class si non luctus proin ridiculus at porttitor tempus
                feugiat sollicitudin{" "}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero3;
