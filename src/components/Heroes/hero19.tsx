import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero19 = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <div className=" uppercase text-red-500 font-bold">Meet our team</div>
        <div className=" uppercase text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight mt-4 mb-4">
          Teamwork makes the dream work.
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 justify-center items-center gap-4 px-4 pt-10">
        {/*1 */}
        <div className="relative">
          <Image
            src="/img_1.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Michael Doyle </p>
            <p className="font-bold mt-2 mb-8 uppercase ">Founder</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*2 */}
        <div className="relative">
          <Image
            src="/img_2.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Alexander Khan </p>
            <p className="font-bold mt-2 mb-8 uppercase">Co-Founder</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*3 */}
        <div className="relative">
          <Image
            src="/img_3.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Maria Hopkins </p>
            <p className="font-bold mt-2 mb-8 uppercase">Business Manager</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*4 */}
        <div className="relative">
          <Image
            src="/img_4.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Hannah Graham</p>
            <p className="font-bold mt-2 mb-8 uppercase">Marketing</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*5 */}
        <div className="relative">
          <Image
            src="/img_5.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Rebecca Murray</p>
            <p className="font-bold mt-2 mb-8 uppercase">Sales manager</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*6 */}
        <div className="relative">
          <Image
            src="/img_6.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Daniel Lawson </p>
            <p className="font-bold mt-2 mb-8 uppercase">Head of operational</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*7 */}
        <div className="relative">
          <Image
            src="/img_7.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Dorian Huber</p>
            <p className="font-bold mt-2 mb-8 uppercase">Head of operational</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*8 */}
        <div className="relative">
          <Image
            src="/img_8.jpg"
            alt="Person's name"
            width="200"
            height="200"
            className="rounded-lg shadow object-cover w-full h-full"
          />
          <div className="absolute m-4 w-[290px] h-[400px] md:w-[280px] md:h-[350px] lg:w-[260px] lg:h-[350px] inset-0 bg-blue-500/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col text-start items-center justify-center text-white">
            <p className="text-xl font-bold">Emma Thomson </p>
            <p className="font-bold mt-2 mb-8 uppercase">Admin</p>
            <div className="flex gap-4">
              <div>
                {" "}
                {/*Facebook */}
                <Link href={"https://www.facebook.com/ch.saqib.73113/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Instagram*/}
                <Link href={"https://www.instagram.com/ch_saqib174/"}>
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div>
                {" "}
                {/*Youtube*/}
                <Link
                  href={
                    "https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"
                  }
                >
                  <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1.5em"
                      width="1.5em"
                      color="red"
                    >
                      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero19;
