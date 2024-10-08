import { footerProps } from "@/types";

export const footerLinks: footerProps[] = [
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
