import Image from "next/image";
import React from "react";
import CustomButton from "../ui/CustomButton";
import Link from "next/link";

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
    <div className="relative rounded-lg h-[28rem] flex justify-center items-center overflow-hidden group">
      <Image
        src={`/assets/${data?.cover}`}
        alt="background cover image"
        fill
        className="absolute object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-70 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col justify-between px-4 pt-8 pb-16 opacity-100 group-hover:opacity-0 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="rounded-full uppercase bg-primary300 text-sm text-white px-4 py-1">
          {data?.title}
        </span>
      </div>
      <div className="absolute inset-0 flex flex-col justify-between px-8 pt-8 pb-24 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="rounded-full uppercase text-sm text-white py-1">
          {data?.subtitle}
        </span>
        <div className="flex flex-col gap-4">
          <p className="text-stone-300 text-sm">{data?.description}</p>
          <Link href={data?.href} target="_blank">
            <CustomButton type="secondary" pointer={false}>
              Explore Now
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
