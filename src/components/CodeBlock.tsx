import React, { useState, useEffect, useRef } from "react";
import useScrollSync from "@/hooks/useScrollSync";
import { codeblockProps } from "../types";
import { useRouter } from "next/navigation";
import ButtonFlip from "./ui/buttons/variants/ButtonFlip";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import SelectLang from "./ui/SelectLang";
const CodeBlock: React.FC<codeblockProps> = ({
  text,
  setText,
  className = "",
  lineNumberClassName = "",
  textareaClassName = "",
}) => {
  const [isPasswordEnabled, setIsPasswordEnabled] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const [content, setContent] = useState<string>("");
  const [lang, setLang] = useState<string>("text");

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
      <div className="flex items-center justify-between rounded-2xl bg-white/40 p-4">
        {/* Language Dropdown */}
        <SelectLang
          className="rounded-2xl bg-gray-100/40 bg-opacity-10 p-2 px-4 text-sm text-gray-500 focus:outline-none"
          lang={lang}
          onChange={(e) => setLang(e.target.value)}
        />

        {/* Copy and Download Buttons */}
        <button className="rounded-2xl bg-white/80 px-4 py-2 text-xl text-black hover:bg-gray-100">
          <ButtonFlip title="Create paste" border={false} />
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
