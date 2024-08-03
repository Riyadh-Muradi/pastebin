"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ButtonFlip from "@/components/ButtonFlip";
import CodeEditor from "@/components/PasteArea";

const Page = () => {
  const [text, setText] = useState("");
  const [pasteName, setPasteName] = useState("");
  const [pasteDescription, setPasteDescription] = useState("");
  const [filename, setFilename] = useState("");
  const [expiration, setExpiration] = useState("never");
  const [visibility, setVisibility] = useState("public");

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
              className="w-full bg-transparent p-2 text-base text-black outline-none"
            />
            <select
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              className="w-1/4 bg-transparent p-2 text-base text-black outline-none"
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
              className="w-full bg-transparent p-2 text-base text-black outline-none"
            />
            <select
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
              className="w-1/4 bg-transparent p-2 text-base text-black outline-none"
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
              placeholder="File extension"
              className="w-full bg-transparent p-2 text-base text-black outline-none"
            />
            <select
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              className="w-1/4 bg-transparent p-2 text-base text-black outline-none"
            >
              <option value="never">Auto</option>
              <option value="tsx">TSX</option>
              <option value="js">JS</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>
        {/* Code Editor */}
        <CodeEditor
          text={text}
          setText={setText}
          className="h-[35vh] w-full"
          lineNumberClassName="bg-white/40"
          textareaClassName="bg-gray-200/60"
        />
        {/* Action Buttons */}
        <div className="mt-4 flex gap-x-4">
          <button disabled>
            <ButtonFlip className="text-3xl" title="Post" border={false} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
