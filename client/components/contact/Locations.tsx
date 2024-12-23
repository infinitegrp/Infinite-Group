"use client";
import Image from "next/image";
import React from "react";
import Carousel from "../ui/Carousal";
import { SwiperSlide } from "swiper/react";
import { locationData } from "@/data/locationData";
import LocationCard from "./LocationCard";

const Locations: React.FC = () => {
  return (
    <div className="xl:min-h-[40vh] w-screen flex flex-col overflow-hidden py-8 font-plus_jakarta bg-gradient-to-r from-violet-100 to-blue-100">
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
        <div className="w-full p-4 lg:p-8 h-full xl:min-h-[80vh]">
          <Carousel breakpoints={{ sm: 1, md: 2, lg: 3 }} >
            {locationData?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <LocationCard data={item} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Locations;
