import Image from "next/image";
import React from "react";
import CustomButton from "../ui/CustomButton";
import Carousel from "../ui/Carousal";
import { SwiperSlide } from "swiper/react";
import CompanyCard from "./CompanyCard";
import { companyData } from "@/data/companyData";

const Companies: React.FC = () => {
  return (
    <div
      className="xl:min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#0C3E54] to-[#1B89BA] rounded-3xl p-8"
      id="companies"
    >
      <div className="flex flex-col justify-center w-full gap-4 lg:gap-12 lg:pl-16 lg:w-1/3 xl:h-screen">
        <Image
          className="absolute object-cover -rotate-12 h-full w-1/3 -ml-28"
          src="/assets/dot.png"
          alt="background cover image"
          width={500}
          height={500}
        />
        <CustomButton type="primary" pointer={false}>
          SECTORS
        </CustomButton>
        <p className="text-4xl lg:text-5xl text-white font-bricolage font-bold">
          Our Companies
        </p>
        <CustomButton type="secondary" pointer={false} href="/contact">
          Explore Now
        </CustomButton>
      </div>
      <div className="w-full lg:w-3/5 xl:w-2/3 h-full">
        <Carousel breakpoints={{ sm: 1, md: 1.5, lg: 2.5 }}>
          {companyData?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CompanyCard data={item} />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Companies;
