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
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectLang: React.FC<SelectLangProps> = ({}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-none">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="text">text</SelectItem>
          <SelectItem value="typescript">jypescript</SelectItem>
          <SelectItem value="javascript">javascript</SelectItem>
          <SelectItem value="css">css</SelectItem>
          <SelectItem value="less">less</SelectItem>
          <SelectItem value="scss">scss</SelectItem>
          <SelectItem value="json">json</SelectItem>
          <SelectItem value="html">html</SelectItem>
          <SelectItem value="xml">xml</SelectItem>
          <SelectItem value="php">php</SelectItem>
          <SelectItem value="csharp">csharp</SelectItem>
          <SelectItem value="cpp">cpp</SelectItem>
          <SelectItem value="razor">razor</SelectItem>
          <SelectItem value="markdown">markdown</SelectItem>
          <SelectItem value="diff">diff</SelectItem>
          <SelectItem value="java">java</SelectItem>
          <SelectItem value="vb">vb</SelectItem>
          <SelectItem value="coffeescript">coffeescript</SelectItem>
          <SelectItem value="handlebars">handlebars</SelectItem>
          <SelectItem value="batch">batch</SelectItem>
          <SelectItem value="pug">pug</SelectItem>
          <SelectItem value="fsharp">fsharp</SelectItem>
          <SelectItem value="lua">lua</SelectItem>
          <SelectItem value="powershell">powershell</SelectItem>
          <SelectItem value="python">python</SelectItem>
          <SelectItem value="ruby">ruby</SelectItem>
          <SelectItem value="sass">sass</SelectItem>
          <SelectItem value="r">r</SelectItem>
          <SelectItem value="objectivec">objectivec</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLang;
