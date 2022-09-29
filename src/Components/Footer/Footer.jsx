import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gitHubInvertedIcon from "../../Pics/githubInvertedIcon.png";
import linkedinInvertedIcon from "../../Pics/linkedinInvertedIcon.png";
import "./Footer.css";

function Footer() {
  return (
    <Navbar className="mt-5 footer" bg="dark">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link
            href="https://github.com/LucasSansberro"
            rel="noreferrer"
            target="_blank"
            className="pe-lg-5"
          >
            <img
              className="workLinks-footer"
              src={gitHubInvertedIcon}
              alt="GitHub icon"
            />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/lucas-sansberro/"
            rel="noreferrer"
            target="_blank"
            className=""
          >
            <img
              className="workLinks-footer"
              src={linkedinInvertedIcon}
              alt="LinkedIn icon"
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
