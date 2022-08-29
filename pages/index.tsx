import type { NextPage } from "next";

// Components
import Feed from "components/Feed";
import Hero from "components/Hero";
import Layout from "layouts";

// Markdown

const Home: NextPage = () => {
  return (
    <Layout>
      <main
        className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4
       pt-48 text-lg text-teal-50/90 xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] 
       xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
      >
        <div className="-mt-12 sm:mt-0">
          <Hero />
          <Feed />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
