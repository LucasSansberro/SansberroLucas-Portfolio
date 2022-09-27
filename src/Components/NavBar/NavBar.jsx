import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Sansberro Lucas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-lg-5" eventKey={1}>
              Home
            </Nav.Link>
            <Nav.Link className="mx-lg-5" eventKey={2}>
              About
            </Nav.Link>
            <Nav.Link className="mx-lg-5" eventKey={3}>
              Projects
            </Nav.Link>
            <Nav.Link className="mx-lg-5" eventKey={4}>
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
