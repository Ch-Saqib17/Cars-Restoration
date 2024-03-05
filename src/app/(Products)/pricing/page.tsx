  import Hero13 from "@/components/Heroes/hero13";
  import Hero8 from "@/components/Heroes/hero8";
  import { Button } from "@/components/ui/button";
  import React from "react";

  const page = () => {
    return (
      <div>
        <div className="relative">
          <div>
            <div>
              <img
                src="/pricing.jpg"
                alt="About Us"
                width="1440"
                height="625"
                className="w-full h-[300px] md:w-full md:h-full lg:w-full lg:h-full"
              />
              <div className="absolute inset-0 bg-red-600 opacity-40"></div>
            </div>
            <div className="absolute z-10 top-20 md:top-52 lg:top-60 text-center right-0 left-0 text-2xl md:text-4xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
              Pricing plan
            </div>
            <div className="absolute z-10 top-20 mt-10 md:mt-16 lg:mt-20 md:top-52 lg:top-60 px-4 md:px-0 lg:px-0 text-center right-0 left-0 text-lg md:text-4xl lg:text-3xl font-medium tracking-tight uppercase text-white">
              Complete care for your car
            </div>
          </div>
        </div>
        {/*============== */}
        <div className="flex flex-col md:flex lg:flex-row p-8 justify-between gap-6 items-center pt-10 md:pt-20 lg:pt-40">
          <div className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight">
            Top-quality craftsmanship with hands-on care
          </div>
          <div>
            Quam ac dui ultricies aptent orci eleifend vestibulum imperdiet lacus.
            Metus mauris rhoncus adipiscing potenti bibendum maecenas nascetur.
          </div>
        </div>
        {/*=======Pricing Plan======= */}
        <div className="flex flex-col md:flex lg:flex-row justify-between p-0 md:p-6 lg:p-6 gap-6">
          {/*Left Box */}
          <div className="w-[400px] h-[580px] bg-gray-200 text-center flex flex-col">
            <div className="text-2xl font-bold tracking-tight text-red-500 mt-4 uppercase">
              Basic{" "}
            </div>
            <div>Ac tincidunt ligula himenaeos </div>
            <div className="text-4xl font-bold tracking-tight text-red-500 mt-4 uppercase">
              $499
            </div>
            <div className="text-gray-400 text-xl font-bold tracking-tighter uppercase mt-4">
              Sesion
            </div>
            <div className="mt-6">Sem est cursus ex </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div>Montes volutpat risus interdum </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div>Senectus sit congue natoque </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div>Adipiscing duis curae natoque </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div>Luctus vivamus mauris hendrerit </div>
            <div className="mt-6">
              <Button className="bg-red-600">Get A Quote</Button>
            </div>
            <div className="mt-4">
              *Tortor pellentesque dignissim efficitur mattis pulvinar elementum
              hendrerit vitae in{" "}
            </div>
          </div>
          {/*center Box */}
          <div className="w-[400px] h-[580px] bg-blue-500 text-center flex flex-col">
            <div className="text-2xl font-bold tracking-tight text-white mt-4 uppercase">
              Premium{" "}
            </div>
            <div className="text-white">Ac tincidunt ligula himenaeos </div>
            <div className="text-4xl font-bold tracking-tight text-white  mt-4 uppercase">
              $799
            </div>
            <div className="text-xl font-bold text-white tracking-tighter uppercase mt-4">
              Sesion
            </div>
            <div className="mt-6 text-white">Sem est cursus ex </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Montes volutpat risus interdum </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Senectus sit congue natoque </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Adipiscing duis curae natoque </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Luctus vivamus mauris hendrerit </div>
            <div className="mt-6">
              <Button className="bg-red-600">Get A Quote</Button>
            </div>
            <div className="mt-4">
              *Tortor pellentesque dignissim efficitur mattis pulvinar elementum
              hendrerit vitae in{" "}
            </div>
          </div>
          {/*Right Box */}
          <div className="w-[400px] h-[580px] bg-red-600 text-center flex flex-col">
            <div className="text-2xl font-bold tracking-tight text-white mt-4 uppercase">
              Luxury{" "}
            </div>
            <div className="text-white">Ac tincidunt ligula himenaeos </div>
            <div className="text-4xl font-bold tracking-tight text-white mt-4 uppercase">
              $999
            </div>
            <div className="text-xl font-bold text-white tracking-tighter uppercase mt-4">
              Sesion
            </div>
            <div className="mt-6 text-white">Sem est cursus ex </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Montes volutpat risus interdum </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Senectus sit congue natoque </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Adipiscing duis curae natoque </div>
            <hr className="h-px my-2 mx-6 bg-gray-600 border-0 dark:bg-gray-700"></hr>
            <div className="text-white">Luctus vivamus mauris hendrerit </div>
            <div className="mt-6">
              <Button className="bg-black">Get A Quote</Button>
            </div>
            <div className="mt-4">
              *Tortor pellentesque dignissim efficitur mattis pulvinar elementum
              hendrerit vitae in{" "}
            </div>
          </div>
        </div>
        <div>
          <Hero13 />
        </div>
        <div className="pt-2 md:pt-40 lg:pt-30">
          <Hero8 />
        </div>
      </div>
    );
  };

  export default page;
