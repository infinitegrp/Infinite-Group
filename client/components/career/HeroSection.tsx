import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="xl:min-h-[50vh] bg-violet-100 flex flex-col md:flex-row items-center mt-20 rounded-2xl mx-4 lg:mx-12 overflow-hidden">
      <div className="h-full w-full md:w-1/3 py-8 flex flex-col items-center justify-center order-2 md:order-1 font-bricolage">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight max-w-2xl bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
          CAREERS
        </h1>
        <h1 className="text-stone-500 font-bold text-base lg:text-xl">
          Infinite Group of Companies
        </h1>
        <p className="text-stone-500 text-xs lg:text-sm">
          UAE | QATAR | INDIA | SRI LANKA
        </p>
      </div>
      <div className="relative h-full w-full md:w-2/3 order-1 md:order-2">
        <Image
          className="object-contain object-right opacity-80"
          src="/assets/career.png"
          alt="background cover image"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
