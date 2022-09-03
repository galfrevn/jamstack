import { FC, Fragment, ReactNode } from "react";

import Header from "components/Header";
import FractalNoise from "components/FractalNoise";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <FractalNoise />
      <Header />
      <main
        className="pt-48 relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 text-lg text-[#F9F4DA] xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] 
       xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
      >
        <div className="-mt-12 sm:mt-0">{children}</div>
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
