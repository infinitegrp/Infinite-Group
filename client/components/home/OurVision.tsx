import React, { useState } from "react";
import Image from "next/image";
import { visionData } from "@/data/visionData";
import { motion } from "framer-motion";

const OurVision: React.FC = () => {
  const [data, setData] = useState(visionData[0]);
  return (
    <div className="flex flex-col lg:flex-row w-full xl:h-[80vh] items-center justify-center p-4 gap-8 lg:p-16 my-20">
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 md:gap-8 px-6 lg:p-8 pb-4 justify-center items-center">
        <motion.h1
          key={data?.cover}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight max-w-2xl font-bricolage bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text"
        >
          {data?.title}
        </motion.h1>
        <motion.p
          key={data?.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-md text-center"
        >
          {data?.description}
        </motion.p>
        <div className="flex flex-wrap gap-4 lg:gap-6 xl:gap-x-10 xl:gap-y-6 justify-center">
          {visionData?.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setData(item)}
              className={`rounded-full bg-[#16233F] text-xs md:text-base font-semibold bg-gradient-to-r from-primary100 via-primary200 to-primary100 border-2 w-2/5 border-primary200 px-4 py-2
                    ${
                      data?.title === item?.title
                        ? "text-white"
                        : "bg-clip-text text-transparent"
                    }`}
            >
              {item?.title}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex justify-center gap-4">
        <motion.div
          key={data?.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative flex-1 justify-center items-center max-w-lg min-h-[40vh] rounded-xl overflow-hidden"
        >
          <Image
            className="object-cover"
            src={`/assets/${data.cover}`}
            alt="background cover image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
