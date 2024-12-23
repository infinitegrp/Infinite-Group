import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blogs | Infinite Group",
  description: "Innovating Across Borders | Infinite Group of Companies",
};

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Suspense>{children}</Suspense>
    </main>
  );
};

export default page;
