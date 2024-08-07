import { useState } from "react";
import { codeblockProps } from "../types";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import ButtonFlip from "./ui/buttons/variants/ButtonFlip";

const PasteBlock: React.FC<codeblockProps> = ({ className = "" }) => {
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState("text");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center rounded-2xl bg-white/40 p-4">
        <div className="w-full rounded-2xl bg-white/80 px-4 py-2 text-xl text-black hover:bg-gray-100">
          <div className="flex flex-row items-center justify-center gap-12 text-center">
            <ButtonFlip title="View raw" border={false} />
            <ButtonFlip title="Copy to clipboard" border={false} />
            <ButtonFlip title="Download" border={false} />
            <ButtonFlip title="Edit" border={false} />
          </div>
        </div>
      </div>
      <div className={`flex overflow-hidden rounded-2xl ${className}`}>
        <MonacoEditor
          height="100%"
          language={type}
          theme="vs-dark"
          value={content}
          onChange={(value) => setContent(value || "")}
          options={{
            minimap: { enabled: false },
            readOnly: true,
          }}
        />
      </div>
    </div>
  );
};

export default PasteBlock;
