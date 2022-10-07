import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 text-primary md:ml-10 px-5 pt-[15vh]"
    >
      <p className="text-lg">Hi, My name is</p>
      <p className="text-6xl font-extrabold">Paulo Bordignon</p>
      <p className="text-lg text-text">I'm a Full Stack developer.</p>
    </motion.div>
  );
}
