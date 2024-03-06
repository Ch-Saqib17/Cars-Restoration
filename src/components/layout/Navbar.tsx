"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleDown = () => {
    setShow(!show);
  };

  return (
    <div className="sticky top-0  w-full z-50">
      <div className="flex items-center justify-between px-6 bg-[#00002d] h-20 text-white">
        {/* Image */}
        <Image src={"/large.png"} alt="Logo" width={50} height={50} />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-14">
          <Link href="/">Home</Link>
          {/*About Us */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <Link href={"/about"} className=" hover:text-red-500">
                About Us{" "}
              </Link>
            </DropdownMenuTrigger>
          </DropdownMenu>
          {/* Services */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <Link href={"/service"}>Services </Link>
              <span className="ml-1">
                {" "}
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="w-6 h-5 "
                >
                  <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="/service">
                <DropdownMenuItem>Service</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/pricing">
                <DropdownMenuItem>Pricing Plan</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {/*PortFolio */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <Link href={"/portfolio"}>
              PortFolio{" "}
              </Link>
            </DropdownMenuTrigger>
          </DropdownMenu>
          {/*Pages */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              Pages{" "}
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-6 h-5 "
              >
                <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href={"/services/ourservices"}>
                <DropdownMenuItem>Team</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href={"/services/ourservices"}>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href={"/services/servicesdetails"}>
                <DropdownMenuItem>Gallery</DropdownMenuItem>
              </Link>
              <DropdownMenu>
                <DropdownMenuSeparator />
                <DropdownMenuTrigger className="flex items-center ml-2">
                  Blog
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-6 h-5 ml-12"
                  >
                    <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href={"/services/servicesdetails"}>
                    <DropdownMenuItem>Our Blog</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <Link href={"/services/servicesdetails"}>
                    <DropdownMenuItem>Blog Details</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenuSeparator />
              <Link href={"/services/servicesdetails"}>
                <DropdownMenuItem>Single Post</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href={"/services/servicesdetails"}>
                <DropdownMenuItem>404 Error</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          {/*Contact Us */}
          <Link href={""}>Contact Us</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button onClick={toggleDown}>
            <svg
              viewBox="0 0 64 64"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              className="hover:rotate-90 block"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={4}
                d="M12 21h40M12 33h40M12 45h40"
              />
            </svg>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`${show ? "block" : "hidden"} md:hidden`}>
          <div className="grid grid-cols-2 gap-x-2">
            <Link href="/">Home</Link>
            {/*About Us */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                <Link href={"/about"} className=" hover:text-red-500">
                  About Us{" "}
                </Link>
              </DropdownMenuTrigger>
            </DropdownMenu>
            {/* Services */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                <Link href={"/service"}>Services </Link>
                <span className="ml-1">
                  {" "}
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-6 h-5 "
                  >
                    <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                  </svg>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/service">
                  <DropdownMenuItem>Service</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/pricing">
                  <DropdownMenuItem>Pricing Plan</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            {/*PortFolio */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
              <Link href={"/portfolio"}>
              PortFolio{" "}
              </Link>
              </DropdownMenuTrigger>
            </DropdownMenu>
            {/*Pages */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                Pages{" "}
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="w-6 h-5 "
                >
                  <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href={"/services/ourservices"}>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href={"/services/ourservices"}>
                  <DropdownMenuItem>FAQ</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href={"/services/servicesdetails"}>
                  <DropdownMenuItem>Gallery</DropdownMenuItem>
                </Link>
                <DropdownMenu>
                  <DropdownMenuSeparator />
                  <DropdownMenuTrigger className="flex items-center ml-2">
                    Blog
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                      className="w-6 h-5 ml-12"
                    >
                      <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Link href={"/services/servicesdetails"}>
                      <DropdownMenuItem>Our Blog</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href={"/services/servicesdetails"}>
                      <DropdownMenuItem>Blog Details</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenuSeparator />
                <Link href={"/services/servicesdetails"}>
                  <DropdownMenuItem>Single Post</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href={"/services/servicesdetails"}>
                  <DropdownMenuItem>404 Error</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            {/*Contact Us */}
            <Link href={""}>Contact Us</Link>
          </div>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex gap-6">
          <Link href={"/"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
