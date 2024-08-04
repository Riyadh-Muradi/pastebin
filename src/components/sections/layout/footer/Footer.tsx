"use client";

import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import Link from "next/link";
import { motion } from "framer-motion"; // Correct import
import { footerLinks, footerSocials } from "@/data/data";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      className="relative z-40 mx-auto flex w-[50%] rounded-2xl bg-white/40 px-[3rem] py-[1rem] text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6"
    >
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="flex justify-between gap-4 p-4 px-8 py-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="self-center whitespace-nowrap text-2xl">
                <ButtonFlip title="Paste" border={false} />
              </span>
            </Link>
            <p className="max-w-lg">
              Paste is a simple and easy-to-use text sharing platform. Paste
              your code, notes, and snippets and share it with others.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            {footerLinks.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm uppercase tracking-tighter text-gray-900">
                  {nav.label}
                </h2>
                <ul className="grid gap-2">
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

        <div className="flex flex-row items-center justify-between gap-2 px-8 py-4">
          <div className="mt-0 flex justify-center space-x-5 text-sm text-black">
            {footerSocials.map((social) => (
              <Link key={social.name} href={social.href}>
                <ButtonFlip title={social.name} border={false} />
              </Link>
            ))}
          </div>
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
