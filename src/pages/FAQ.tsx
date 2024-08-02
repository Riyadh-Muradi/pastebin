import React from "react";
import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "1",
    answer: "1",
    link: "./",
  },
  {
    question: "2",
    answer: "2",
  },
  {
    question: "3",
    answer: "3",
  },
  {
    question: "4",
    answer: "4",
  },
];

const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
      className="flex w-full flex-col rounded-2xl bg-white/40 px-2 py-4 shadow-sm sm:px-6 md:px-4 lg:px-6"
    >
      <h3 className="!mt-0 text-center">Frequently Asked Questions</h3>
      <h4 className="text-center text-muted-foreground">
        If you have any questions, you might find the answer
      </h4>
      <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
        {content.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem
              value={item.question}
              className="rounded-2xl border border-white/40 transition-all"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:w-3/4">
                {item.answer}
                {item.link && (
                  <a
                    href={item.link}
                    className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                  >
                    Learn more <ArrowUpRight className="ml-1" size="16" />
                  </a>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
