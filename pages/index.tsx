import type { NextPage } from "next";
import { Fragment } from "react";

// Components
import Feed from "components/Feed";
import Hero from "components/Hero";

const Home: NextPage = () => {
  return (
    <Fragment>
      <main
        className="pt-48 relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 text-lg text-[#F9F4DA] xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] 
       xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
      >
        <div className="-mt-12 sm:mt-0">
          <Hero />
          <Feed />
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
