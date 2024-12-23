import Image from "next/image";
import React from "react";
import CustomButton from "../ui/CustomButton";

interface CompanyCardProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cover: string;
    href: string;
  };
}

const CompanyCard: React.FC<CompanyCardProps> = ({ data }) => {
  return (
    <div className="relative h-[36rem] max-w-[28rem] flex flex-col justify-between">
      <div className="relative rounded-2xl h-[28rem] max-w-[28rem] flex justify-center overflow-hidden items-center group">
        <Image
          src={`/assets/${data?.cover}`}
          alt="background cover image"
          fill
          className="absolute object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-40" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end px-8 ">
        <div className="backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col items-center gap-4 p-3 z-10 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <p className="text-xl lg:text-3xl max-w-2xl font-bricolage font-bold text-center text-primary100">
            {data?.title}
          </p>
          <p className="text-xs lg:text-sm text-center">{data?.description}</p>
          <CustomButton type="secondary" direction="NE" href={data?.href}>
            Explore
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
