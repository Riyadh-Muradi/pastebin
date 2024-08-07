"use client";
import { useParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";
import React, { useState, useEffect } from "react";

const CodeDisplay: React.FC = () => {
  const { slug } = useParams(); // Using next/navigation's useParams
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<string>("typescript");

  useEffect(() => {
    // Fetch the code snippet and language from localStorage using the paste ID (slug)
    const storedCode = localStorage.getItem(`code-${slug}`);
    const storedLanguage = localStorage.getItem(`language-${slug}`);
    if (storedCode) {
      setCode(storedCode);
    }
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [slug]);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Highlighted Code</h1>
      <SyntaxHighlighter language={language} style={coy}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
