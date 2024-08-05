export interface navbarProps {
  name: string;
  href: string;
}

export interface codeblockProps {
  text: string;
  setText: (text: string) => void;
  className?: string;
  lineNumberClassName?: string;
  textareaClassName?: string;
}

export interface featuresProps {
  id: number;
  name: string;
  description: string;
}

export interface pricingProps {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  link: string;
  features: string[];
}
export interface accordionItemProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export interface accordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

export interface footerProps {
  label: string;
  items: footerItemsProps[];
}

export interface footerItemsProps {
  name: string;
  href: string;
}
