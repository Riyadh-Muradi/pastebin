import { features } from "@/components/ui/config/features";
import { motion } from "framer-motion";

const HoverSpring = () => {
  return (
    <section className="mx-auto w-[80%] overflow-hidden rounded-2xl bg-gray-100 bg-opacity-10 p-2">
      <div className="relative flex flex-col rounded-2xl bg-white/40 px-[3rem] py-[1rem] text-2xl shadow-sm sm:px-6 md:px-4 lg:px-6">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          {features.map((feature) => {
            return (
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                }}
                key={feature.id}
                className="text-left"
              >
                <div className="text-sm font-medium text-black">
                  {feature.name}
                </div>
                <div className="w-full text-sm font-normal text-gray-500">
                  {feature.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HoverSpring;
