import { FC } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

const Header: FC = () => {
  return (
    <Navbar className="navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image src="images/cube_logo_purple.png" width={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navBar" />
        <Navbar.Collapse id="navBar">
          <Nav>
            <Nav.Link active href="/">Home</Nav.Link>
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
            <Nav.Link href="/" disabled>Disabled</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;