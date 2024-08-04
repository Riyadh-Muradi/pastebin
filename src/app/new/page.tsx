"use client";
import React, { useState } from "react";
import CodeBlock from "@/components/CodeBlock";

const Page = () => {
  const [text, setText] = useState("");

  return (
    <section id="hero" className="relative mx-auto mt-32 w-[80%] text-center">
      <div className="mx-auto h-full w-full overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2 dark:bg-zinc-900">
        <CodeBlock
          text={text}
          setText={setText}
          className="h-[80vh] w-[100%]"
          lineNumberClassName="bg-white/40"
          textareaClassName="bg-gray-200/60"
        />
      </div>
    </section>
  );
};

export default Page;
