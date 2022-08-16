import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="transition duration-300 opacity-100">
        <div className="flex items-center space-x-6">
          <div className="rounded-full bg-gradient-to-br from-emerald-700/60 to-indigo-200/60 shadow-lg p-[3px] ring-[5px] ring-teal-500/10">
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
          </div>
          <div>
            <h1 className="text-3xl tracking-tight font-semibold text-teal-50/80 sm:text-4xl">
              Valentin
            </h1>
            <h2 className="text-sm sm:text-lg ">
              <span className="inline sm:hidden" title="Fullstack Developer">
                Fullstack dev
              </span>{" "}
              <span className="hidden sm:inline">Fullstack Developer </span>
              at
              <span className="font-medium text-teal-50/80">
                {" "}
                <span className="mr-px align-middle">
                  <span className="-my-2 inline-block text-[24px]">
                    <Image src="/crombie.png" width={18} height={14} />
                  </span>{" "}
                </span>
                Crombie.dev
              </span>
            </h2>
          </div>
        </div>
        <div className="mt-7 text-xl text-teal-50/90 sm:mt-9">
          Welcome to my digital garden where I share what I'm learning about
          shipping great products, becoming a better developer and growing a
          career in tech.
        </div>
      </div>
    </div>
  );
};

export default Hero;
