import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import CustomToaster from "@/components/ui/CustomToaster";

export const metadata: Metadata = {
  title: "INFINITE GROUP",
  description: "Infinite Group of Companies",
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${plusJakartaSans.variable}`}>
        <CustomToaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
