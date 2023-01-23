// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";

const formatPrice = (price) => {

    return price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

}

const cryptoPanel = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Img
          variant="top"
          src={props.img}
          style={{
            width: "13vw",
            height: "25vh",
            paddingBottom: "5vh",
          }}
        />

        <Card.Title style={{
            fontSize:"1.8rem"
        }}>{props.coin}</Card.Title>

        <ListGroup style={{
            paddingBottom:"10px"
        }}>
          <ListGroup.Item variant="dark">
            <Card.Title>Current Price</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text>{formatPrice(props.price) + " USD"}</Card.Text>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup style={{
            paddingBottom:"10px"
        }}>
          <ListGroup.Item variant="dark">
            <Card.Title>24 Hour Change</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item variant={props.hourChange > 0 ? 'success' : 'danger'}>
            <Card.Text>{formatPrice(props.hourChange)}</Card.Text>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup style={{
            paddingBottom:"10px"
        }}>
          <ListGroup.Item variant="dark">
            <Card.Title>24 Hour High</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text>{formatPrice(props.hourHigh)}</Card.Text>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup style={{
            paddingBottom:"10px"
        }}>
          <ListGroup.Item variant="dark">
            <Card.Title>24 Hour Low</Card.Title>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text>{formatPrice(props.hourLow)}</Card.Text>
          </ListGroup.Item>
        </ListGroup>

      </Card.Body>
    </Card>
  );
};

export default cryptoPanel;
