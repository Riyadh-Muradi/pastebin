import { useState } from "react";
import { codeblockProps } from "../types";
import ButtonFlip from "./ui/buttons/variants/ButtonFlip";
import { Editor } from "@monaco-editor/react";
import SelectLang from "./SelectLang";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CodeBlock: React.FC<codeblockProps> = ({ className = "" }) => {
  const [content, setContent] = useState<string>("");
  const [lang, setLang] = useState<string>("text");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-2xl bg-white/40 p-4">
        <div className="flex w-full flex-col justify-between gap-y-4">
          <div className="flex w-full justify-between gap-4">
            {/* Name */}
            <Input
              type="text"
              className="border-none"
              placeholder="Paste name"
            />
            <Select>
              <SelectTrigger className="w-[180px] border-none">
                <SelectValue placeholder="Select expire date" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="never">Never</SelectItem>
                  <SelectItem value="hour">1 Hour</SelectItem>
                  <SelectItem value="day">1 Day</SelectItem>
                  <SelectItem value="week">1 Week</SelectItem>
                  <SelectItem value="month">1 Month</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full justify-between gap-x-4">
            {/* Description */}
            <Input
              type="text"
              className="border-none"
              placeholder="Paste description"
            />
            <Select>
              <SelectTrigger className="w-[180px] border-none">
                <SelectValue placeholder="Select privacy" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full items-center justify-between gap-x-4">
            {/* Password */}
            <Input type="text" className="border-none" placeholder="Password" />
            <Checkbox className="mr-3" />
          </div>
        </div>
      </div>

      <div className={`flex overflow-hidden rounded-2xl ${className}`}>
        <Editor
          height="100%"
          width="100%"
          language={lang}
          theme="atom-one-dark"
          value={content}
          onChange={(value) => setContent(value || "")}
          options={{
            minimap: { enabled: false },
            contextmenu: false,
          }}
        />
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-white/40 p-4">
        {/* Language Dropdown */}
        <SelectLang
          className="rounded-2xl bg-gray-100/40 bg-opacity-10 p-2 px-4 text-sm text-black focus:outline-none"
          lang={lang}
          onChange={(value) => setLang(value)}
        />

        {/* Copy and Download Buttons */}
        <div className="rounded-2xl bg-white/80 px-4 py-2 text-xl text-black hover:bg-gray-100">
          <ButtonFlip title="Create paste" border={false} />
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
