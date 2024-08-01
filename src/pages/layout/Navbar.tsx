"use client";

import ButtonFlip from "@/components/ui/ButtonFlip";
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
    if (Math.abs(difference) > 180) {
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
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex w-[99%] justify-center pt-3"
    >
      <nav className="flex w-full items-center justify-between gap-3 rounded-2xl bg-white p-5 text-center shadow-sm">
        <Link href={"./"} className="text-4xl font-bold">
          <ButtonFlip
            title="Paste"
            borderRadius="8px"
            color="#000"
            border={false}
            textColor={""}
          />
        </Link>
        <div className="flex items-center justify-center gap-3 p-2 text-xl">
          {navigationLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <ButtonFlip
                className="text-xl"
                title={link.name}
                borderRadius="8px"
                color="#000"
                border={false}
                textColor={""}
              />
            </Link>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
