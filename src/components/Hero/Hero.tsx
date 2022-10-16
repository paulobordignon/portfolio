import { motion } from "framer-motion";
import { Button } from "../Button";

export function Hero() {
  return (
    <motion.section
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 text-primaryText h-[100vh] sm:ml-10 px-5 xs:justify-start xs:pt-80 justify-center"
    >
      <p className="text-lg">Hey! I&apos;m</p>
      <p className="text-5xl font-extrabold text-gradient xs:text-6xl">
        Paulo Bordignon
      </p>
      <p className="text-xl text-secondaryText">Full Stack developer.</p>
      <div className="flex flex-col gap-4 xs:mt-8 mt-10 xs:flex-row">
        <Button title="Resume" />
        <Button title="Connect Wallet" />
      </div>
    </motion.section>
  );
}
