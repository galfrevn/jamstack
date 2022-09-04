import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Postcard = ({ title, slug }: any) => {
  return (
    <Link href={`blog/${slug}`}>
      <motion.a
        key="blog-card"
        className="block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        <h3 className="text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90">
          {title}
        </h3>
        <div className="flex flex-wrap space-x-2 text-base text-rose-100/50">
          <div>Aug 24</div>
          <div className="text-rose-100/30">·</div>
          <div>
            <span className="-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tabular-nums tracking-tight">
              295
            </span>
            views
          </div>
          <div className="text-rose-100/30">·</div>
          <div>
            <span className="-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tabular-nums tracking-tight">
              86
            </span>
            likes
          </div>
        </div>
        <p className="mt-4 text-lg text-rose-100/70 line-clamp-3">
          Leverage VS Code&apos;s ecosystem to generate highly accurate syntax
          highlighting at build time. With zero performance cost and access to
          the entire VS Code theme catalog.
        </p>
      </motion.a>
    </Link>
  );
};

export default Postcard;
