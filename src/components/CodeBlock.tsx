import React, { useState, useEffect, useRef } from "react";
import useScrollSync from "@/hooks/useScrollSync";
import { codeblockProps } from "../types";
import Link from "next/link";
import ButtonFlip from "./ui/buttons/variants/ButtonFlip";

const CodeBlock: React.FC<codeblockProps> = ({
  text,
  setText,
  className = "",
  lineNumberClassName = "",
  textareaClassName = "",
}) => {
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);
  const [isPasswordEnabled, setIsPasswordEnabled] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lineCount = text.split("\n").length;
    setLineNumbers(Array.from({ length: lineCount }, (_, i) => i + 1));
  }, [text]);

  useScrollSync(textareaRef, lineNumbersRef);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-2xl bg-white/40 p-4">
        <div className="flex w-full flex-col justify-between gap-y-4">
          <div className="flex w-full justify-between gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Paste name"
              className="w-full bg-transparent p-2 text-base text-gray-500 outline-none"
            />
            <select className="w-1/4 bg-transparent p-2 text-base text-gray-500 outline-none">
              <option value="never">Never Expire</option>
              <option value="1hour">1 Hour</option>
              <option value="1day">1 Day</option>
            </select>
          </div>
          <div className="flex w-full justify-between gap-x-4">
            {/* Description */}
            <input
              type="text"
              placeholder="Paste description"
              className="w-full bg-transparent p-2 text-base text-gray-500 outline-none"
            />
            <select className="w-1/4 bg-transparent p-2 text-base text-gray-500 outline-none">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="flex w-full justify-between gap-x-4">
            {/* Password */}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isPasswordEnabled}
              className={`w-full bg-transparent p-2 text-base text-gray-500 outline-none ${
                !isPasswordEnabled ? "cursor-not-allowed opacity-50" : ""
              }`}
            />
            <input
              type="checkbox"
              checked={isPasswordEnabled}
              onChange={() => setIsPasswordEnabled(!isPasswordEnabled)}
              className="scale-150"
            />
          </div>
        </div>
      </div>

      <div className={`flex overflow-hidden rounded-2xl ${className}`}>
        {/* Line Numbers */}
        <div
          ref={lineNumbersRef}
          className={`flex flex-col items-end overflow-auto rounded-l-2xl bg-white/40 bg-opacity-10 p-1 px-2 py-4 pl-6 text-sm text-gray-500 shadow-sm ${lineNumberClassName}`}
        >
          {lineNumbers.map((number) => (
            <span key={number} className="mt-[2px] text-sm leading-[0.9]">
              {number}
            </span>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full resize-none bg-gray-100/40 bg-opacity-10 p-1 px-2 py-4 text-base leading-[0.9] text-gray-500 shadow-sm outline-none ${textareaClassName}`}
        ></textarea>
      </div>
      <div className="mb-2 flex items-center justify-between rounded-2xl bg-white/40 p-4">
        {/* Language Dropdown */}
        <select className="rounded-2xl bg-gray-100/40 bg-opacity-10 p-2 px-4 text-sm text-gray-500 focus:outline-none">
          <option value="TSX">TSX</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JSON">JSON</option>
        </select>

        {/* Copy and Download Buttons */}
        <Link href={"/new"} className="flex gap-4">
          <button className="rounded-2xl bg-white/80 px-4 py-2 text-xl text-black hover:bg-gray-100">
            <ButtonFlip title="Create a new paste" border={false} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CodeBlock;
