import { FC, Fragment, ReactElement } from "react";

import Header from "components/Header";
import FractalNoise from "components/FractalNoise";
import Background from "components/Background";

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <Fragment>
      <FractalNoise />
      <Header />

      {children}

      <Background />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
