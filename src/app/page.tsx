"use client";
import SmoothScroll from "@/components/SmoothScroll";
import BentoGrid from "@/components/pages/BentoGrid";
import FAQ from "@/components/pages/FAQ";
import Hero from "@/components/pages/Hero";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center gap-8">
        <Hero />
        <FAQ />
        <BentoGrid />
        {/* <Page /> */}
      </main>
    </SmoothScroll>
  );
}
