import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import logo from "../../../public/images/logo.png";

export const metadata: Metadata = {
  title: "CMSC398T",
  description: "CMSC398T: Beyond Aesthetics: Accessible Frontend Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex pl-[25%] pr-[50%] pt-[17%]">
        <div className="w-max">
          <div className="grid gap-y-12">
            <Link className="w-max" href="/">
              <Image
                className="block hover:animate-custom-pulse w-18 col-start-1 col-end-1 row-start-1 row-end-1"
                src={logo}
                alt="CMSC398T logo"
              />
            </Link>
            <div className="col-start-1 col-end-1 row-start-2 row-end-2 w-64">
              <Navbar />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden h-150 pl-36 pr-36 -mt-24">
          <div className="absolute overflow-y-scroll h-150 -right-6 ]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
