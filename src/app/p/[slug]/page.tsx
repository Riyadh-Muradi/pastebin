/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ButtonFlip from "@/components/ButtonFlip";

const Page = () => {
  const [text, setText] = useState("");
  const [filename, setFilename] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  const handleViewRaw = () => {
    const rawWindow = window.open("", "_blank");
    if (rawWindow) {
      rawWindow.document.write("<pre>" + text + "</pre>");
      rawWindow.document.close();
    }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "code.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(
      () => alert("Copied to clipboard!"),
      (err) => console.error("Failed to copy text: ", err),
    );
  };

  useEffect(() => {
    if (lineNumbersRef.current && textareaRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  }, [text]);

  useEffect(() => {
    const syncScroll = () => {
      if (textareaRef.current && lineNumbersRef.current) {
        lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
      }
    };

    const handleScroll = () => {
      syncScroll();
    };

    if (textareaRef.current) {
      textareaRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      className="flex w-full items-center justify-center text-center"
    >
      <div className="flex w-full flex-col items-center justify-center gap-y-4">
        <div className="flex h-[65vh] w-full overflow-hidden rounded-2xl">
          {/* Line Numbers */}
          <div
            ref={lineNumbersRef}
            className="flex flex-col items-end overflow-auto rounded-l-2xl bg-white/40 p-1 px-2 py-4 pl-6 text-sm text-gray-500 shadow-sm"
          >
            {text.split("\n").map((_, i) => (
              <span key={i} className="mt-[2px] text-sm leading-[0.9]">
                {i + 1}
              </span>
            ))}
          </div>
          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={text}
            readOnly
            className="w-full resize-none bg-gray-100/80 p-1 px-2 py-4 text-base leading-[0.9] text-black shadow-sm outline-none"
            placeholder="Pasted code"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-x-4">
          <button onClick={handleViewRaw}>
            <ButtonFlip
              className="text-3xl"
              title="View Raw"
              borderRadius="8px"
              color="#000"
              border={false}
              textColor=""
            />{" "}
          </button>
          <button onClick={handleDownload}>
            <ButtonFlip
              className="text-3xl"
              title="Download"
              borderRadius="8px"
              color="#000"
              border={false}
              textColor=""
            />
          </button>
          <button onClick={handleCopy}>
            <ButtonFlip
              className="text-3xl"
              title="Copy"
              borderRadius="8px"
              color="#000"
              border={false}
              textColor=""
            />{" "}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
