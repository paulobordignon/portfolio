import { Card } from "@src/components";
import { motion } from "framer-motion";

export function Projects() {
  const test = [1, 2, 3, 4];
  return (
    <motion.section
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 md:ml-10 px-5 pt-64 xs:px-10"
    >
      <p className="text-2xl text-primaryText mb-10">I have built</p>
      <ul className="flex gap-y-12 flex-wrap">
        {test.map((i) => (
          <Card key={i} sequence={i} />
        ))}
      </ul>
    </motion.section>
  );
}
