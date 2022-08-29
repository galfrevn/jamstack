import React from "react";
import { User, Briefcase, GitBranch, Chrome } from "react-feather";

const Hero = () => {
  return (
    <div>
      <div className="transition duration-300 opacity-100 select-none">
        <div className="flex items-center space-x-6">
          <div className="rounded-full bg-gradient-to-br from-sky-300/60 to-emerald-200/60 shadow-lg p-[3px] ring-[5px] ring-teal-500/10">
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
            <h1 className="text-3xl font-semibold text-teal-50/80 sm:text-4xl">
              Valentin
            </h1>
            <h2 className="text-base sm:text-lg ">
              <span
                className="inline sm:hidden text-gray-300/80"
                title="Fullstack Developer"
              >
                Fullstack dev
              </span>{" "}
              <span className="hidden sm:inline text-gray-300/80">
                Fullstack Developer{" "}
              </span>
              <span className="text-gray-300/80">at</span>
              <span className="font-medium text-teal-50/80">
                <span className="align-text-bottom">
                  <span className="-my-1 ml-1.5 mr-1 inline-block text-[24px]">
                    <Chrome strokeWidth={2.5} size={18} />
                  </span>
                </span>
                Crombie
              </span>
            </h2>
          </div>
        </div>
        <p className="mt-7 text-lg text-teal-50/90 sm:mt-9">
          Welcome to my digital garden where I share what I'm learning about
          shipping great products, becoming a better developer and growing a
          career in tech.
        </p>
        <div className="mt-8 sm:mt-12">
          <div className="flex items-center space-x-7 text-base font-medium leading-none text-teal-50/90 sm:text-lg">
            <div className="group cursor-pointer focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70">
              <div className="sm:flex sm:items-center sm:space-x-2">
                <div className="mb-2 flex justify-center sm:mb-0 sm:block">
                  <div className="rounded-lg bg-gradient-to-bl from-emerald-400/60 to-cyan-200/60 p-1.5 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-600/40 group-active:translate-y-1">
                    <User
                      strokeWidth={3}
                      className="w-[18px] h-[18px] transform text-teal-50 transition delay-100 duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="select-none">About</div>
              </div>
            </div>
            <div className="group cursor-pointer focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70">
              <div className="sm:flex sm:items-center sm:space-x-2">
                <div className="mb-2 flex justify-center sm:mb-0 sm:block">
                  <div className="rounded-lg bg-gradient-to-tr from-emerald-100/60 to-cyan-500/60 p-1.5 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-600/40 group-active:translate-y-1">
                    <Briefcase
                      strokeWidth={3}
                      className="w-[18px] h-[18px] transform text-teal-50 transition delay-100 duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="select-none">Work</div>
              </div>
            </div>
            <div className="group cursor-pointer focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70">
              <div className="sm:flex sm:items-center sm:space-x-2">
                <div className="mb-2 flex justify-center sm:mb-0 sm:block">
                  <div className="rounded-lg bg-gradient-to-br from-teal-300/60 to-sky-500/60 p-1.5 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-600/40 group-active:translate-y-1">
                    <GitBranch
                      strokeWidth={3}
                      className="w-[18px] h-[18px] transform text-teal-50 transition delay-100 duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="select-none">Blog</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
