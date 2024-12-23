"use client";
import React from "react";
import CustomButton from "../ui/CustomButton";
import Link from "next/link";

const CustomJob: React.FC = () => {
  return (
    <div className="p-4 md:p-12 border-b-2">
      <div className="flex flex-col w-fit mx-auto gap-4 lg:gap-8 p-8 font-bricolage bg-violet-50 rounded-2xl">
        <h1 className="text-sm md:text-lg xl:text-xl font-bold leading-snug md:leading-tight max-w-2xl bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
          Can't find the perfect fit?
        </h1>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight max-w-2xl bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
          Send us your CV and a short motivation letter.
        </h1>
        <p className="max-w-lg text-sm md:text-base">
          Send your CV and a short motivational letter to
          <Link
            target="_blank"
            className="text-blue-600"
            href={"mailto:career@infinite-grp.com"}
          >
            {" "}
            career@infinite-grp.com{" "}
          </Link>
          with the name of the position you are applying for in the subject of
          the email.
        </p>
        <CustomButton
          type="secondary"
          pointer={false}
          href={"mailto:career@infinite-grp.com"}
        >
          <span className="font-semibold">Let&apos;s make it happen!</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default CustomJob;
