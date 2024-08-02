"use client";
import ButtonFlip from "@/components/ui/ButtonFlip";
import { footerLinks } from "@/data/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 z-40 flex w-full items-center justify-between rounded-2xl bg-white/80 px-2 py-4 pb-3 text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6">
      <div className="flex flex-1 justify-start font-normal">© 2024 Paste</div>

      <div className="flex flex-1 justify-end space-x-4 text-xl">
        {footerLinks.map((link, index) => (
          <Link key={index} href={link.href}>
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
    </footer>
  );
};

export default Footer;
