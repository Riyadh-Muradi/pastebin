import React, { useState, useEffect, useRef } from "react";

interface CodeEditorProps {
  text: string;
  setText: (text: string) => void;
  className?: string; // Optional custom class names for the outer container
  lineNumberClassName?: string; // Optional custom class names for the line numbers
  textareaClassName?: string; // Optional custom class names for the textarea
}

const CodeEditor = ({
  text,
  setText,
  className = "",
  lineNumberClassName = "",
  textareaClassName = "",
}: CodeEditorProps) => {
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lineCount = text.split("\n").length;
    setLineNumbers(Array.from({ length: lineCount }, (_, i) => i + 1));
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
    <div className={`flex overflow-hidden rounded-2xl ${className}`}>
      {/* Line Numbers */}
      <div
        ref={lineNumbersRef}
        className={`flex flex-col items-end overflow-auto rounded-l-2xl bg-white/40 p-1 px-2 py-4 pl-6 text-sm text-gray-500 shadow-sm ${lineNumberClassName}`}
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
        className={`w-full resize-none bg-gray-100/80 p-1 px-2 py-4 text-base leading-[0.9] text-black shadow-sm outline-none ${textareaClassName}`}
        placeholder="Paste your code here..."
      ></textarea>
    </div>
  );
};

export default CodeEditor;
