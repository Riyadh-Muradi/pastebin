"use client";
import { Hero, Page } from "@/components/sections";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center gap-8">
        <Hero />
        <div className="absolute inset-0 top-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="absolute inset-0 top-full -z-10 h-full w-full rotate-180 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        {/* <FAQ />
        <BentoGrid /> */}
        <Page />
        <Page />
      </main>
    </SmoothScroll>
  );
}
