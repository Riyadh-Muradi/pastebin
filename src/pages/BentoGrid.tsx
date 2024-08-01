import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const BentoGrid = () => {
  return (
    <div className="mb-40 mt-4 flex h-[600px] items-center justify-center rounded-lg bg-white px-2 py-4 backdrop-blur-lg backdrop-filter sm:px-6 md:px-4 lg:px-6">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-black p-6",
        className,
      )}
      {...rest}
    />
  );
};

const FirstBlock = () => (
  <Block className="col-span-12 row-span-2 text-3xl md:col-span-6">
    <h1>
      Bento 1
      <span className="ml-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </h1>
  </Block>
);

const SecondBlock = () => (
  <Block className="col-span-12 row-span-2 text-3xl md:col-span-6">
    <h1>
      Bento 1
      <span className="ml-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit.
      </span>
    </h1>
  </Block>
);

const ThirdBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      Bento 3
      <span className="ml-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
      </span>
    </p>
  </Block>
);
