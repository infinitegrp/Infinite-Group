"use client";
import Landing from "@/components/home/Landing";
import Marquee from "@/components/common/Marquee";
import About from "@/components/home/About";
import GlobalPresence from "@/components/home/GlobalPresence";
import OurVision from "@/components/home/OurVision";
import Companies from "@/components/home/Companies";
import Testimonials from "@/components/home/Testimonials";
import VideoSection from "@/components/home/VideoSection";

export default function Home() {
  return (
    <main>
      <Landing />
      <Marquee />
      <About />
      <GlobalPresence />
      <OurVision />
      <Companies />
      <Testimonials />
      <VideoSection />
    </main>
  );
}
