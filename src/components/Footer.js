import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center pt-5">
        <Col xs={12} lg={6} className="text-lg-start mb-5">
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4} className="mb-5 py-xs-4">
          <Image src={applestore} />
          <Image src={googleplay} />
        </Col>
        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center mb-5"
        >
          <FontAwesomeIcon icon={faFacebookSquare} color="#7c7c7c" size="2x" />
          <FontAwesomeIcon icon={faTwitter} color="#7c7c7c" size="2x" />
          <FontAwesomeIcon icon={faYoutube} color="#7c7c7c" size="2x" />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
