import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyPic from "../../Pics/ItsMe.jpg";
import htmlIcon from "../../Pics/htmlIcon.png";
import cssIcon from "../../Pics/cssIcon.png";
import jsIcon from "../../Pics/jsIcon.png";
import ReactIcon from "../../Pics/React-icon.png";
import gitHubIcon from "../../Pics/githubIcon.png";
import linkedinIcon from "../../Pics/linkedinIcon.png";

import "./AboutMe.css";

function AboutMe() {
  return (
    <Card className="container mt-5 rounded-4">
      <Row className="p-3">
        <Col lg="4">
          <Card.Img className="myPic" src={MyPic} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>About me</Card.Title>
            <Card.Text>
              Hi, I’m Lucas Sansberro, a 24 years old front-end developer who
              lives in Argentina.
            </Card.Text>
            <Card.Text>
              Im currently knowledgeable in HTML, CSS, JavaScript and React. On
              top of that I have experience working with several tools like
              Bootstrap, Sass and Firebase.
            </Card.Text>
            <Card.Text>
              I consider myself a self-taught technology geek with a knack for
              languages. I also love literature :)
            </Card.Text>
            <Card.Text className="mt-lg-5 d-flex justify-content-around">
              <img
                className="frontEndLanguages"
                src={htmlIcon}
                alt="HTML icon"
              />
              <img className="frontEndLanguages" src={cssIcon} alt="CSS icon" />
              <img className="frontEndLanguages" src={jsIcon} alt="JS icon" />
              <img
                className="frontEndLanguages"
                src={ReactIcon}
                alt="React icon"
              />
            </Card.Text>
            <Card.Text className="mt-lg-5 d-flex justify-content-center">
              <a
                href="https://github.com/LucasSansberro"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="workLinks mx-5"
                  src={gitHubIcon}
                  alt="GitHub icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-sansberro/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="workLinks mx-5"
                  src={linkedinIcon}
                  alt="LinkedIn icon"
                />
              </a>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default AboutMe;
