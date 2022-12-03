import { useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export function About() {
  const observer = useRef<any>();
  const animation = useAnimation();

  const aboutRef = useCallback(
    (node: HTMLElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animation.start({
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
            },
          });
        } else {
          animation.start({
            y: +50,
            opacity: 0,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [animation]
  );

  return (
    <motion.section
      animate={animation}
      className="flex flex-col gap-5 md:ml-10 px-5 pt-32 xs:px-10"
    >
      <div ref={aboutRef}>
        <h3 className="text-2xl text-primaryText mb-10 font-semibold">About</h3>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="text-lg text-secondaryText text-justify basis-4/5">
            <p>Hi, I&apos;m Paulo Bordignon a Full Stack developer from 🇧🇷.</p>
            <p>
              I&apos;ve been working in various positions within the software
              construction cycle since 2015. Currently, I work remotely in a
              Brazilian e-commerce, doing new projects and integrations with
              third parties.
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
              className="rounded-[10px] hover:duration-700 grayscale-[70%] hover:grayscale-0"
              src="https://github.com/paulobordignon.png"
              alt="personal photography"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
