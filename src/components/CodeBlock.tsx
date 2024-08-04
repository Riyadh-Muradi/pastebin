/* eslint-disable react-hooks/exhaustive-deps */
import useScrollSync from "@/lib/hooks/useScrollSync";
import React, { useState, useEffect, useRef } from "react";

interface CodeBlockProps {
  text: string;
  setText: (text: string) => void;
  className?: string;
  lineNumberClassName?: string;
  textareaClassName?: string;
}

const CodeBlock = ({
  text,
  setText,
  className = "",
  lineNumberClassName = "",
  textareaClassName = "",
}: CodeBlockProps) => {
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);
  const [language, setLanguage] = useState<string>("TSX");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lineCount = text.split("\n").length;
    setLineNumbers(Array.from({ length: lineCount }, (_, i) => i + 1));
  }, [text]);

  // Use the custom hook to sync the scroll
  useScrollSync(textareaRef, lineNumbersRef);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between rounded-2xl bg-white/40 p-4">
        {/* Language Dropdown */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-2xl bg-gray-100 p-2 px-4 text-sm text-gray-500 focus:outline-none"
        >
          <option value="TSX">TSX</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JSON">JSON</option>
        </select>

        {/* Copy and Download Buttons */}
        <div className="flex gap-4">
          <button className="text-sm text-gray-500">Copy</button>
          <button className="text-sm text-gray-500">Download</button>
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
          className={`w-full resize-none bg-gray-100/40 bg-opacity-10 p-1 px-2 py-4 text-base leading-[0.9] text-black shadow-sm outline-none ${textareaClassName}`}
        ></textarea>
      </div>
    </div>
  );
};

export default CodeBlock;
