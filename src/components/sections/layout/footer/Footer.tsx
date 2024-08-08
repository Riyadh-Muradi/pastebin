"use client";

import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import { footerLinks } from "@/config/footer";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
      className="sm:mx-auto sm:w-[80%] w-full overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2"
    >
      <div className="relative z-40 flex flex-col rounded-2xl bg-white/40 px-4 py-6 text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6">
        <div className="flex flex-col justify-between gap-8 p-4 lg:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="self-center whitespace-nowrap text-3xl">
                <ButtonFlip title="Paste" border={false} />
              </span>
            </Link>
            <p className="max-w-sm text-gray-500">
              Paste is a simple and easy-to-use text sharing platform. Paste
              your code, notes, and snippets and share it with others.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {footerLinks.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-4 text-sm uppercase tracking-tighter text-gray-900">
                  {nav.label}
                </h2>
                <ul className="space-y-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex cursor-pointer text-sm text-gray-400"
                      >
                        <ButtonFlip title={item.name} border={false} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 px-4 py-4 lg:flex-row">
          <span className="text-center text-sm text-gray-500">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Paste
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
