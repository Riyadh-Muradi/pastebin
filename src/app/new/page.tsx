"use client";
import React, { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import SmoothScroll from "@/components/SmoothScroll";

const Page = () => {
  const [text, setText] = useState("");

  return (
    <>
      <SmoothScroll>
        <div className="mx-auto w-[80%]">
          <CodeBlock
            text={text}
            setText={setText}
            className="h-[80vh] w-[100%]"
            lineNumberClassName="bg-white/40"
            textareaClassName="bg-gray-200/60"
          />
        </div>
      </SmoothScroll>
    </>
  );
};

export default Page;
