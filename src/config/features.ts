import { featuresProps, pricingProps } from "../types";

export const navbarLinks = [
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#projects" },
];

export const footerLinks = [
  {
    label: "Product",
    items: [
      {
        name: "About",
        href: "#about",
      },
      {
        name: "FAQ",
        href: "#faq",
      },
      {
        name: "Pricing",
        href: "#pricing",
      },
      {
        name: "Docs",
        href: "#docs",
      },
    ],
  },

  {
    label: "Community",
    items: [
      {
        href: "/",
        name: "Discord",
      },
      {
        href: "/",
        name: "Twitter",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/terms",
        name: "Terms",
      },

      {
        href: "/privacy",
        name: "Privacy",
      },
    ],
  },
];

export const accordionItems = [
  {
    title: "What is Pastegg?",
    content:
      "Pastegg is a web-based platform where users can store and share plain text, code snippets, and other textual content. It's widely used for sharing code, debugging logs, and other types of data that need to be accessible online for collaboration or archiving purposes.",
  },
  {
    title: "How do I create a new paste?",
    content:
      "To create a new paste, click the 'New Paste' button on the homepage. Enter your text or code in the provided text box, choose any relevant settings like syntax highlighting, expiration time, and visibility, then click 'Create Paste.' You'll receive a unique URL to share your paste with others.",
  },
  {
    title: "Can I make my paste private?",
    content:
      "Yes, you can set your paste to 'Private' or 'Unlisted' when creating it. A private paste is only accessible by you when logged into your account, while an unlisted paste is only accessible by those with the direct link.",
  },
  {
    title: "How long will my paste be available?",
    content:
      "You can set the expiration time for your paste when creating it. Options include 10 minutes, 1 hour, 1 day, 1 week, 1 month, or 'Never' for indefinite storage. If no expiration time is selected, the default option will apply.",
  },
];

export const Features: featuresProps[] = [
  {
    id: 1,
    name: "syntaxUI",
    description: "Ready-to-use UI elements designed for rapid development.",
    image: "",
  },
  {
    id: 2,
    name: "yntax highlighting",
    description:
      "Automatic syntax highlighting for over 50 programming languages, making your code easier to read and share.",
    image: "",
  },
  {
    id: 3,
    name: "Private pastes",
    description:
      "Keep your sensitive information secure by creating private pastes that only you or those with a link can view.",
    image: "",
  },
  {
    id: 4,
    name: "Custom paste expiration",
    description:
      "Set custom expiration times for your pastes, from 1 hour to 1 year, or keep them indefinitely.",
    image: "",
  },
  {
    id: 5,
    name: "Password-protected pastes",
    description:
      "Add an extra layer of security by protecting your pastes with a password, ensuring only authorized users can view them.",
    image: "",
  },
  {
    id: 6,
    name: "API Access",
    description:
      "Integrate Pastebin functionality into your applications with our easy-to-use API, perfect for developers.",
    image: "",
  },
];

export const pricingPlans: pricingProps[] = [
  {
    name: "Free",
    description: "Basic plan for casual users to share and store text online.",
    monthlyPrice: 0,
    annualPrice: 0,
    link: "https://your-pastebin-service-link.com/free",
    features: [
      "Unlimited public pastes",
      "Syntax highlighting for 10 languages",
      "Basic paste management (edit, delete)",
      "1-day paste expiration options",
      "Public and unlisted pastes",
    ],
  },
  {
    name: "Pro",
    description: "Enhanced features for developers and frequent users.",
    monthlyPrice: 9,
    annualPrice: 7,
    link: "https://your-pastebin-service-link.com/pro",
    features: [
      "Everything in Free plan",
      "Unlimited private pastes",
      "Syntax highlighting for 50+ languages",
      "No ads",
      "Custom paste expiration times (up to 1 year)",
      "Password-protected pastes",
      "Access to API for automated pasting",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Full customization and dedicated infrastructure for large organizations.",
    monthlyPrice: 99,
    annualPrice: 79,
    link: "https://your-pastebin-service-link.com/enterprise",
    features: [
      "Everything in Team plan",
      "Unlimited team members",
      "Custom retention policies",
      "Advanced security features (SSO, encryption)",
      "Dedicated servers and resources",
      "24/7 premium support",
      "Onboarding and training",
      "SLA with guaranteed uptime",
    ],
  },
];
