import type { NextPage } from "next";
import { Fragment } from "react";

// Components
import Feed from "components/Feed";
import Hero from "components/Hero";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <Feed />
    </Fragment>
  );
};

export default Home;
