import { useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

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
            <p className="mt-2">
              I&apos;m Paulo Bordignon, Full-Stack Engineer from 🇧🇷, currently
              working remotely in one of the ten biggest Brazilian e-commerce,
              building new projects and integrations with third parties.
            </p>
            <p className="mt-2">
              Since 2015, I&apos;ve worked in various software construction
              cycle positions, with experience automating tests, managing
              projects, and building web and mobile applications.
            </p>
            <p className="mt-2">
              I&apos;ve liked learning new technologies since I was fifteen when
              I started learning HTML/CSS/PHP and doing some experimental
              websites. In my free time, I try to contribute by
              <a
                className="text-primary"
                href="https://medium.com/@paulobordignon"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                {" "}
                writing a few articles{" "}
                <FiExternalLink className="hover:text-primaryHover inline align-baseline" />
              </a>
              , participating in open-source projects, and
              <a
                className="text-primary"
                href="https://stackoverflow.com/users/13830705"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                {" "}
                helping the community{" "}
                <FiExternalLink className="hover:text-primaryHover inline align-baseline" />
              </a>
              .
            </p>
            <p className="mt-5 mb-2">My current technologies:</p>
            <ul className="flex flex-wrap justify-between list-disc marker:text-primary pl-5">
              <li className="basis-full sm:basis-1/2">
                Javascript/Typescript/Solidity
              </li>
              <li className="basis-full sm:basis-1/2">React/Next.js</li>
              <li className="basis-full sm:basis-1/2">Node.js/React Native</li>
              <li className="basis-full sm:basis-1/2">
                Tailwind/Sass/Styled Components
              </li>
              <li className="basis-full sm:basis-1/2">Jest/Cypress</li>
              <li className="basis-full sm:basis-1/2">GraphQL/RESTful/Web3</li>
            </ul>
          </div>
          <div className="self-center">
            <Image
              className="rounded-[10px]"
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
