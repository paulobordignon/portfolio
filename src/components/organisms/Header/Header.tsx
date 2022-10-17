import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import Logo from "../../../../public/logo.png";

export function Header() {
  return (
    <header className={`h-[10vh] fixed w-full bg-backgroundHeader z-10`}>
      <nav className="max-w-7xl flex justify-between items-start mx-auto p-5 text-primary">
        <div>
          <Link href={"/"}>
            <Image
              className="cursor-pointer scale-95 hover:scale-100 hover:duration-700"
              src={Logo}
              alt="logo"
              height={25}
              width={25}
            />
          </Link>
        </div>
        <div className="flex gap-5 text-xl items-center justify-center">
          <a
            href="https://www.linkedin.com/in/paulobordignon/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <BsLinkedin className="hover:text-hover" />
          </a>
          <a
            href="https://github.com/paulobordignon"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <BsGithub className="hover:text-hover" />
          </a>
          <a
            className="text-2xl"
            href="mailto:phbordignon@outlook.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <MdEmail className="hover:text-hover" />
          </a>
        </div>
      </nav>
    </header>
  );
}
