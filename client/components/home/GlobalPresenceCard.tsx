import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Icons } from "../common/Icons";

interface GlobalPresenceCardProps {
  data: {
    cover: string;
    title: string;
    subtitle: string;
    helpertext: string;
    href: string;
  };
}

const GlobalPresenceCard: React.FC<GlobalPresenceCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="relative rounded-lg h-[28rem] flex justify-center items-center overflow-hidden group">
      <Image
        src={`/assets/${data.cover}`}
        alt="background cover image"
        fill
        className="absolute object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 flex flex-col justify-between px-12 pt-8 pb-16 opacity-100 group-hover:opacity-0 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="rounded-full uppercase bg-primary300 text-sm text-white px-4 py-1">
          {data.title}
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-2xl text-white uppercase">{data.subtitle}</span>
          <p
            className="text-stone-400 text-sm uppercase"
            dangerouslySetInnerHTML={{
              __html: data.helpertext.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end px-12 pt-8 pb-24 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => router.push(data?.href)}
        >
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-semibold text-white uppercase">
              {data.subtitle}
            </span>
            <p className="text-stone-400 text-sm mt-2 uppercase underline">
              Explore Services
            </p>
          </div>
          <button className="!p-2 flex justify-center items-center !w-10 !h-10 transition-all duration-500 rounded-full bg-white">
            <Icons.rightArrow className="text-primary100 group-hover:text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresenceCard;
