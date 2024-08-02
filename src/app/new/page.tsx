"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [text, setText] = useState("");
  const [pasteName, setPasteName] = useState("");
  const [pasteDescription, setPasteDescription] = useState("");
  const [filename, setFilename] = useState("");
  const [expiration, setExpiration] = useState("never");
  const [visibility, setVisibility] = useState("public");

  const lineCount = text.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      className="flex w-full items-center justify-center text-center"
    >
      <div className="flex w-full flex-col items-center justify-center gap-y-4">
        <div className="flex w-full flex-col gap-y-4 rounded-2xl bg-white/40 px-2 py-4 shadow-sm sm:px-6 md:px-4 lg:px-6">
          <p className="mb-4 text-3xl font-bold">Create New Paste</p>

          {/* Name and Expiration Row */}
          <div className="flex justify-between gap-x-4">
            <input
              type="text"
              value={pasteName}
              onChange={(e) => setPasteName(e.target.value)}
              placeholder="Paste Name"
              className="bg-transparent p-1 text-base text-black outline-none"
            />
            <select
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              className="bg-transparent p-1 text-base text-black outline-none"
            >
              <option value="never">Never Expire</option>
              <option value="1hour">1 Hour</option>
              <option value="1day">1 Day</option>
            </select>
          </div>

          {/* Description and Visibility Row */}
          <div className="flex justify-between gap-x-4">
            <input
              type="text"
              value={pasteDescription}
              onChange={(e) => setPasteDescription(e.target.value)}
              placeholder="Paste Description"
              className="bg-transparent p-1 text-base text-black outline-none"
            />
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="bg-transparent p-1 text-base text-black outline-none"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          {/* Filename Input */}
          <div className="flex justify-between gap-x-4">
            <input
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="File extention"
              className="bg-transparent p-1 text-base text-black outline-none"
            />
            <select
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              className="bg-transparent p-1 text-base text-black outline-none"
            >
              <option value="never">Auto</option>
              <option value="1hour">TSX</option>
              <option value="1day">JS</option>
              <option value="1day">Python</option>
            </select>
          </div>
        </div>

        {/* Second Card for Textarea with Line Numbers */}
        <div className="flex h-[43vh] w-full overflow-hidden rounded-2xl">
          <div className="flex flex-col items-end rounded-l-2xl bg-[#F1F2F6] bg-opacity-60 p-1 px-2 py-4 pl-4 text-sm text-gray-500 shadow-sm">
            {lineNumbers.map((number) => (
              <span key={number} className="mt-[2px] text-sm leading-[0.9]">
                {number}
              </span>
            ))}
          </div>
          {/* Textarea */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-none bg-[#E5E7EB] bg-opacity-60 p-1 px-2 py-4 text-base leading-[0.9] text-black shadow-sm outline-none"
            placeholder="Paste your code here..."
          ></textarea>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
