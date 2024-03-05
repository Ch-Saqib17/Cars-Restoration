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
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const cardsData = [
    // Array of objects containing card data
    {
      name: "Matthew palmer",
      description:
        "Facilisis sollicitudin vehicula feugiat eleifend felis amet mi praesent si volupat.Pretium ultricies cras conubia nisl nisi pellentesque tempor si facilisi porttitor.Idduis cubilia fermentum rutrum dapibus dictum malesuada. ",
      businesstype: "Business Man",
      image: "/mathhew.webp",
    },
    {
      name: "Esmeralda wilson",
      description:
        "Facilisis sollicitudin vehicula feugiat eleifend felis amet mi praesent si volupat.Pretium ultricies cras conubia nisl nisi pellentesque tempor si facilisi porttitor.Idduis cubilia fermentum rutrum dapibus dictum malesuada. ",
      businesstype: "Entrepreneur",
      image: "/emalda.jpeg",
    },
    {
      name: "melissa wilkinson",
      description:
        "Facilisis sollicitudin vehicula feugiat eleifend felis amet mi praesent si volupat.Pretium ultricies cras conubia nisl nisi pellentesque tempor si facilisi porttitor.Idduis cubilia fermentum rutrum dapibus dictum malesuada. ",
      businesstype: "Entrepreneur",
      image: "/emilsa.jpeg",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {cardsData.map((card, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div>
                    <p className="text-sm">{card.description}</p>{" "}
                    <div className="flex gap-6 mt-6">
                      <Image
                        src={card.image}
                        alt={""}
                        width={100}
                        height={100}
                        className="w-14 h-14 rounded-full"
                      />
                      <div className="grid grid-cols-1">
                        <span className=" text-xs font-semibold uppercase text-red-500">
                          {card.name}
                        </span>{" "}
                        <span className="text-sm">{card.businesstype}</span>{" "}
                      </div>
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
