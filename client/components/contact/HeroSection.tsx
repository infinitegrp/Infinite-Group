"use client";
import Image from "next/image";
import React from "react";
import { Allison } from "next/font/google";

const allision = Allison({
  subsets: ["latin"],
  weight: "400",
});

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-[30vh] pt-20 px-4 lg:px-28">
      <Image
        className="absolute object-cover opacity-20"
        src="/buildings.jpeg"
        alt="background cover image"
        fill
        priority
      />
      <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full p-4 md:py-8 lg:p-16 pb-14">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl uppercase font-bold leading-snug md:leading-tight max-w-2xl font-bricolage bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
          Contact Us
        </h1>
        <div className="flex flex-col items-center">
          <h1 className="text-stone-500 font-bold text-base lg:text-xl">
            Infinite Group of Companies
          </h1>
          <p className="text-stone-500 text-xs lg:text-sm">
            UAE | QATAR | INDIA | SRI LANKA
          </p>
        </div>
        <p className="max-w-md text-sm md:text-base">
          Any questions or remarks ? Just write us a message!
        </p>
      </div>
      <div>
        <p
          className={`${allision.className} text-3xl md:5xl lg:text-6xl font-black bg-gradient-to-r from-primary100 via-primary300 to-primary100 text-transparent bg-clip-text`}
        >
          Let&apos;s Get In Touch
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
