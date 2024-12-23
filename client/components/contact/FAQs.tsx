"use client";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { faqsData } from "@/data/faqsData";

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-8 lg:gap-12 items-center p-4 md:p-8 lg:p-16">
      <div className="flex flex-col gap-4 items-center">
        <CustomButton type="primary" pointer={false}>
          FREQUENTLY ASKED QUESTIONS
        </CustomButton>

        <p className="flex flex-col items-center text-3xl lg:text-5xl font-bricolage font-bold bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
          <span>Got Questions ?</span>
          <span>We&apos;ve Got Answers !</span>
        </p>
        <p className="text-3xl lg:text-5xl font-bricolage font-bold bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text"></p>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {faqsData.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
              activeIndex === index &&
              "bg-gradient-to-r from-primary100 via-primary200 to-primary100"
            }`}
          >
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 ${
                  index === activeIndex ? "text-white" : "hover:bg-gray-100"
                } gap-3`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transform transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              className={`overflow-hidden transition-max-height duration-200 ease-in-out ${
                activeIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-8 text-white">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
