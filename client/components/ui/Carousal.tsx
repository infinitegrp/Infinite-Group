"use client";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CarousalProps {
  breakpoints?: { sm: number; md: number; lg: number };
  children: React.ReactNode;
}
const Carousel: React.FC<CarousalProps> = ({ breakpoints, children }) => {
  const sm = breakpoints?.sm ?? 1;
  const md = breakpoints?.md ?? 2;
  const lg = breakpoints?.lg ?? 3;
  return (
    <div className="relative w-full">
      <div className="pt-16">
        <Swiper
          loop={true}
          spaceBetween={20}
          navigation
          breakpoints={{
            1026: { slidesPerView: lg, spaceBetween: 30 },
            760: { slidesPerView: md, spaceBetween: 30 },
            576: { slidesPerView: sm, spaceBetween: 0 },
          }}
          modules={[Navigation]}
          className="multiple-slide-carousel"
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
