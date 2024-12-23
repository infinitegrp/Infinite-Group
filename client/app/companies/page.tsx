import HeroSection from "@/components/company/HeroSection";
import OurCompanies from "@/components/company/OurCompanies";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Companies | Infinite Group",
  description:
    "Comprehensive, end-to-end solutions for businesses under one roof @ Infinite Group of Companies",
};

const page = () => {
  return (
    <main>
      <HeroSection />
      <OurCompanies />
    </main>
  );
};

export default page;
