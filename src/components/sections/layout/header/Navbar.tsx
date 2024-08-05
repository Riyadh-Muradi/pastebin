"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import Link from "next/link";
import { navbarLinks } from "@/config/Navbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      width: scrolled ? "80%" : "85%",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [scrolled, controls]);

  return (
    <motion.nav
      className="sticky top-4 z-50 mx-auto overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2"
      animate={controls}
    >
      <div className="flex items-center justify-between rounded-2xl bg-white/40 px-[3rem] py-[1rem] text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6">
        <Link href={"./"} className="text-3xl">
          <ButtonFlip title="Paste" border={false} />
        </Link>
        <div className="flex items-center justify-center gap-3 text-xl">
          {navbarLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <ButtonFlip title={link.name} border={false} />
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
