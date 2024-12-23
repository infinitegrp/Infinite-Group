"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface CustomButtonProps {
  type: "primary" | "secondary";
  direction?: "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";
  children: React.ReactNode;
  pointer?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  pointer = true,
  direction = "E",
  href,
  onClick,
  disabled = false,
  children,
}) => {
  const angleMap: Record<
    NonNullable<CustomButtonProps["direction"]>,
    string
  > = {
    N: "-rotate-90", // North
    S: "rotate-90", // South
    E: "rotate-0", // East
    W: "rotate-180", // West
    NE: "-rotate-45", // Northeast
    NW: "-rotate-135", // Northwest
    SE: "rotate-45", // Southeast
    SW: "rotate-135", // Southwest
  };

  const angle = angleMap[direction];
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e);
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex w-fit h-fit items-center rounded-full text-primary100 ${
        type === "primary"
          ? "bg-gradient-to-r from-primary100 via-primary300 to-primary200"
          : "bg-gradient-to-r from-[#D4B449] via-[#F1DB91] to-[#B99C3C] drop-shadow-2xl"
      } ${pointer ? "p-2" : "px-3 py-2"}`}
      disabled={disabled}
    >
      <p
        className={`font-bricolage font-bold ${
          type === "secondary"
            ? pointer
              ? "pr-1 pl-8"
              : "px-8"
            : pointer
            ? "text-white px-4"
            : "text-white px-4 font-thin"
        }`}
      >
        {children}
      </p>
      {pointer && (
        <span
          className={`
            rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold
            ${type === "primary" ? "bg-white" : ""}
            transform ${angle}
          `}
        >
          →
        </span>
      )}
    </button>
  );
};

export default CustomButton;
