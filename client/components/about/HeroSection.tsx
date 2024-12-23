"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "../ui/CustomButton";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row min-h-screen pt-20 px-4 lg:px-28">
      <Image
        className="absolute object-cover opacity-20"
        src="/buildings.jpeg"
        alt="background cover image"
        fill
        priority
      />
      <div className="relative flex-1 min-h-[40vh] rounded-2xl overflow-hidden lg:m-12">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/Infinite-group-9-16.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="flex flex-col justify-center gap-4 lg:gap-8 w-full xl:w-1/2 p-4 md:py-8 lg:p-16 pb-14">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight max-w-2xl font-bricolage bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
          Innovating Across Borders
        </h1>
        <p className="max-w-md text-sm md:text-base">
          Infinite Group of Companies operates across UAE, Qatar, India, and Sri
          Lanka, offering innovative solutions in Paint Trading (Protective,
          Marine & Industrial Coatings), Floor Coating, Education, General
          Trading, IT Services, Advertising, Tours and Travels, Interior Design,
          and Real Estate.
        </p>
        <CustomButton type="secondary" direction="NE" href="/contact">
          Connect now
        </CustomButton>
      </div>
    </div>
  );
};

export default HeroSection;
