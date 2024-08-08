import { pricingPlans } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"M" | "A">("M");

  const Heading = () => (
    <div className="relative z-10 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="inline-block rounded-full bg-gray-100 px-2 py-[0.20rem] text-xs font-medium uppercase text-black">
          Pricing
        </div>
        <p className="text-center text-xl font-medium tracking-tight text-black sm:text-3xl sm:font-bold">
          Fair pricing, unfair advantage.
        </p>
        <p className="max-w-xl text-center text-sm text-gray-500 sm:text-lg">
          Get started with Acme today and take your business to the next level.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle("M")}
          className={cn(
            `rounded-2xl px-4 py-2 text-sm font-medium`,
            billingCycle === "M"
              ? "bg-gray-100"
              : "text-black hover:bg-gray-200",
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("A")}
          className={cn(
            `rounded-2xl px-4 py-2 text-sm font-medium`,
            billingCycle === "A"
              ? "bg-gray-100"
              : "text-black hover:bg-gray-200",
          )}
        >
          Annual
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex w-full max-w-full flex-col gap-8 lg:flex-row lg:gap-4">
      {pricingPlans.map((plan, index) => (
        <div key={index} className="w-full rounded-2xl p-4 text-left lg:p-6">
          <p className="mb-1 mt-0 text-sm font-medium uppercase text-black">
            {plan.name}
          </p>
          <p className="mb-6 text-sm text-gray-500">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === "M" ? "monthly" : "annual"}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-3xl font-semibold text-gray-900"
              >
                <span>
                  ${billingCycle === "M" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === "M" ? "month" : "year"}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link);
              }}
              className="mt-8 w-full rounded-2xl bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200"
            >
              Get Started
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check className="text-black" size={18} />
              <span className="text-sm text-gray-500">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2"
    >
      <div className="relative flex flex-col rounded-2xl bg-white/40 px-4 py-4 text-2xl shadow-sm sm:px-6 sm:py-6 md:px-8 md:py-8">
        <Heading />
        <PricingCards />
      </div>
    </motion.section>
  );
};

export default function PricingPage() {
  return <Pricing />;
}
