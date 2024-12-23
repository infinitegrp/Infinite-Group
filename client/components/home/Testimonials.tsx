import Image from "next/image";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { Icons } from "../common/Icons";
import testimonialData from "@/data/testimonialData";

interface TestimonialItem {
  title: string;
  description: string;
  author: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const data: TestimonialItem[] = testimonialData;
  const [index, setIndex] = useState<number>(0);
  const totalItems = data?.length || 0;
  const indices = Array.from({ length: 3 }, (_, i) => (index + i) % totalItems);

  const handleChange = (type: "inc" | "dec") => {
    if (type === "inc") {
      setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    } else {
      setIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
    }
  };
  return (
    <div
      className="xl:min-h-screen flex flex-col gap-12 py-16 px-4 items-center"
      id="testimonials"
    >
      <Image
        className="absolute object-contain h-screen w-full"
        src="/assets/testimonial.png"
        alt="background cover image"
        width={500}
        height={500}
      />
      <p className="text-3xl lg:text-5xl max-w-2xl font-plus_jakarta font-bold text-center">
        Trusted by the world&apos;s fastest growing companies
      </p>
      <div className="flex gap-4 lg:gap-12 items-center">
        <button
          className="!p-2 z-10 group flex justify-center items-center border border-solid border-black border-opacity-10 !w-10 !h-10 transition-all duration-500 rounded-full hover:bg-black"
          onClick={() => handleChange("dec")}
        >
          <Icons.leftArrow className="group-hover:text-white" />
        </button>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-center">
          <div className="rounded-full h-40 w-40 lg:h-60 lg:w-60 overflow-hidden">
            <Image
              className="object-cover"
              src={`/assets/${data?.[index]?.image}`}
              alt="background cover image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-6">
            <p className="text-xl lg:text-2xl max-w-2xl font-plus_jakarta font-bold">
              {data?.[index]?.title}
            </p>
            <p className="text-sm lg:text-lg max-w-md font-plus_jakarta text-justify">
              {data?.[index]?.description}
            </p>
            <p className="text-xs lg:text-md uppercase text-primary300 font-bold max-w-2xl font-plus_jakarta">
              {data?.[index]?.author}
            </p>
          </div>
        </div>
        <button
          className="!p-2 z-10 group flex justify-center items-center border border-solid border-black border-opacity-10 !w-10 !h-10 transition-all duration-500 rounded-full hover:bg-black"
          onClick={() => handleChange("inc")}
        >
          <Icons.rightArrow className="group-hover:text-white" />
        </button>
      </div>
      <div className="hidden lg:flex flex-col lg:flex-row w-full max-w-6xl gap-8 px-4">
        {indices.map((index) => (
          <TestimonialCard
            key={index}
            data={{ icon: data[index]?.image, name: data[index]?.author }}
            onClick={() => setIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
