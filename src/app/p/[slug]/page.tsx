"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import useScrollSync from "@/lib/hooks/useScrollSync";

const Page = () => {
  const [text] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  useScrollSync(textareaRef, lineNumbersRef);

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
          <button disabled>
            <ButtonFlip className="text-3xl" title="Download" border={false} />
          </button>
          <button disabled>
            <ButtonFlip className="text-3xl" title="Copy" border={false} />
          </button>
          <button disabled>
            <ButtonFlip className="text-3xl" title="View raw" border={false} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
