// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Container} from "react-bootstrap";

const mainContainer = (props) => {
  return(
  
<div className="Main-Container">
    {props.children}
</div>
  
  );
};


export default mainContainer;
