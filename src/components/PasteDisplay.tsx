import React from "react";

interface PasteDisplayProps {
  text: string;
}

const PasteDisplay: React.FC<PasteDisplayProps> = ({ text }) => {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
};

export default PasteDisplay;
