"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import useOnScreen from "@/hooks/useOnScreen";

interface CounterProps {
  count: number;
  children: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ count, children }) => {
  const start = useMotionValue(0);
  const value = useTransform(start, (value) => `${Math.round(value)}+`);
  const { ref, isVisible } = useOnScreen({ threshold: 0.5 });

  useEffect(() => {
    if (isVisible) {
      animate(start, count, { duration: 2 });
    }
  }, [isVisible, start, count]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      <motion.h1 className="font-bold text-2xl md:text-5xl text-primary100 font-bricolage">
        {value}
      </motion.h1>
      <div className="h-2 w-full bg-primary200 opacity-20" />
      <p className="text-xs xl:text-base font-plus_jakarta font-bold uppercase text-center">
        {children}
      </p>
    </div>
  );
};

export default Counter;
