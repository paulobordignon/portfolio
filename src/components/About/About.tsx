import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 md:ml-10 px-5 pt-[10vh] h-[100vh] xs:px-10"
    >
      <p className="text-2xl text-primaryText mb-10">About</p>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="text-lg text-secondaryText text-justify basis-4/5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit
            amet nisl suscipit adipiscing bibendum. Et pharetra pharetra massa
            massa ultricies mi quis hendrerit dolor. Lectus nulla at volutpat
            diam ut venenatis tellus in metus. Turpis egestas sed tempus urna et
            pharetra. Donec ultrices tincidunt arcu non sodales neque sodales ut
            etiam. Nec ultrices dui sapien eget mi proin sed. Ridiculus mus
            mauris vitae ultricies leo integer. Sit amet nisl purus in mollis.
            Tincidunt praesent semper feugiat nibh sed. Id leo in vitae turpis
            massa sed. In eu mi bibendum neque egestas congue quisque egestas
            diam. Ultrices sagittis orci a scelerisque purus semper eget duis.
            Semper risus in hendrerit gravida rutrum quisque. Massa sapien
            faucibus et molestie ac feugiat sed lectus. Nisi lacus sed viverra
            tellus. Suspendisse faucibus interdum posuere lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div className="self-center">
          <Image
            className="rounded-full grayscale-[20%] hover:grayscale-0"
            src="https://github.com/paulobordignon.png"
            alt="personal photography"
            height={300}
            width={300}
          />
        </div>
      </div>
    </motion.div>
  );
}
