import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="text-center mt-[100px] bg-black/90 h-full text-white">
        <div className="flex flex-col lg:flex-row justify-center md:justify-start lg:justify-start gap-x-20 pt-10 pl-6">
          {/*First Box */}
          <div className="flex-col justify-start">
            <div>
              <Image
                src={"/large.png"}
                alt="Logo"
                width={100}
                height={100}
                className="mb-6 mt-20 md:mt-0 lg:mt-0"
              />
            </div>
            <div className="text-start pr-2 md:pr-0 lg:pr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </div>
            <div className="text-start mt-6">
              Jln Cempaka Wangi No 22, Jakarta - Indonesia
            </div>
            <div className="flex justify-start items-center mt-6 gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
                color="red"
              >
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
              </svg>
              support@yourdomain.tld
            </div>
            <div className="flex justify-start items-center mt-4 mb-10 md:mb-40 lg:mb-40 gap-2">
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
                color="red"
              >
                <path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z" />
              </svg>
              +(92)321 2002-201
            </div>
          </div>
          {/*Second Box */}
          <div className="flex-col justify-start">
            <div className="text-2xl font-bold text-start">Services</div>
            <div className="text-start text-lg font-bold text-red-600">
              _______
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Auto Painting
              </Link>
            </div>

            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Body Repair
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Parts Replacement
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Headlight Restoration
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Pinstripes
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Spot Painting
              </Link>
            </div>
          </div>
          {/*Third Box */}

          <div className="flex-col justify-start">
            <div className="text-2xl font-bold text-start mt-6 md:mt-0 lg:mt-0">
              Company
            </div>
            <div className="text-start text-lg font-bold text-red-600">
              _______
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                About Us
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Leadership
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={""} className="hover:text-red-600">
                Careers
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Latest Articles & News
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={"/"} className="hover:text-red-600">
                Legal Notice
              </Link>
            </div>
            <div className="text-start mt-4 flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="0.5em"
                width="0.5em"
                color="red"
              >
                <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A1 1 0 005 3v18a1 1 0 00.536.886z" />
              </svg>
              <Link href={""} className="hover:text-red-600">
                Pinstripes
              </Link>
            </div>
          </div>
          {/*Fourth Box */}
          <div className="flex-col justify-start">
            <div className="text-2xl font-bold text-start mt-4 md:mt-0 lg:mt-0">
              Gallery
            </div>
            <div className="text-start text-lg font-bold text-red-600">
              _______
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 pr-4 mt-4 mb-6">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Last Bar */}
      <div className="flex flex-col md:flex-row lg:flex-row justify-center  md:justify-between lg:justify-between items-center bg-blue-950 h-26 md:h-20 lg:h-18">
        <div className="text-white pl-4 pt-4 md:pt-0 lg:pt-0 text-center md:text-start lg:text-start">
          Copyright © 2024 Car Painting And Restoration, All rights reserved.
          Powered by Ch Saqib.
        </div>
        <div className="text-white mt-4 flex gap-4 pb-6 pr-4 justify-center md:justify-end lg:justify-end">
          {/*Youtube*/}
          <Link
            href={"https://www.youtube.com/channel/UCLFTVwPzf9_iaipVhQ6vSVA"}
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
          {/*Twitter */}
          <Link href={"https://twitter.com/chsaqib11223"}>
            <div className="w-8 h-8 bg-white flex justify-center items-center rounded-md">
              {" "}
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
                color="red"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
              </svg>
            </div>
          </Link>
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
      </div>
    </div>
  );
};

export default Footer;
