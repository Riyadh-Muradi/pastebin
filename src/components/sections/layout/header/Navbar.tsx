"use client";

import { useEffect, useState } from "react";
import ButtonFlip from "@/components/ButtonFlip";
import { navigationLinks } from "@/data/data";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: isScrolled ? "rgba(255, 255, 255, .5)" : "transparent",
      padding: isScrolled ? "0.5rem 2rem" : "1rem 3rem",
      width: isScrolled ? "50%" : "80%",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [isScrolled, controls]);

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      className="fixed left-0 right-0 top-3 z-50 mx-auto flex items-center justify-between gap-3 rounded-2xl shadow-sm sm:px-6 md:px-4 lg:px-6"
      animate={controls}
    >
      <Link href={"./"} className="text-4xl font-bold">
        <ButtonFlip title="Paste" border={false} />
      </Link>
      <div className="flex items-center justify-center gap-3 p-2 text-xl">
        {navigationLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <ButtonFlip className="text-xl" title={link.name} border={false} />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
