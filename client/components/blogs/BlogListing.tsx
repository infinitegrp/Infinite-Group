"use client";
import React, { useEffect, useState } from "react";
import blogData from "@/data/blogData";
import CustomButton from "../ui/CustomButton";
import BlogCard from "./BlogCard";
import { getBlogs } from "@/utils/api";
import toast from "react-hot-toast";
import { Blog } from "@/utils/interface";

const BlogListings: React.FC = () => {
  const [index, setIndex] = useState(3);
  const [data, setData] = useState<Blog[] | []>(blogData);

  const fetchData = async () => {
    try {
      const res = await getBlogs({});
      const data = res?.data?.data || null;
      setData(data);
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleLoad = () => {
    const pos = index + 3;
    if (index < data?.length) {
      setIndex(pos);
    }
  };
  return (
    <div className="p-4 py-8 lg:p-12 flex-col items-center">
      <p className="text-center text-3xl lg:text-5xl p-8 font-bold font-bricolage bg-gradient-to-r from-primary100 via-primary300 to-primary100 text-transparent bg-clip-text">
        Popular Blogs
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data?.slice(0, index)?.map((item, index) => (
          <React.Fragment key={`parent-${index}`}>
            <div key={`card-${index}`} className="col-span-2">
              <BlogCard data={item} />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center items-center pt-8">
        <CustomButton type="primary" direction="S" onClick={handleLoad}>
          VIEW ALL
        </CustomButton>
      </div>
    </div>
  );
};

export default BlogListings;
