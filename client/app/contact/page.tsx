import FAQs from "@/components/contact/FAQs";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/contact/HeroSection";
import Locations from "@/components/contact/Locations";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Infinite Group of Companies",
  description: "Innovating Across Borders | Infinite Group of Companies",
};

const page = () => {
  return (
    <main>
      <HeroSection />
      <Locations />
      <ContactSection />
      <FAQs />
    </main>
  );
};

export default page;
