"use client";

import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import { footerLinks } from "@/data/data";
import Link from "next/link";
import { motion } from "framer-motion"; // Correct import

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      className="relative bottom-0 z-40 mx-auto flex w-[50%] rounded-2xl bg-white/40 px-2 py-4 pb-3 text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6"
    >
      <div className="flex flex-1 items-center justify-start">
        © 2024 Paste
      </div>

      <div className="flex flex-1 justify-end space-x-4 text-xl">
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <ButtonFlip className="text-xl" title={link.name} border={false} />
          </Link>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
