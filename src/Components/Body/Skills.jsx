import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import htmlIcon from "../../Pics/htmlIcon.png";
import cssIcon from "../../Pics/cssIcon.png";
import jsIcon from "../../Pics/jsIcon.png";
import reactIcon from "../../Pics/React-icon.png";
import bootstrapIcon from "../../Pics/bootstrapIcon.png";
import sassIcon from "../../Pics/sassIcon.png";
import firebaseIcon from "../../Pics/firebaseIcon.png";
import typescriptIcon from "../../Pics/typescriptIcon.png";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", pic: htmlIcon },
    {
      name: "CSS",
      pic: cssIcon,
    },
    {
      name: "Bootstrap",
      pic: bootstrapIcon,
    },
    {
      name: "Sass",
      pic: sassIcon,
    },
    {
      name: "JS",
      pic: jsIcon,
    },
    {
      name: "React",
      pic: reactIcon,
    },
    {
      name: "Firebase",
      pic: firebaseIcon,
    },
    {
      name: "Typescript",
      pic: typescriptIcon,
    },
  ];

  return (
    <Card id="skills" className="container mt-5 rounded-3 Card-BackgroundColor">
      <Row className="p-3">
        <Col>
          <Card.Body>
            <h2 className="text-center">Skills</h2>
            <Card.Text className="d-flex justify-content-around flex-wrap text-center">
              {skills.map((skill) => (
                <div className="col-lg-2 m-3">
                  <img
                    className="frontEndLanguages"
                    src={skill.pic}
                    alt={`${skill.name} icon`}
                  />
                </div>
              ))}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default Skills;
