import React from "react";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";
import Counter from "../ui/Counter";

const About: React.FC = () => {
  return (
    <div id="about" className="xl:min-h-screen lg:py-10">
      <div className="flex flex-col lg:flex-row w-full xl:min-h-[80vh]">
        <div className="relative flex-1 justify-center items-center min-h-[40vh] order-2 lg:order-1 ">
          <Image
            className="object-contain"
            src="/assets/20+.png"
            alt="background cover image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="h-full w-full lg:w-1/2 order-1 lg:order-2 flex flex-col gap-4 md:gap-8 px-6 lg:p-8 pb-4">
          <span className="rounded-full bg-[#16233F] text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary100 via-primary200 to-primary100 border-2 w-fit border-primary200 px-4 py-2">
            ABOUT US
          </span>
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight max-w-2xl font-bricolage bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
            Empowering Global Growth with Comprehensive Solutions
          </h1>
          <p className="max-w-md">
            At Infinite Group of Companies, we believe in infinite
            possibilities. With operations spanning across the UAE, Qatar, India
            and Sri Lanka, we have established ourselves as a dynamic group of
            companies involved in a wide array of industries. Our expertise
            spans multiple sectors, enabling us to deliver innovative solutions
            that cater to the ever-evolving needs of our clients.
          </p>
          <CustomButton type="secondary" direction="NE" href="/about">
            Read About Us
          </CustomButton>
        </div>
      </div>
      <div className="lg:h-1/5 flex justify-around items-center pb-8">
        <Counter count={100}>services</Counter>
        <Counter count={5000}>happy clients</Counter>
      </div>
    </div>
  );
};

export default About;
