import { useState } from "react";
import { codeblockProps } from "../types";
import { Editor } from "@monaco-editor/react";
import ButtonFlip from "./ui/buttons/variants/ButtonFlip";

const PasteBlock: React.FC<codeblockProps> = ({ className = "" }) => {
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState("text");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center rounded-2xl bg-white/40 p-2 sm:p-4">
        <div className="w-full rounded-2xl bg-white/80 px-2 py-2 text-lg text-black hover:bg-gray-100 sm:px-4 sm:text-xl">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:gap-12">
            <ButtonFlip title="View raw" border={false} />
            <ButtonFlip title="Copy to clipboard" border={false} />
            <ButtonFlip title="Download" border={false} />
            <ButtonFlip title="Edit" border={false} />
          </div>
        </div>
      </div>
      <div className={`flex overflow-hidden rounded-2xl ${className}`}>
        <Editor
          height="100%"
          language={type}
          theme="vs-dark"
          value={content}
          onChange={(value) => setContent(value || "")}
          options={{
            minimap: { enabled: false },
            readOnly: true,
            contextmenu: false,
          }}
        />
      </div>
    </div>
  );
};

export default PasteBlock;
