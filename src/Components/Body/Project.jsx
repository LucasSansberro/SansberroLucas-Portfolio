import Card from "react-bootstrap/Card";

function Project(props) {
  return (
    <Card className="m-5 col-4 p-1">
      <Card.Title className="text-center my-3">{props.title}</Card.Title>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className="d-flex justify-content-around">
          <a href={props.githubLink} rel="noreferrer" target="_blank">
            Visit GitHub
          </a>
          <a href={props.liveTestLink} rel="noreferrer" target="_blank">
            Visit Site
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;
