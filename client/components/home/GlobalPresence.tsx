import Image from "next/image";
import React from "react";
import CustomButton from "../ui/CustomButton";
import Carousel from "../ui/Carousal";
import { SwiperSlide } from "swiper/react";
import GlobalPresenceCard from "./GlobalPresenceCard";
import Link from "next/link";
import { locationData } from "@/data/locationData";

const GlobalPresence: React.FC = () => {
  return (
    <div className="xl:min-h-screen w-screen flex flex-col overflow-hidden py-8 font-plus_jakarta bg-gradient-to-r from-[#0C3E54] to-[#1B89BA] text-[#e4e4e4]">
      <div className="flex items-center">
        <div className="flex flex-col justify-center pl-1 w-1/3">
          <Image
            className="absolute object-cover rotate-12 h-screen w-1/3"
            src="/assets/dot.png"
            alt="background cover image"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full p-4 lg:p-12 h-full xl:min-h-[80vh]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <CustomButton type="primary" pointer={false}>
                WHERE WE OPERATE
              </CustomButton>
              <p className="text-3xl lg:text-5xl font-bricolage font-bold">
                Our Global Presence
              </p>
            </div>
            <p className="max-w-md">
              Infinite Group of Companies is proud to deliver world-class
              services across multiple countries. We have established ourselves
              as leaders in various industries and continue to expand our reach
              globally.
            </p>
          </div>
          <Carousel>
            {locationData?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <GlobalPresenceCard data={item} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-2 pb-8 justify-center items-center">
        <p className="text-center px-4">
          Save your precious time and effort spent for finding a solution.
        </p>
        <Link href={"/contact"} className="underline">
          Contact Us Now
        </Link>
      </div>
    </div>
  );
};

export default GlobalPresence;
