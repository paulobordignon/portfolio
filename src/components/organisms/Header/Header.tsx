import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import Logo from "../../../../public/logo.png";

export function Header() {
  return (
    <header className={`fixed w-full bg-backgroundHeader z-10`}>
      <nav className="max-w-7xl flex justify-between items-start mx-auto p-5 text-primary">
        <div>
          <Link href={"/"}>
            <Image
              className="cursor-pointer scale-95 hover:scale-100 hover:duration-700"
              src={Logo}
              alt="logo"
              height={25}
              width={25}
              priority={true}
            />
          </Link>
        </div>
        <div className="flex gap-5 text-xl items-center justify-center">
          <a
            aria-label="open linkedin"
            href="https://www.linkedin.com/in/paulobordignon/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <BsLinkedin className="hover:text-primaryHover inline" />
          </a>
          <a
            aria-label="open github"
            href="https://github.com/paulobordignon"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <BsGithub className="hover:text-primaryHover inline" />
          </a>
          <a
            aria-label="send email"
            className="text-2xl"
            href="mailto:phbordignon@outlook.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <MdEmail className="hover:text-primaryHover inline" />
          </a>
        </div>
      </nav>
    </header>
  );
}
