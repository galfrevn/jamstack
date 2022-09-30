import { FC, Fragment, ReactNode } from "react";

import Header from "components/Header";
import FractalNoise from "components/FractalNoise";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <FractalNoise />
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
