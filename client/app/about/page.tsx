import AboutCompany from "@/components/about/AboutCompany";
import CompanyVision from "@/components/about/CompanyVision";
import HeroSection from "@/components/about/HeroSection";
import VideoSection from "@/components/about/VideoSection";
import Marquee from "@/components/common/Marquee";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Infinite Group of Companies",
  description: "Innovating Across Borders | Infinite Group of Companies",
};

const page = () => {
  return (
    <main>
      <HeroSection />
      <Marquee />
      <AboutCompany />
      <CompanyVision />
      <VideoSection />
    </main>
  );
};

export default page;
