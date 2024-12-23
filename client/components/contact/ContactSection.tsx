import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { Icons } from "../common/Icons";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row py-8 xl:py-12 max-w-7xl mx-auto">
      <div className="relative w-full lg:w-1/3 p-4 xl:p-8 flex flex-col gap-5">
        <div className="relative flex text-white flex-col gap-8 justify-center font-bricolage rounded-xl p-8 overflow-hidden bg-gradient-to-r from-[#0C3E54] to-[#1B89BA] h-full w-full">
          <Image
            className="absolute object-cover rotate-12 h-full w-full bottom-0"
            src="/assets/dot.png"
            alt="background cover image"
            width={500}
            height={500}
          />
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold leading-snug md:leading-tight max-w-2xl">
            Contact Information
          </h1>
          <div className="flex flex-col">
            <h1 className="font-bold text-base lg:text-xl">
              Infinite Group of Companies
            </h1>
            <p className="text-xs lg:text-sm">UAE | QATAR | INDIA | SRI LANKA</p>
          </div>
          <p className="max-w-md text-sm md:text-base text-stone-200">
            Are you ready to take your business to the next level?
          </p>
          <Link
            href={"tel:+971503397437"}
            target="_blank"
            className="flex gap-4 max-w-md text-sm md:text-base z-10"
          >
            <Icons.phone />
            +971 4 216 2570
          </Link>
          <Link
            href={"mailto:info@infinite-grp.com"}
            className="flex gap-4 max-w-md text-sm md:text-base z-10"
          >
            <Icons.email />
            info@infinite-grp.com
          </Link>
          <Link
            href={
              "https://www.google.com/maps/dir//Al+Fajer+Complex+-+105%2F1St+Floor+-+Umm+Hurair+Rd+-+Oud+Metha+-+Dubai+-+United+Arab+Emirates/@25.2446809,55.2299604,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6b27ac30b7ae2bb9:0x20aab1d8b643fd3e!2m2!1d55.3123619!2d25.2447038?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            }
            target="_blank"
            className="flex gap-4 max-w-md text-sm md:text-base z-10"
          >
            <Icons.location className="sm:w-10 sm:h-10" />
            P.O. BOX : 118467,
            <br /> 105-9, 1st Floor Al Fajjer Complex Umm Hurair , Oud Metha ,
            Dubai - UAE
          </Link>
          <div className="flex gap-8 z-10 py-4">
            <Link
              href={"https://www.linkedin.com/company/infinitegrp/"}
              target="_blank"
            >
              <Icons.linkedIn />
            </Link>
            <Link
              href={
                "https://www.facebook.com/profile.php?id=61568257455081&mibextid=ZbWKwL"
              }
              target="_blank"
            >
              <Icons.facebook />
            </Link>
            <Link href={"https://g.co/kgs/CBvAQ6f"} target="_blank">
              <Icons.google />
            </Link>
            <Link
              href={
                "https://www.instagram.com/infinite.group_/?igsh=aWRmbjRxbDJmamg2#"
              }
              target="_blank"
            >
              <Icons.instagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 p-2 xl:p-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
