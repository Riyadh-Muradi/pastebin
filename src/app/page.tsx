"use client";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/pages/Hero";
import Page from "@/pages/Page";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex w-full flex-col items-center justify-center pt-[104px]">
        <Hero />
        {/* <Page /> */}
      </main>
    </SmoothScroll>
  );
}
