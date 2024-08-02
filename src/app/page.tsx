"use client";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/pages/Hero";
import Footer from "@/pages/layout/Footer";
import Navbar from "@/pages/layout/Navbar";
import Page from "@/pages/Page";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center">
        <Hero />
        <Page />
      </main>
    </SmoothScroll>
  );
}
