"use client";
import React from "react";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";
import { aboutCompanyData } from "@/data/aboutCompanyData";

const AboutCompany: React.FC = () => {
  return (
    <div className="p-4 lg:p-12 max-w-screen-xl mx-auto flex flex-col gap-8 lg:gap-20">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 lg:gap-8">
        <div className="flex flex-col gap-4 lg:gap-8">
          <CustomButton type="primary" pointer={false} href="/contact">
            ABOUT COMPANY
          </CustomButton>
          <p className="text-xl lg:text-3xl max-w-xl font-bricolage font-bold">
            A leading firm empowering corporate businesses with bespoke,
            outcome-focused solutions for success.
          </p>
        </div>
        <p className="font-plus_jakarta lg:max-w-md xl:max-w-lg text-sm md:text-base">
          At Infinite Group of Companies, we are a trusted partner delivering
          tailored solutions with professional expertise. Committed to
          excellence, we provide unmatched support anytime, anywhere, ensuring
          seamless experiences for our clients.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-28">
        {aboutCompanyData?.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 lg:gap-4">
            <Image
              src={`/assets/${item.icon}`}
              width={100}
              height={100}
              alt={item?.title}
              className="w-20 h-20"
            />
            <p className="text-base lg:text-xl max-w-lg font-bricolage font-bold text-primary300">
              {item?.title}
            </p>
            <p className="font-plus_jakarta max-w-xs lg:max-w-lg text-center text-sm lg:text-base">
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCompany;
