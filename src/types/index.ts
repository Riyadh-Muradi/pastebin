export interface AccordionItemProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

export interface featuresProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface pricingProps {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  link: string;
  features: string[];
}

export interface CodeBlockProps {
  text: string;
  setText: (text: string) => void;
  className?: string;
  lineNumberClassName?: string;
  textareaClassName?: string;
}