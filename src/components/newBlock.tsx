"use client";

import { useState } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import SelectLang from "./ui/SelectLang";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [lang, setLang] = useState<string>("text");

  return (
    <main className="flex h-screen flex-col">
      <div className="flex h-full max-h-96 flex-col sm:max-h-full">
        <SelectLang
          className="hidden h-full w-60 rounded-md px-4 text-sm text-zinc-600 sm:inline-flex"
          lang={lang}
          onChange={(e) => setLang(e.target.value)}
        />
        <MonacoEditor
          height="100%"
          language={lang}
          theme="vs-dark"
          value={content}
          onChange={(value) => setContent(value || "")}
          options={{
            minimap: { enabled: false },
          }}
        />
      </div>
    </main>
  );
}
