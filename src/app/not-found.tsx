"use client";
import ButtonFlip from "@/components/ui/buttons/variants/ButtonFlip";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2">
      <div className="relative flex flex-col rounded-2xl bg-white/40 px-[3rem] py-[1rem] text-center text-9xl shadow-sm sm:px-6 md:px-4 lg:px-6">
        <div className="text-center">
          <h1 className="text-[175px]">404</h1>
          <p className="mb-4 text-2xl">
            Oops - The page youre looking for doesnt exist.
          </p>
        </div>
        <Link
          className="inline-flex items-center justify-center rounded-2xl py-2"
          href={"/"}
        >
          <ButtonFlip className="text-3xl" title="Go Home" border={false} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
