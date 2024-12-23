import React, { FC } from "react";

const Landing: FC = () => {
  return (
    <div className="relative grid items-end justify-items-center min-h-screen overflow-hidden text-white">
      <video
        className="hidden xl:block absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/Infinite-group-16-9.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="absolute xl:hidden inset-0 w-full h-full object-cover z-0"
        src="/assets/Infinite-group-9-16.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute bg-opacity-10 z-1 bg-black w-full h-full" />
      <div className="flex flex-col row-start-2 items-center justify-end z-10 w-full h-2/3 p-8 bg-gradient-to-t from-black to-transparent">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-center font-plus_jakarta pb-8 lg:pb-4 leading-snug md:leading-tight tracking-wider max-w-5xl">
          Innovating Solutions Across Multiple Industries
        </h1>
      </div>
    </div>
  );
};

export default Landing;
