import React from "react";

interface SelectLangProps {
  className?: string;
  lang: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectLang: React.FC<SelectLangProps> = ({
  className,
  lang,
  onChange,
}) => {
  return (
    <select className={className} value={lang} onChange={onChange}>
      <option value="text">Plain Text</option>
      <option value="typescript">TypeScript</option>
      <option value="javascript">JavaScript</option>
      <option value="css">CSS</option>
      <option value="less">LESS</option>
      <option value="scss">SCSS</option>
      <option value="json">JSON</option>
      <option value="html">HTML</option>
      <option value="xml">XML</option>
      <option value="php">PHP</option>
      <option value="csharp">C#</option>
      <option value="cpp">C++</option>
      <option value="razor">Razor</option>
      <option value="markdown">Markdown</option>
      <option value="diff">Diff</option>
      <option value="java">Java</option>
      <option value="vb">VB</option>
      <option value="coffeescript">CoffeeScript</option>
      <option value="handlebars">Handlebars</option>
      <option value="batch">Batch</option>
      <option value="pug">Pug</option>
      <option value="fsharp">F#</option>
      <option value="lua">Lua</option>
      <option value="powershell">Powershell</option>
      <option value="python">Python</option>
      <option value="ruby">Ruby</option>
      <option value="sass">SASS</option>
      <option value="r">R</option>
      <option value="objectivec">Objective-C</option>
    </select>
  );
};

export default SelectLang;
