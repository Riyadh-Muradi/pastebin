import { pricingProps } from "@/types";

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
