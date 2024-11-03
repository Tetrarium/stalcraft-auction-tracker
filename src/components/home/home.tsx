import { FC } from "react";
import { Container } from "react-bootstrap";

import Filter from "../filter/filter";

const Home: FC = () => {
  return (
    <Container>
      <Filter />
    </Container>
  );
};

export default Home;