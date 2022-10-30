import type { NextPage } from "next";

// Components
import Feed from "components/Feed";
import Hero from "components/Hero";
import Container from "components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="-mt-12 sm:mt-0">
        <Hero />
        <Feed />
      </div>
    </Container>
  );
};

export default Home;
