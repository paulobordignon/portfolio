import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import Logo from "../../../public/logo.png";

export function Header() {
  return (
    <header className="flex justify-between items-start max-w-7xl mx-auto p-5 text-primary h-[10vh]">
      <div>
        <p>
          <Image src={Logo} alt="logo" height={25} width={25} />
        </p>
      </div>
      <div className="flex gap-5 text-xl items-center justify-center">
        <a
          href="https://www.linkedin.com/in/paulobordignon/"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsLinkedin className="hover:text-hover" />
        </a>
        <a
          href="https://github.com/paulobordignon"
          target={"_blank"}
          rel="noreferrer"
        >
          <BsGithub className="hover:text-hover" />
        </a>
        <a
          className="text-2xl"
          href="mailto:phbordignon@outlook.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <MdEmail className="hover:text-hover" />
        </a>
      </div>
    </header>
  );
}
