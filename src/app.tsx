import "bootstrap/scss/bootstrap.scss";
import "./global.sass";

import { FC } from "react";

import Home from "./components/home/home";
import Layout from "./components/layout";

const App: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;