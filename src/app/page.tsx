"use client";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/pages/Hero";
import Page from "@/pages/Page";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex w-full flex-col items-center justify-center">
        <Hero />
        <Page />
        <span className="fixed right-0 top-0 z-[-1] h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 800 450"
            opacity="0.52"
          >
            <defs>
              <filter
                id="bbblurry-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="91"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
              <ellipse
                rx="40.5"
                ry="117.5"
                cx="45.886220446496566"
                cy="114.7401404326536"
                fill="hsl(316, 73%, 52%)"
              ></ellipse>
              <ellipse
                rx="40.5"
                ry="117.5"
                cx="709.4002340414356"
                cy="266.2704265058046"
                fill="hsla(185, 100%, 57%, 1.00)"
              ></ellipse>
            </g>
          </svg>
        </span>
      </main>
    </SmoothScroll>
  );
}
