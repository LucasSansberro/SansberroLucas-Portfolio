import Card from "react-bootstrap/Card";
import "./Project.css";

function Project(props) {
  return (
    <Card className="m-5 col-4 p-1 project-BackgroundColor">
      <Card.Title className="text-center my-3">{props.title}</Card.Title>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="d-flex justify-content-around">
          <a
            className="visitButton"
            href={props.liveTestLink}
            rel="noreferrer"
            target="_blank"
          >
            <span className="visitButton_top">Visit Site</span>
          </a>
          <a
            className="visitButton"
            href={props.githubLink}
            rel="noreferrer"
            target="_blank"
          >
            <span className="visitButton_top">Visit GitHub </span>
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;
