import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center max-w-7xl mx-auto p-5 text-primary"
    >
      <div>
        <p>logo</p>
      </div>
      <div className="flex gap-4 text-2xl items-center justify-center">
        <a
          href="https://www.linkedin.com/in/paulobordignon/"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/paulobordignon"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          className="text-3xl"
          href="mailto:phbordignon@outlook.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <MdEmail />
        </a>
      </div>
    </motion.header>
  );
}
