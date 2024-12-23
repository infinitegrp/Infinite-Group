import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  data: {
    icon: string;
    name: string;
  };
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data, onClick }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer z-10 gap-4 p-4 lg:p-8 bg-white shadow-2xl w-full lg:w-1/3 rounded-md"
      onClick={onClick}
    >
      <div className="rounded-full h-32 w-32 overflow-hidden">
        <Image
          className="object-cover"
          src={`/assets/${data.icon}`}
          alt={`${data.name}'s profile image`}
          width={500}
          height={500}
        />
      </div>
      <div className="flex border-t-2 w-full p-4 justify-around">
        <p>{data.name}</p>
        {Array.from({ length: 5 }).map((_, idx) => (
          <svg
            key={idx}
            className="w-6 h-6 text-yellow-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
