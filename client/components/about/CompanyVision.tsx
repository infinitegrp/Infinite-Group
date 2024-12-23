"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, px } from "framer-motion";
import { aboutVisionData } from "@/data/aboutVisionData";
import CustomButton from "../ui/CustomButton";
import Dot from "../../public/assets/scroll.png";
import { Icons } from "../common/Icons";

interface VisionData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cover: string;
}

const CompanyVision: React.FC = () => {
  const data: VisionData[] = aboutVisionData;
  const [index, setIndex] = useState<number>(0);

  const handleClick = (type: "inc" | "dec") => {
    if (type === "inc") {
      setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    } else {
      setIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full xl:min-h-[70vh] items-start justify-start p-4 gap-16 lg:p-16 my-20">
      <div className="w-4/5 md:w-full lg:w-1/2 h-full flex justify-center gap-4">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={data[index]?.cover}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="relative flex h-80 w-80 md:h-96 shadow-sm md:w-96 items-center justify-center rounded-xl"
          >
            <Image
              src={`/assets/${data[index]?.cover}`}
              fill
              alt="image"
              objectFit="cover"
            />
            <div className="absolute -bottom-10 w-40 md:w-72 h-40 md:h-72 right-[-20%] md:right-[-19%] shadow-md overflow-hidden rounded-xl p-2">
              <Image
                src={`/assets/${data[index]?.image}`}
                fill
                alt="image"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative h-full w-full lg:w-1/2 flex flex-col gap-4 md:gap-8 px-6 lg:p-8 pb-4 justify-between items-start overflow-hidden">
        <div className="flex flex-col gap-4 md:gap-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={data[index]?.cover}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="uppercase"
            >
              <CustomButton type="primary" pointer={false} href="/contact">
                {data[index]?.title}
              </CustomButton>
            </motion.h1>
            <motion.h1
              key={data[index]?.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl lg:text-3xl max-w-xl font-bricolage font-bold"
            >
              {data[index]?.subtitle}
            </motion.h1>
            <motion.p
              key={data[index]?.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-md"
            >
              {data[index]?.description}
            </motion.p>
            <Image src={Dot} className="absolute w-[600px]" alt="..." />
          </AnimatePresence>
        </div>
        <div className="z-10 flex gap-2">
          <button
            onClick={() => handleClick("dec")}
            className="p-2 flex justify-center items-center border border-black border-opacity-10 w-14 h-14 transition-all duration-500 rounded-full hover:bg-white"
          >
            <Icons.leftArrow />
          </button>
          <button
            onClick={() => handleClick("inc")}
            className="p-2 flex justify-center items-center border border-black border-opacity-10 w-14 h-14 transition-all duration-500 rounded-full hover:bg-white"
          >
            <Icons.rightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyVision;
