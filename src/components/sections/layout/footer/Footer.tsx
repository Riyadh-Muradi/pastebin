"use client";

import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import { footerLinks } from "@/config/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2">
      <div className="relative z-40 flex flex-col rounded-2xl bg-white/40 px-4 py-6 text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8 p-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
    </footer>
  );
};

export default Footer;
