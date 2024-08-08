/* eslint-disable react/no-unescaped-entities */
"use client";
import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2">
      <div className="relative flex flex-col items-center justify-center rounded-2xl bg-white/40 px-4 py-4 text-center shadow-sm sm:px-6 md:px-4 lg:px-6">
        <div className="text-center">
          <h1 className="text-[120px] sm:text-[150px] md:text-[175px]">404</h1>
          <p className="mb-4 text-xl sm:text-2xl">
            Oops - The page you're looking for doesn't exist.
          </p>
        </div>
        <Link
          className="inline-flex items-center justify-center rounded-2xl py-2"
          href={"/"}
        >
          <ButtonFlip
            className="text-lg sm:text-2xl md:text-3xl"
            title="Go Home"
            border={false}
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
