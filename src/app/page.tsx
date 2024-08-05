"use client";
import { FAQ, Features, Hero, Pricing } from "@/components/sections";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center gap-8">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>
    </SmoothScroll>
  );
}
