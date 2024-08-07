"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useDrawAnimation } from "@/hooks/useDrawAnimation";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

const Hero = () => {
  const [text, setText] = useState("");

  const draw = useDrawAnimation();

  return (
    <section id="hero" className="relative mx-auto mt-32 w-full text-center">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="-translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="relative whitespace-nowrap text-black">
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-1/3 fill-black"
                  preserveAspectRatio="xMidYMid meet"
                  width="100%"
                  height="100%"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.path
                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203"
                    variants={draw}
                    strokeWidth="6"
                    fill="none"
                    stroke="black"
                  />
                </motion.svg>
                <span className="relative pr-4 text-black">Pastee</span>
              </span>
              code, notes,
              <br className="hidden md:block" /> and snippets.
            </h1>

            <p className="-translate-y-4 text-balance text-lg tracking-tight md:text-xl">
              Paste is a simple and easy-to-use text sharing platform. Paste
              your code,
              <br className="hidden md:block" /> notes, and snippets and share
              it with others.
            </p>

            <Link href={"/new"}>
              <button className="rounded-2xl bg-white/80 px-4 py-2 text-xl text-black hover:bg-gray-100">
                Create a new paste
              </button>
            </Link>
          </>
        }
      >
        <CodeBlock
          text={text}
          setText={setText}
          className="h-[60vh] w-[100%]"
          lineNumberClassName="bg-white/40"
          textareaClassName="bg-gray-200/60"
        />
      </ContainerScroll>
    </section>
  );
};

export default Hero;
