"use client";
import { useEffect, useState } from "react";
import { FAQ, Features, Hero, Page, Pricing } from "@/components/sections";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const objUrl =
        "https://s3.eu-north-1.amazonaws.com/pastegg.vercel.app/somepaste.txt";
      const response = await fetch(objUrl);
      const text = await response.text();
      setData(text);
    };

    fetchData();
  }, []);

  return (
    <SmoothScroll>
      <main className="flex h-full w-full flex-1 flex-col items-start justify-center gap-8">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Page />
        {/* <div>
          <h2>Fetched Data:</h2>
          <p>{data || "Loading..."}</p>
        </div> */}
      </main>
    </SmoothScroll>
  );
}
