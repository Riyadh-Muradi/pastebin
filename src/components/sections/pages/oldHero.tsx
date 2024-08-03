"use client";

import ButtonFlip from "@/components/ButtonFlip";
import CodeEditor from "@/components/PasteArea";
import { useDrawAnimation } from "@/lib/hooks/useDrawAnimation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const lineCount = text.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  // Use the custom hook to get the draw animation
  const draw = useDrawAnimation();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      className="flex h-full w-full items-center justify-between"
    >
      {/* Text Content */}
      <div className="flex h-[35vh] max-w-4xl flex-col justify-center space-y-4 rounded-2xl bg-white/40 px-2 py-4 shadow-sm sm:px-6 md:px-4 lg:px-6">
        <h1 className="text-6xl tracking-tight text-black sm:text-7xl">
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
            <span className="relative pr-4 font-bold text-black">Paste</span>
          </span>
          code, notes, and snippets.
        </h1>
        <p className="max-w-2xl text-2xl tracking-tight text-gray-700">
          Paste is a simple and easy-to-use text sharing platform. Paste your
          code, notes, and snippets and share it with others.
        </p>
        <Link href="/new">
          <span className="relative flex justify-start">
            <ButtonFlip
              className="text-3xl"
              title="Create a new paste"
              border={false}
            />
          </span>
        </Link>
      </div>
      {/* Code Editor */}
      <CodeEditor
        text={text}
        setText={setText}
        className="h-[35vh] flex-1"
        lineNumberClassName="bg-white/40"
        textareaClassName="bg-gray-200/60"
      />
    </motion.section>
  );
};

export default Hero;
