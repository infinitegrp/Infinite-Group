import { marqueeData } from "@/data/marqueeData";
import Image from "next/image";
import React, { FC } from "react";

const Marquee: FC = () => {
  const Elements: FC = () => (
    <>
      {marqueeData.map((item) => (
        <div
          key={item.title}
          className="flex mx-12 items-center justify-center gap-4"
        >
          <Image
            src={`/assets/${item.icon}`}
            width={50}
            height={50}
            alt={item.title}
            className="w-10 h-10 md:w-14 md:h-14"
          />
          <span className="text-xl md:text-3xl bg-gradient-to-r from-primary100 to-primary200 text-transparent bg-clip-text">
            {item.title}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center py-8 w-screen overflow-hidden">
      <h1 className="text-xl md:text-3xl 2xl:text-4xl text-primary300 font-bricolage">
        Delivering 10+ Expert Services
      </h1>
      <div className="relative flex overflow-x-hidden bg-gradient-to-b from-white via-[#e3e1f2] to-white">
        <div className="py-12 animate-marquee whitespace-nowrap flex">
          <Elements />
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
          <Elements />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
