import type { FC } from "react";
// Next
import Link from "next/link";
import Image from "next/image";

// Animations
import { motion } from "framer-motion";

interface HeaderButtonProps {
  name: string;
  image: string;
  bgcolor: string;
  to: string;
  delay?: number;
}

const HeaderButton: FC<HeaderButtonProps> = ({
  name,
  image,
  bgcolor,
  to,
  delay = 0.25,
}) => {
  return (
    <Link href={to} passHref>
      <motion.a
        key="button-about"
        className="group cursor-pointer focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCBA28]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay } }}
      >
        <div className="sm:flex sm:items-center sm:space-x-2">
          <div className="mb-2 flex justify-center sm:mb-0 sm:block">
            <div
              className="h-11 rounded-lg p-1.5 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-active:translate-y-1"
              style={{ backgroundColor: bgcolor }}
            >
              <Image
                alt={`${name} icon`}
                src={image}
                width="32"
                height="32"
                decoding="async"
                data-nimg="future"
              />
            </div>
          </div>
          <div className="select-none text-center">{name} </div>
        </div>
      </motion.a>
    </Link>
  );
};

export default HeaderButton;
