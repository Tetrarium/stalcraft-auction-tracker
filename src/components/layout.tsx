import { FC, PropsWithChildren } from "react";

import Header from "./header/header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;