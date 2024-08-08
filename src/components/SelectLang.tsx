import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectLangProps {
  className?: string;
  lang: string;
  onChange: (value: string) => void;
}

const SelectLang: React.FC<SelectLangProps> = ({
  className,
  lang,
  onChange,
}) => {
  return (
    <Select onValueChange={onChange} value={lang}>
      <SelectTrigger className={`w-[180px] border-none ${className}`}>
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="text">Plain Text</SelectItem>
          <SelectItem value="typescript">TypeScript</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
          <SelectItem value="less">LESS</SelectItem>
          <SelectItem value="scss">SCSS</SelectItem>
          <SelectItem value="json">JSON</SelectItem>
          <SelectItem value="html">HTML</SelectItem>
          <SelectItem value="xml">XML</SelectItem>
          <SelectItem value="php">PHP</SelectItem>
          <SelectItem value="csharp">C#</SelectItem>
          <SelectItem value="cpp">C++</SelectItem>
          <SelectItem value="razor">Razor</SelectItem>
          <SelectItem value="markdown">Markdown</SelectItem>
          <SelectItem value="diff">Diff</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="vb">VB</SelectItem>
          <SelectItem value="coffeescript">CoffeeScript</SelectItem>
          <SelectItem value="handlebars">Handlebars</SelectItem>
          <SelectItem value="batch">Batch</SelectItem>
          <SelectItem value="pug">Pug</SelectItem>
          <SelectItem value="fsharp">F#</SelectItem>
          <SelectItem value="lua">Lua</SelectItem>
          <SelectItem value="powershell">Powershell</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="ruby">Ruby</SelectItem>
          <SelectItem value="sass">SASS</SelectItem>
          <SelectItem value="r">R</SelectItem>
          <SelectItem value="objectivec">Objective-C</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLang;
