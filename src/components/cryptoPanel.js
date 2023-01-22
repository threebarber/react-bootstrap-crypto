// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";

const cryptoPanel = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Img
          variant="top"
          src={props.img}
          style={{
            width: "15vw",
            height: "25vh",
            paddingBottom: "5vh",
          }}
        />

        <Card.Title>{props.coin}</Card.Title>

        <ListGroup>
          <ListGroup.Item>
            <Card.Title>24 Hour Change</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text>{props.hour}</Card.Text>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup>
          <ListGroup.Item>
            <Card.Title>24 Hour Average</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text>{props.average}</Card.Text>
          </ListGroup.Item>
        </ListGroup>

      </Card.Body>
    </Card>
  );
};

export default cryptoPanel;
