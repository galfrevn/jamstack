import { FC, Fragment, ReactNode } from "react";

import Header from "components/Header";
import FractalNoise from "components/FractalNoise";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <FractalNoise />
      <Header />
      <main
        className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4
       pt-48 text-lg text-teal-50/90 xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] 
       xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
      >
        {children}
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
