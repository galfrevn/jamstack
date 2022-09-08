// Next components & hooks
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Components
import HeaderButton from "components/HeaderButton";
import HeaderAvatar from "components/HeaderAvatar";

/* Pathnames where the header is hidden */
const openend = ["/"];

export default function Header() {
  const [animateHeader, setAnimateHeader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!openend.includes(router.pathname)) return setAnimateHeader(true);
    else return setAnimateHeader(false);
  }, [router.pathname]);

  return (
    <div className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4">
      <div
        className={` ${
          animateHeader ? "opacity-100" : "opacity-0"
        } transition-all duration-300 pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-3 shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-black/[35%]`}
      >
        {animateHeader && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <HeaderAvatar />
            </div>
            <div className="flex items-center space-x-7 text-base font-medium leading-none text-[#F9F4DA] sm:text-lg">
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
        )}
      </div>
    </div>
  );
}
