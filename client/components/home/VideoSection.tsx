import Link from "next/link";
import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center min-h-[40vh] xl:min-h-[60vh] overflow-hidden text-white bg-black">
      <video
        className="absolute inset-0 w-full h-full object-contain z-0"
        src="/assets/about-infinite-group.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bg-opacity-40 z-1 bg-black w-full h-full" />
      <div className="absolute bg-opacity-10 text-xs lg:text-sm bottom-0 z-1 bg-black w-full min-h-16 flex flex-col lg:flex-row gap-1 justify-center uppercase items-center p-4">
        <p className="text-center px-4">
          Let&apos;s create something extraordinary together.
        </p>
        <Link href={"/contact"} className="underline">
          Got a project in mind ?
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;
