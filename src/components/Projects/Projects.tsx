import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <motion.section
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 md:ml-10 px-5 pt-56"
    >
      <p className="text-2xl text-primaryText mb-10">
        I have built some projects
      </p>
      <div className="flex"></div>
    </motion.section>
  );
}
