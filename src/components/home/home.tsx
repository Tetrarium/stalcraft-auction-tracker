import { FC } from "react";
import { Container } from "react-bootstrap";

import Cards from "../cards/cards";
import Filter from "../filter/filter";

const Home: FC = () => {
  return (
    <Container>
      <Filter />
      <Cards />
    </Container>
  );
};

export default Home;