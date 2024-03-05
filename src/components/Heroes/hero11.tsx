import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero11 = () => {
  return (
    <div className="flex flex-col md:flex lg:flex-row gap-6 pt-36 pr-4 md:pr-0 lg:pr-0">
      <div className="flex flex-col p-6">
        <div className="text-red-500 uppercase font-bold">Insight</div>
        <div className="text-5xl font-bold tracking-tight uppercase mt-6">
          Latest news & article
        </div>
        <div className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
      </div>
      <div className="pl-4 md:pl-0 lg:pl-0">
        <Image src={"/girl1.jpg"} alt={""} width={400} height={400} />
        <div className="bg-gray-100 shadow-lg h-[300px] flex flex-col p-6">
          <div className="text-2xl hover:text-red-500">
            <Link href={""}>
              The Benefits of Sandblasting before Auto Body Painting{" "}
            </Link>
          </div>
          <div className="text-red-500 mt-6"> February 26, 2022 </div>
          <div className="mt-6 text-gray-400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur
          </div>
        </div>
      </div>
      <div className="pl-4 md:pl-0 lg:pl-0">
        <Image src={"/girl2.jpg"} alt={""} width={400} height={400} />
        <div className="bg-gray-100 shadow-lg h-[300px] flex flex-col p-6">
          <div className="text-2xl hover:text-red-500">
            <Link href={""}>
              The Pros And Cons Of Sandblasting A Restoration Project Classic
              Car{" "}
            </Link>
          </div>
          <div className="text-red-500 mt-6"> February 26, 2022 </div>
          <div className="mt-6 text-gray-400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero11;
