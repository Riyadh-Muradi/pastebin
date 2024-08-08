import { features } from "@/config/features";
import { motion } from "framer-motion";

const HoverSpring = () => {
  return (
    <section className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2 sm:w-[90%] lg:w-[80%]">
      <div className="relative flex flex-col rounded-2xl bg-white/40 p-4 text-lg shadow-sm sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.5,
              }}
              key={feature.id}
              className="rounded-lg p-4 text-center"
            >
              <div className="text-sm font-medium text-black">
                {feature.name}
              </div>
              <div className="text-sm font-normal text-gray-500">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverSpring;
