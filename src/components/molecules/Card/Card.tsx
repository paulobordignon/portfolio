import { useCallback, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import { Tag } from "@src/components";
import { ICard } from "./types";

export function Card({ sequence, project }: ICard) {
  const observer = useRef<any>();
  const animation = useAnimation();

  const aboutRef = useCallback(
    (node: HTMLElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animation.start({
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
            },
          });
        } else {
          animation.start({
            x: sequence % 2 ? +20 : -50,
            opacity: 0,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [animation, sequence]
  );

  return (
    <motion.li
      animate={animation}
      ref={aboutRef}
      className="bg-card lg:bg-transparent hover:bg-cardHover rounded-[10px] xs:p-5 flex hover:duration-700 grayscale-[70%] hover:grayscale-0"
    >
      <div
        className={`${
          sequence % 2 ? "order-none" : "order-1"
        } lg:basis-2/5 hidden lg:block`}
      >
        <Image
          className="rounded-[10px]"
          src={`https://cloudflare-ipfs.com/ipfs/${project.image}`}
          alt="project image"
          height={600}
          width={900}
        />
      </div>
      <div className="text-lg mx-5 lg:basis-3/5">
        <div className="flex justify-between">
          <p className="text-primaryText mt-5 text-xl font-medium">
            {project.title}
          </p>
          <div className="flex gap-5 text-secondaryText mt-5">
            {project.website && (
              <a
                aria-label="open website"
                href={project.website}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FaRegShareSquare className="hover:text-primaryHover" />
              </a>
            )}
            {project.github && (
              <a
                aria-label="open github"
                href={project.github}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <BsGithub className="hover:text-primaryHover" />
              </a>
            )}
          </div>
        </div>

        <p className="text-secondaryText mt-3 text-justify">{project.about}</p>
        <div className="text-secondaryText mt-5 flex gap-2 flex-wrap mb-5">
          {Array.from(project.keywords).map((keyword, index) => (
            <Tag key={index} text={keyword} />
          ))}
        </div>
      </div>
    </motion.li>
  );
}
