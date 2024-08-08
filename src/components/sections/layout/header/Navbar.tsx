"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import Link from "next/link";
import { navbarLinks } from "@/config/navbar";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      width: scrolled ? "75%" : "80%",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [scrolled, controls]);

  return (
    <motion.nav
      className="sticky top-4 z-50 mx-auto overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2"
      animate={controls}
    >
      <div className="flex items-center justify-between rounded-2xl bg-white/40 px-4 py-2 text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6">
        <Link href={"/"} className="text-3xl">
          <ButtonFlip title="Paste" border={false} />
        </Link>
        <div className="hidden items-center justify-center gap-3 text-xl md:flex">
          {navbarLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <ButtonFlip title={link.name} border={false} />
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-2 flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/40 p-4 text-xl md:hidden">
          {navbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <ButtonFlip title={link.name} border={false} />
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
