import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Avatar from header
// Need to add profile picture
const HeaderAvatar = () => {
  return (
    <Link
      href="/"
      passHref
      title="View home page"
      className="rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCBA28] "
    >
      <motion.a
        key="home-button"
        className="rounded-full bg-[#0F0D0E] ring-[3px] ring-[#FCBA28] p-[2px] group transform transition ease-out hover:scale-105 active:translate-y-px"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
      >
        <div className="rounded-full p-px h-[36px] w-[36px] transition duration-300 group-hover:scale-105"></div>
      </motion.a>
    </Link>
  );
};

export default HeaderAvatar;
