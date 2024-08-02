"use client";
import SmoothScroll from "@/components/SmoothScroll";
import BentoGrid from "@/pages/BentoGrid";
import FAQ from "@/pages/FAQ";
import Hero from "@/pages/Hero";
import Footer from "@/pages/layout/Footer";
import Navbar from "@/pages/layout/Navbar";
import Page from "@/pages/Page";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center gap-8">
        <Hero />
        <FAQ />
        <BentoGrid />
        <Page />
      </main>
    </SmoothScroll>
  );
}
