import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import HeaderButton from "components/HeaderButton";

const Hero = () => {
  return (
    <div>
      <div className="transition duration-300 opacity-100 select-none">
        <div className="flex items-center space-x-6">
          <motion.div
            key="image"
            className="rounded-full shadow-lg p-[3px] ring-[5px] ring-[#FCBA28]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="rounded-full p-px h-[64px] w-[64px]">
              {/* <Image
                alt="A Valentin picture"
                src=""
                width="64"
                height="64"
                decoding="async"
                data-nimg="future"
                className="rounded-full"
              /> */}
            </div>
          </motion.div>
          <div>
            <motion.h1
              key="name"
              className="text-3xl font-semibold sm:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              Valentin Galfré
            </motion.h1>
            <motion.h2
              key="subtitle"
              className="text-base sm:text-lg"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            >
              <span
                className="inline sm:hidden opacity-70"
                title="Fullstack Developer"
              >
                Fullstack dev
              </span>{" "}
              <span className="hidden sm:inline opacity-70">
                Fullstack Developer{" "}
              </span>
              <span className="opacity-70">at</span>
              <span className="font-medium">
                <span className="align-text-bottom">
                  <span className="ml-1.5 mr-1.5 transform translate-y-1 inline-block text-[24px]">
                    <Image
                      alt="Crombie logo"
                      src="https://res.cloudinary.com/qwertytesting123/image/upload/v1662155122/crombie-logo.png"
                      width="18"
                      height="15"
                      decoding="async"
                      data-nimg="future"
                    />
                  </span>
                </span>
                Crombie
              </span>
            </motion.h2>
          </div>
        </div>
        <motion.p
          key="description"
          className="mt-7 text-xl sm:mt-9"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.18 } }}
        >
          Welcome to my digital garden where I share what I&apos;m learning
          about shipping great products, becoming a better developer and growing
          a career in tech.
        </motion.p>
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center space-x-7 text-base font-medium leading-none sm:text-lg">
            <HeaderButton
              to="/about"
              name="About"
              bgcolor="#12B5E5"
              image="https://res.cloudinary.com/qwertytesting123/image/upload/v1662155122/typescript-logo.svg"
              delay={0.25}
            />
            <HeaderButton
              to="/work"
              name="Work"
              bgcolor="#F9F4DA"
              image="https://res.cloudinary.com/qwertytesting123/image/upload/v1662155122/javascript-logo.svg"
              delay={0.3}
            />
            <HeaderButton
              to="/blog"
              name="Blog"
              bgcolor="#FC7428"
              image="https://res.cloudinary.com/qwertytesting123/image/upload/v1662155122/eyes-logo.svg"
              delay={0.35}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
