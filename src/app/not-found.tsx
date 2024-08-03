"use client";
import ButtonFlip from "@/components/ButtonFlip";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-center rounded-2xl bg-white/40 px-2 py-4 shadow-sm sm:px-6 md:px-4 lg:px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold tracking-tighter sm:text-9xl">404</h1>
        <p className="text-black">
          Oops - The page youre looking for doesnt exist.
        </p>
      </div>
      <Link
        className="inline-flex items-center justify-center rounded-2xl py-2"
        href={"/"}
      >
        <ButtonFlip
          className="text-3xl"
          title="Go Home"
          borderRadius="8px"
          color="#000"
          border={false}
          textColor=""
        />
      </Link>
    </div>
  );
};

export default NotFound;
