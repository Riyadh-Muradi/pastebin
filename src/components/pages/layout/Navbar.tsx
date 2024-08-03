"use client";

import ButtonFlip from "@/components/ButtonFlip";
import { navigationLinks } from "@/data/data";
import { useMotionValueEvent, motion, useScroll } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 10) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      whileHover={hidden ? "peeking" : "visible"}
      onFocusCapture={hidden ? () => setHidden(false) : undefined}
      variants={
        {
          visible: { y: "0%" },
          hidden: { y: "-100%" },
          peeking: { y: "0%", cursor: "pointer" },
        } as Variants
      }
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full pt-3"
    >
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="flex w-full items-center justify-between gap-3 rounded-2xl bg-white/80 px-2 py-4 text-center shadow-sm sm:px-6 md:px-4 lg:px-6"
      >
        <Link href={"./"} className="text-4xl font-bold">
          <ButtonFlip title="Paste" border={false} />
        </Link>
        <div className="flex items-center justify-center gap-3 p-2 text-xl">
          {navigationLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <ButtonFlip
                className="text-xl"
                title={link.name}
                border={false}
              />
            </Link>
          ))}
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
