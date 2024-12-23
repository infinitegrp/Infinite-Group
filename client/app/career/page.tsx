"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomJob from "@/components/career/CustomJob";
import HeroSection from "@/components/career/HeroSection";
import JoinOurTeam from "@/components/career/JoinOurTeam";

const page = () => {
  const queryClient = new QueryClient();

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <HeroSection />
        <JoinOurTeam />
        <CustomJob />
      </QueryClientProvider>
    </main>
  );
};

export default page;
