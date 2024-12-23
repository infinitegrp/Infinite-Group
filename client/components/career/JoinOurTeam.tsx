"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton";
import Link from "next/link";
import JobCard from "./JobCard";
import { Icons } from "../common/Icons";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useGetCareers } from "@/utils/query";
import { JobData } from "@/utils/interface";

const JoinOurTeam: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [jobData, setJobData] = useState<JobData[]>([]);
  const [data, setData] = useState<JobData>(jobData?.[0]);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const job_id = searchParams.get("job_id") ?? null;
    if (job_id) {
      const search = jobData?.filter((item) => item?._id === job_id);
      if (search?.length) {
        setData(search?.[0]);
        setShowModel(true);
      }
    }
  }, [searchParams, jobData]);

  const { isLoading, data: res }: { isLoading: any; data: any } = useGetCareers(
    { page: 1, perPage: 10 }
  );

  useEffect(() => {
    setJobData(res?.data);
    setData(res?.data?.[0]);
  }, [res]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 p-8 lg:p-12 xl:p-28">
      <CustomButton type="primary" pointer={false}>
        <span className="font-semibold">Join Our Team</span>
      </CustomButton>
      <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-snug md:leading-tight max-w-2xl bg-gradient-to-r from-primary100 via-primary200 to-primary100 text-transparent bg-clip-text font-bricolage">
        Explore our open positions and apply now
      </h1>
      <p className="max-w-lg text-sm md:text-base text-stone-500 font-bricolage">
        Join Infinite Group of Companies and be part of a team driving
        innovation across diverse industries. Explore exciting career
        opportunities where your talents can thrive and contribute to shaping
        solutions that make a difference globally.
      </p>
      {isLoading
        ? Array(3)
            .fill(3)
            ?.map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col cursor-wait md:flex-row gap-4 justify-between items-center bg-gradient-to-t from-stone-50 to-white min-h-40 p-8 shadow-xl rounded-2xl"
              >
                <div className="flex flex-col gap-2 md:w-2/3">
                  <div className="h-5 lg:h-6 w-4/5 lg:w-1/2 bg-gray-200 animate-pulse" />
                  <div className="flex gap-4 items-center">
                    <Icons.location />
                    <div className="h-3 lg:h-4 w-20 bg-gray-200 animate-pulse" />
                    <Icons.breifcase />
                    <div className="h-3 lg:h-4 w-20 bg-gray-200 animate-pulse" />
                    <div className="h-3 lg:h-4 w-4" />
                  </div>
                  <div className="h-3 lg:h-4 w-full bg-gray-200 animate-pulse" />
                  <div className="h-3 lg:h-4 w-4/5 bg-gray-200 animate-pulse" />
                </div>
                <div className="flex items-center rounded-full bg-gray-200 pl-4 p-1">
                  <p className="px-4 text-gray-400">Apply now</p>
                  <div className="bg-white rounded-full p-3">
                    <Icons.rightArrow />
                  </div>
                </div>
              </div>
            ))
        : jobData?.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gradient-to-t from-stone-50 to-white min-h-40 p-8 shadow-xl rounded-2xl"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-sm lg:text-xl xl:text-2xl font-bold leading-snug md:leading-tight max-w-2xl">
                  {item?.title}
                </h1>
                <div className="flex gap-4">
                  <p className="flex gap-2 items-center max-w-3xl text-sm md:text-base text-stone-500">
                    <Icons.location />
                    {item?.location}
                  </p>
                  <p className="flex gap-2 items-center max-w-3xl text-sm md:text-base text-stone-500">
                    <Icons.breifcase />
                    {item?.type}
                  </p>
                </div>
                <p className="max-w-md lg:max-w-xl xl:max-w-3xl h-auto line-clamp-2 text-sm md:text-base text-stone-500">
                  {item?.summary}
                </p>
              </div>
              <CustomButton
                type="primary"
                onClick={() => {
                  // setData(item);
                  router.push(`/career?job_id=${item?._id}`);
                  setShowModel(true);
                }}
              >
                Apply Now
              </CustomButton>
            </div>
          ))}
      <JobCard
        data={data}
        isVisible={showModel}
        onClose={() => setShowModel(false)}
      />
    </div>
  );
};

export default JoinOurTeam;
