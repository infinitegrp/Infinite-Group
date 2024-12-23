"use client";
import { links } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "./Icons";
import toast from "react-hot-toast";
import { subscribe } from "@/utils/api";

const Footer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const handleSubmit = async () => {
    if (!email) toast.error("Email is required");
    else if (!/\S+@\S+\.\S+/.test(email)) toast.error("Invalid email format");
    else {
      setLoading(true);
      try {
        await subscribe({ email });
        toast.success("Subscribed to newsletter successfully!");
        setEmail("");
      } catch (error: any) {
        toast.error(
          error.message || "Something went wrong. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <footer className="bg-white font-bricolage text-stone-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 lg:w-2/5 px-12 max-w-xl pb-6">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/assets/primarylogo.png"
                alt="Infinite Group Logo"
                width={220}
                height={100}
                className="w-full h-full"
              />
              <span className="self-center whitespace-nowrap text-xs lg:text-sm">
                Mon - Sat : 9.00 AM - 6.00 PM
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap md:flex-nowrap flex-row gap-8 lg:w-3/4 px-4 justify-between md:px-12">
            {links.map((section, idx) => (
              <div key={idx} className="w-2/5 sm:w-1/5">
                <h2 className="mb-4 text-sm font-semibold text-gray-900">
                  {section.title}
                </h2>
                <ul className="font-thin">
                  {section.items.map((item) => (
                    <li key={item.title} className="mb-2">
                      <Link href={item.href} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="w-full sm:w-2/5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">
                Subscribe Newsletter
              </h2>
              <p className="font-thin text-sm pb-4">
                Subscribe to our newsletter to get the latest news and updates.
              </p>
              <div className="flex border border-stone-300 rounded-full text-sm p-1 pl-3 w-full">
                <input
                  placeholder="Enter your email"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none text-sm px-2 w-full"
                />
                <button
                  className="bg-black text-white p-2 rounded-full"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? <Icons.loading /> : <Icons.rightArrow />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Infinite Group of Companies
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4 text-sm text-stone-500">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
