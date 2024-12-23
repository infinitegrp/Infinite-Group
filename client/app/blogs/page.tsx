import HeroSection from "@/components/blogs/HeroSection";
import { Metadata } from "next";
import React from "react";
import NewsLetter from "@/components/blogs/NewsLetter";
import BlogListings from "@/components/blogs/BlogListing";

export const metadata: Metadata = {
  title: "Blogs | Infinite Group",
  description: "Innovating Across Borders | Infinite Group of Companies",
};

const page = () => {
  return (
    <main>
      <HeroSection />
      <BlogListings />
      <NewsLetter />
    </main>
  );
};

export default page;
