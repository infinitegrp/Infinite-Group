"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import blogData from "@/data/blogData";
import { getBlogs } from "@/utils/api";
import toast from "react-hot-toast";
import { Blog } from "@/utils/interface";

const HeroSection: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Blog | null>(blogData[0]);
  const [imgSrc, setImgSrc] = useState(
    `/${data?.image}` || "/assets/blog-banner.png"
  );

  const handleImageError = () => {
    setImgSrc("/assets/blog-banner.png");
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getBlogs({ banner: true });
      const data = res?.data?.data?.[0] || null;
      setData(data);
      setImgSrc(`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${data?.image}`);
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col justify-end xl:flex-row items-end min-h-screen pt-20">
        <img
          className="absolute object-cover object-center h-full w-full"
          src={imgSrc}
          alt="background cover image"
          onError={handleImageError}
        />
        {loading && (
          <div className="absolute z-1 bg-black w-full h-full flex items-center justify-center text-white">
            loading...
          </div>
        )}
        <div className="absolute bg-opacity-5 z-1 bg-black w-full h-full" />
        <div className="flex bg-gradient-to-t from-black to-transparent flex-col justify-center items-center gap-4 lg:gap-8 w-full p-4 md:py-8 pb-14 z-10 font-bricolage">
          <div className="flex gap-2">
            <button className="backdrop-blur-lg py-2 bg-white bg-opacity-30 rounded-full px-8 text-lg uppercase">
              Blog
            </button>
            <button className="backdrop-blur-lg py-2 bg-white bg-opacity-30 rounded-full px-8 text-lg">
              {data?.updatedAt ? new Date(data.updatedAt).toDateString() : ""}
            </button>
          </div>
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold leading-snug md:leading-tight max-w-7xl text-center text-white">
            {data?.subtitle}
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-4/5 max-w-6xl items-center mx-auto gap-4 lg:gap-8 px-8 pt-8 font-bricolage bg-gradient-to-r from-violet-100 to-blue-100 rounded-3xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg md:text-lg xl:text-2xl font-bold text-center leading-snug md:leading-tight max-w-2xl bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text">
            {data?.title}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-center">
            {data?.description}
          </p>
        </div>
        <div className="flex items-end w-full justify-center ">
          <div className="h-12 w-10 flex-1 bg-white">
            <div className="w-full h-12 bg-gradient-to-r from-violet-100 to-blue-100 rounded-br-2xl" />
          </div>
          <div className="bg-white w-fit text-center flex justify-center px-2 pt-2 rounded-t-3xl">
            <CustomButton
              type="secondary"
              pointer={false}
              href={`blogs/${data?._id}`}
            >
              <span className="font-normal">Read more</span>
            </CustomButton>
          </div>
          <div className="h-12 w-10 flex-1 bg-white">
            <div className="w-full h-12 bg-gradient-to-r from-violet-100 to-blue-100 rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
