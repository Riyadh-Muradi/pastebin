"use client";
import { Hero, Page } from "@/components/sections";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center gap-8">
        <Hero />

        {/* <FAQ />
        <BentoGrid /> */}
        <Page />
        <Page />
      </main>
    </SmoothScroll>
  );
}
