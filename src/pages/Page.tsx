import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      className="flex h-[100vh] z-20 items-center justify-center text-center text-7xl"
    >
      Page
    </motion.div>
  );
};

export default Page;
