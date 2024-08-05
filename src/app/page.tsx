"use client";
import { FAQ, Features, Hero, Page, Pricing } from "@/components/sections";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center gap-8">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Page />
      </main>
    </SmoothScroll>
  );
}
