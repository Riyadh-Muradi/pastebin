"use client";

import ButtonFlip from "@/components/ButtonFlip";
import { navigationLinks } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarNew = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      className="z-50 flex w-full items-center justify-between gap-3 rounded-2xl bg-white/40 px-2 py-4 text-center shadow-sm sm:px-6 md:px-4 lg:px-6"
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

export default NavbarNew;
