// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Container, Nav, Navbar } from "react-bootstrap";

const footer = (props) => {
  return (
    /*<div className="footerDiv">
    <p>footer words</p>
</div>*/

    <Navbar bg="dark" variant="dark" fixed="bottom" expand="lg">
      <Container style={{
        justifyContent: "center",
        color:"white"
      }}>
        <Nav.Link href="https://github.com/threebarber/react-bootstrap-crypto">
          Github Repo
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default footer;
