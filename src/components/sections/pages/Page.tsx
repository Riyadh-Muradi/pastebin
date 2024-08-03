import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      className="flex h-[100vh] w-full items-center justify-center text-center text-7xl"
    >
      Page
    </motion.div>
  );
};

export default Page;
