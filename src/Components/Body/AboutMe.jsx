import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyPic from "../../Pics/ItsMe.jpg";
import gitHubIcon from "../../Pics/githubIcon.png";
import linkedinBlackIcon from "../../Pics/linkedinBlackIcon.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <Card className="container mt-5 rounded-3 Card-BackgroundColor card">
      <Row className="p-3">
        <Col lg="4" md="6">
          <Card.Img className="myPic" src={MyPic} />
        </Col>
        <Col className="d-flex justify-content-around flex-column">
          <div>
            {" "}
            <h1 className="text-center">Sansberro Lucas</h1>
            <h3 className="text-center">Frontend Developer</h3>
            <h3 className="text-center">Buenos Aires, Argentina</h3>
          </div>
          <div className="mt-lg-5 d-flex justify-content-center">
            <a
              className="workLinksAnimation me-lg-5"
              href="https://github.com/LucasSansberro"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="workLinks mx-auto"
                src={gitHubIcon}
                alt="GitHub icon"
              />
            </a>
            <div className="vr"></div>
            <a
              className="workLinksAnimation ms-lg-5"
              href="https://www.linkedin.com/in/lucas-sansberro/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="workLinks mx-auto"
                src={linkedinBlackIcon}
                alt="LinkedIn icon"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default AboutMe;
