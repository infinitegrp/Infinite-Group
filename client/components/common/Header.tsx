"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";

interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
  dark?: boolean;
}

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/companies", label: "Our Companies" },
  { path: "/career", label: "Careers" },
  { path: "/blogs", label: "Blogs" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
];

const CustomLink: React.FC<CustomLinkProps> = ({ path, children, dark }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`
      ${pathname === path && (dark ? "text-black" : "text-stone-300")}
      ${dark ? "hover:text-black" : "hover:text-stone-300"}
      `}
      href={path}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed h-16 top-0 px-4 md:px-8 z-50 font-bricolage bg-white backdrop-blur-lg flex justify-between items-center w-full bg-opacity-65">
      <Link href={"/"} className="flex items-center text-primary100">
        <Image
          src="/assets/secondarylogo.png"
          alt="logo"
          width={48}
          height={56}
          className="w-8 h-14"
        />
        <div className="text-xs flex flex-col justify-center">
          <h1 className="uppercase font-bold">Infinite Group of Companies</h1>
          <p className="text-xs">UAE | QATAR | INDIA | SRI LANKA</p>
        </div>
      </Link>
      <nav className="hidden lg:flex gap-4 font-semibold text-lg text-stone-500">
        {navLinks.slice(0, 5).map(({ path, label }) => (
          <CustomLink key={path} path={path} dark>
            {label}
          </CustomLink>
        ))}
      </nav>
      <div className="hidden lg:flex gap-4 items-center">
        <CustomButton type="primary" pointer={false} href="/contact">
          Contact Us
        </CustomButton>
        <Image
          src="/assets/login.svg"
          width={40}
          height={40}
          alt="login"
          className="w-10 h-10 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <Image
        src="/assets/login.svg"
        width={40}
        height={40}
        alt="menu"
        className="w-10 h-10 lg:hidden cursor-pointer"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="fixed bg-gradient-to-r from-[#0C3E54] to-[#1B89BA] text-white top-0 right-0 w-64 xs:w-72 sm:w-80 md:w-96 lg:w-104 backdrop-blur-lg overflow-hidden rounded-l-2xl p-2 shadow-md">
          <div className="flex justify-between p-8">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <Icons.close />
            </button>
          </div>
          <nav className="relative flex flex-col justify-center pb-20 px-8 gap-3 text-base font-bricolage">
            {navLinks.map(({ path, label }) => (
              <CustomLink key={path} path={path}>
                {label}
              </CustomLink>
            ))}
          </nav>
          <p className="text-xs text-center p-4 text-stone-300">
            © {new Date().getFullYear()}{" "}
            <Link href="/companies" className="hover:underline">
              Infinite Group of Companies
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
