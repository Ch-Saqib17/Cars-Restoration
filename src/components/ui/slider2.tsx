"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  const cardsData = [
    // Array of objects containing card data
    {
      image: "/logoipsum-260.svg",
    },
    {
      image: "/logoipsum-261.svg",
    },
    {
      image: "/logoipsum-262.svg",
    },
    {
      image: "/logoipsum-263.svg",
    },
    {
      image: "/logoipsum-264.svg",
    },
    {
      image: "/logoipsum-265.svg",
    },
    {
      image: "/logoipsum-285.svg",
    },
    {
      image: "/logoipsum-286.svg",
    },
    {
      image: "/logoipsum-288.svg",
    },
    {
      image: "/logoipsum-289.svg",
    },
    {
      image: "/logoipsum-297.svg",
    },
    {
      image: "/logoipsum-321.svg",
    },
    {
      image: "/logoipsum-325.svg",
    },
    {
      image: "/logoipsum-330.svg",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[400px] md:w-full lg:w-full h-20"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {cardsData.map((card, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex  items-center justify-center mb-6">
                  <div>
                    <div className="flex gap-4  mt-6 text-black">
                      <Image
                        src={"/logoipsum-260.svg"}
                        alt={""}
                        width={200}
                        height={200}
                      />
                      <Image
                        src={"/logoipsum-261.svg"}
                        alt={""}
                        width={200}
                        height={200}
                      />
                      <Image
                        src={"/logoipsum-262.svg"}
                        alt={""}
                        width={200}
                        height={200}
                      />
                      <Image
                        src={"/logoipsum-263.svg"}
                        alt={""}
                        width={200}
                        height={200}
                      />
                      <Image
                        src={"/logoipsum-264.svg"}
                        alt={""}
                        width={200}
                        height={200}
                      />
                      <Image
                        src={"/logoipsum-265.svg"}
                        alt={""}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
