import { useState, useEffect } from "react";
import { Briefcase, GitBranch, User } from "react-feather";

export default function Header() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 460) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4">
      <div
        className={` ${
          animateHeader ? "opacity-100" : "opacity-0"
        } transition-all duration-300 pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-2.5 shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]`}
      >
        {animateHeader && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div
                title="View home page"
                className="rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70"
              >
                <div className="rounded-full bg-gradient-to-br from-sky-300/60 to-emerald-200/60 shadow-lg p-[2px] group transform transition ease-out hover:scale-105 hover:shadow-emerald-600/40 active:translate-y-px">
                  <div className="rounded-full p-px h-[36px] w-[36px] transition duration-300 group-hover:scale-105"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-7 text-base font-medium leading-none text-teal-50/90 sm:text-lg">
              <div className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70">
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                    <div className="rounded-lg bg-gradient-to-bl from-emerald-400/60 to-cyan-200/60 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-600/40 group-active:translate-y-1">
                      <User
                        strokeWidth={3}
                        className="w-[18px] h-[18px] transform text-teal-50 transition delay-100 duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div>About</div>
                </div>
              </div>
              <div className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70">
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                    <div className="rounded-lg bg-gradient-to-tr from-emerald-100/60 to-cyan-500/60 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-600/40 group-active:translate-y-1">
                      <Briefcase
                        strokeWidth={3}
                        className="w-[18px] h-[18px] transform text-teal-50 transition delay-100 duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div>Work</div>
                </div>
              </div>
              <div className="group focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/70">
                <div className="sm:flex sm:items-center sm:space-x-2">
                  <div className="mb-1.5 flex justify-center sm:mb-0 sm:block">
                    <div className="rounded-lg bg-gradient-to-br from-teal-300/60 to-sky-500/60 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-emerald-600/40 group-active:translate-y-1">
                      <GitBranch
                        strokeWidth={3}
                        className="w-[18px] h-[18px] transform text-teal-50 transition delay-100 duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div>Blog</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
