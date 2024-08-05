import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { accordionItemProps, accordionProps } from "../../../types";
import { accordionItems } from "@/config/accordion";

const AccordionItem: React.FC<accordionItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const cardVariants: Variants = {
    collapsed: {
      height: "55px",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      className={`my-4 h-full w-full cursor-pointer select-none overflow-hidden`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-black">
        <h2 className="m-0 text-sm">{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <p className="m-0 text-sm text-gray-500">{content}</p>
      </motion.div>
    </motion.div>
  );
};

const Accordion: React.FC<accordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2">
      <div className="relative flex flex-col rounded-2xl bg-white/40 px-[3rem] py-[1rem] text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default FAQ;
