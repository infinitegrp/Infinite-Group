import React, { FC, useState } from "react";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import QuickApplyForm from "./QuickApplyForm";
import { JobData } from "@/utils/interface";

interface JobCardProps {
  isVisible: boolean;
  data: JobData;
  onClose: () => void;
}

const JobCard: FC<JobCardProps> = ({ isVisible, data, onClose }) => {
  if (!isVisible) return null;

  const [copied, setCopied] = useState<string | null>(null);
  const [quickApplyForm, setForm] = useState<boolean>(false);

  const handleShare = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    if (navigator.share) {
      navigator
        .share({
          title: "Apply today & connect with your future!",
          text: "Discover this opportunity at Infinite Group.",
          url: `https://infinite-grp.com/careers?job_id=${data?._id}`,
        })
        .catch((err) => console.error("Error sharing: ", err));
    } else {
      console.error("Share API not supported in this browser.");
    }
  };

  const handleCopy = () => {
    const url = `https://infinite-grp.com/careers?job_id=${data?._id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(url);
        setTimeout(() => setCopied(null), 3000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-opacity-50 bg-black"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative p-4 w-full max-w-4xl">
        <div className="relative bg-white rounded-lg shadow max-h-[80vh] overflow-y-scroll">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={onClose}
          >
            <Icons.close />
          </button>
          <button
            type="button"
            className="absolute top-3 left-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ms-auto inline-flex justify-center items-center"
            onClick={() => (quickApplyForm ? setForm(false) : onClose())}
          >
            <Icons.leftArrow /> back
          </button>
          <div className="flex flex-col gap-4 p-8 pt-12 items-start bg-gradient-to-r from-violet-100 via-violet-200 to-white">
            {!!quickApplyForm && (
              <h3 className="text-base md:text-lg text-stone-500">
                Quick Apply Form
              </h3>
            )}
            <h3 className="text-2xl md:text-3xl font-bold">{data?.title}</h3>
            <div className="flex gap-4">
              <p className="flex gap-2 items-center max-w-3xl text-sm md:text-base text-stone-500">
                <Icons.location />
                {data?.location}
              </p>
              <p className="flex gap-2 items-center max-w-3xl text-sm md:text-base text-stone-500">
                <Icons.breifcase />
                {data?.type}
              </p>
            </div>
            <p className="flex gap-2 items-center max-w-3xl text-xs md:text-sm text-stone-500">
              <Icons.wallet />
              {data?.pay}
            </p>
            {!quickApplyForm && (
              <CustomButton type="primary" onClick={() => setForm(true)}>
                Apply Now
              </CustomButton>
            )}
            <div className="flex gap-4 text-sm md:text-base text-stone-500">
              <p
                className="flex gap-2 items-center cursor-pointer"
                onClick={handleCopy}
              >
                <Icons.copy /> {copied ? "Copied!" : "Copy link"}
              </p>
              <p
                className="flex gap-2 items-center cursor-pointer"
                onClick={handleShare}
              >
                <Icons.share /> Share link
              </p>
            </div>
          </div>
          {quickApplyForm ? (
            <QuickApplyForm props={data} />
          ) : (
            <div className="p-4 md:p-8 flex flex-col gap-5">
              <h3 className="text-lg font-bold">Job Summary</h3>
              <p className="text-sm text-gray-500">{data?.summary}</p>
              {!!data?.dutiesAndResponsibilities?.length && (
                <>
                  <h3 className="text-lg font-bold">
                    Responsiblilities & Duties
                  </h3>
                  <ul className="text-sm text-gray-500">
                    {data?.dutiesAndResponsibilities?.map((item, idx) => (
                      <li key={idx}>* {item}</li>
                    ))}
                  </ul>
                </>
              )}
              {!!data?.jobRequirements?.length && (
                <>
                  <h3 className="text-lg font-bold">Job Requirements</h3>
                  <ul className="text-sm text-gray-500">
                    {data?.jobRequirements?.map((item, idx) => (
                      <li key={idx}>* {item}</li>
                    ))}
                  </ul>
                </>
              )}
              {!!data?.workingConditions?.length && (
                <>
                  <h3 className="text-lg font-bold">Working Conditions</h3>
                  <ul className="text-sm text-gray-500">
                    {data?.workingConditions?.map((item, idx) => (
                      <li key={idx}>* {item}</li>
                    ))}
                  </ul>
                </>
              )}
              <h3 className="text-lg font-bold">
                Apply Today & Connect with your Future!
              </h3>
              <p className="text-sm text-gray-500">
                Infinite Group of companies provides Equal Opportunity Employer
                (Minorities/Female/Disabled/Veterans).
              </p>
              <CustomButton type="primary" onClick={() => setForm(true)}>
                Apply Now
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
