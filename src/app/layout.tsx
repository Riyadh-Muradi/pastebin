import type { Metadata } from "next";
import "../styles/globals.css";

import { Nunito } from "next/font/google";
import { Footer, Navbar } from "@/components/sections";

const Font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={Font.className}>
      <head></head>
      <body className="flex h-full w-full flex-col gap-8 p-4 md:p-8">
        <Navbar />
        {children}
        <Footer />
        <span className="fixed right-0 top-0 z-[-1] h-full w-full">
          <div className="absolute inset-0 top-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        </span>
        {/* <div className="-top-0.49 absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="absolute inset-0 top-full -z-10 h-full w-full rotate-180 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
      </body>
    </html>
  );
}
