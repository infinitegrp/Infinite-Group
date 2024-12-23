"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import blogData from "@/data/blogData";
import { Icons } from "@/components/common/Icons";
import { getBlogsById } from "@/utils/api";
import toast from "react-hot-toast";
import { Blog } from "@/utils/interface";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const BlogPage: React.FC<Props> = ({ params }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Blog | null>(blogData[0]);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null
  );

  useEffect(() => {
    params.then((p) => setResolvedParams(p));
  }, [params]);

  const id = resolvedParams?.id;

  const formatDescription = (desc: string | undefined) => {
    return <div dangerouslySetInnerHTML={{ __html: desc || "" }} />;
  };

  const [imgSrc, setImgSrc] = useState(
    `/${data?.image}` || "/assets/blog-banner.png"
  );

  const handleImageError = () => {
    setImgSrc("/assets/blog-banner.png");
  };
  const fetchData = async () => {
    try {
      if (id) {
        const res = await getBlogsById(id);
        const data = res?.data?.data || null;
        console.warn(data);
        setData(data);
        setImgSrc(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${data?.image}`
        );
      }
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <section className="pt-[70px] md:pt-[120px] pb-[50px] md:pb-[100px] bg-[#FEFDFD] flex items-center justify-center font-bricolage">
      <div className="container p-6 md:p-10 w-full">
        <div className="flex gap-1 pb-2">
          <button onClick={() => router.back()}>← Back</button>
          <p className="text-slate-400">/ Blogs</p>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-4 md:mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                {data?.title}
              </h2>
              <div className="mb-4 md:mb-10 flex flex-wrap items-center justify-between border-b border-gray-300 pb-1 md:pb-4">
                <div className="flex flex-wrap items-center">
                  <div className="mr-10 mb-5 flex items-center">
                    <div className="mr-4">
                      <Image
                        src="/assets/secondarylogo.png"
                        alt="logo"
                        width={48}
                        height={56}
                        className="w-10 h-8"
                      />
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-sm md:text-base font-medium text-black">
                        By Infinite Group
                      </h4>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center">
                    <p className="flex items-center text-xs md:text-sm font-medium text-black">
                      <span className="hidden md:flex items-center md:text-sm">
                        posted on&nbsp;
                        <Icons.date />
                      </span>
                      &nbsp;
                      {data?.createdAt
                        ? new Date(data.createdAt).toDateString()
                        : ""}
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="hidden md:flex items-center text-xs md:text-sm font-medium text-black">
                    <span className="mr-3 flex items-center md:text-sm">
                      last updated on&nbsp;
                      <Icons.date />
                    </span>
                    {data?.updatedAt
                      ? new Date(data.updatedAt).toDateString()
                      : ""}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-10 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {data?.subtitle}
                </p>
                <div className="mb-10 w-full overflow-hidden rounded-lg">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44] flex items-center justify-center">
                    <img
                      src={imgSrc}
                      alt="image"
                      onLoad={() => setLoading(false)}
                      onError={handleImageError}
                      width={400}
                      height={100}
                      className={`${
                        loading && "hidden"
                      } object-cover object-center w-full max-h-[500px]`}
                    />
                    {(!data?.image || loading) && (
                      <div
                        role="status"
                        className="flex items-center justify-center w-full h-[50vh] max-h-[500px] mb-4 bg-gray-300 animate-pulse"
                      >
                        <svg
                          className="w-10 h-10 text-gray-200"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-8 text-base font-medium leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {formatDescription(data?.description)}
                </div>
                <Link
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  href={data?.url ?? "https://www.infinite-grp.com"}
                >
                  know more
                </Link>
                <div className="items-center justify-between sm:flex">
                  <div className="mb-5 flex items-center">
                    <h5 className="mb-3 text-sm font-medium text-black sm:text-right">
                      Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.infinite-grp.com/blogs/${data?._id}`}
                        target="_blank"
                        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500 sm:ml-3"
                      >
                        <Icons.linkedIn />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://www.infinite-grp.com/blogs/${data?._id}`}
                        target="_blank"
                        className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
                      >
                        <Icons.facebook />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=https://www.infinite-grp.com/blogs/${data?._id}text=Check%20this%20out`}
                        target="_blank"
                        className="ml-1 mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md  text-black bg-opacity-10 duration-300 hover:bg-opacity-100 hover:text-gray-500"
                      >
                        <Icons.twitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
