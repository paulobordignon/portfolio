import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 md:ml-10 px-5 pt-32 xs:px-10"
    >
      <p className="text-2xl text-primaryText mb-10">About</p>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="text-lg text-secondaryText text-justify basis-4/5">
          <p>Hi, I&apos;m Paulo Bordignon a Full Stack developer from 🇧🇷.</p>
          <p>
            I&apos;ve been working in various positions within the software
            construction cycle since 2015. Currently, I work remotely in a
            Brazilian e-commerce, doing new projects and integrations with third
            parties.
          </p>
          <p>
            I like learning new technologies since I was fifteen old when I
            started in this area learning HTML/CSS/PHP.
          </p>
          <p className="mt-5 mb-2">My current technologies:</p>
          <ul className="flex flex-wrap justify-between list-disc marker:text-primary pl-5">
            <li className="basis-full sm:basis-1/2">
              Javascript/Typescript/Solidity
            </li>
            <li className="basis-full sm:basis-1/2">React/NextJs</li>
            <li className="basis-full sm:basis-1/2">NodeJs</li>
            <li className="basis-full sm:basis-1/2">
              Tailwind/Sass/Styled Components
            </li>
            <li className="basis-full sm:basis-1/2">Jest/Cypress</li>
            <li className="basis-full sm:basis-1/2">GraphQL/RESTful/Web3</li>
          </ul>
        </div>
        <div className="self-center">
          <Image
            className="rounded-[10px] scale-95 hover:scale-100 hover:duration-700 grayscale-[70%] hover:grayscale-0"
            src="https://github.com/paulobordignon.png"
            alt="personal photography"
            height={300}
            width={300}
          />
        </div>
      </div>
    </motion.section>
  );
}
