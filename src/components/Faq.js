import { Container, Row, Col } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";

import "./Faq.scss";

const Faq = () => (
  <section className="faq text-light">
    <Container className="py-5">
      <Row className="d-flex align-items-center justify-items-center">
        <Col className="d-lg-none mb-5" xs={12}>
          <Row>
            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faCreditCard} size="2x" color="#FFF" />
            </Col>
            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faWallet} size="2x" color="#FFF" />
            </Col>
            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" color="#FFF" />
            </Col>
            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faUserTie} size="2x" color="#FFF" />
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-lg-block">
          <IconText
            icon={faCreditCard}
            size={3}
            className="mb-3"
            textClassName="lead"
            color="#FFF"
          >
            Cartão de crédito e débito
          </IconText>
          <IconText
            icon={faWallet}
            size={3}
            className="mb-3"
            textClassName="lead"
            color="#FFF"
          >
            Conta e abertura
          </IconText>
          <IconText
            icon={faShieldAlt}
            size={3}
            className="mb-3"
            textClassName="lead"
            color="#FFF"
          >
            Token digital
          </IconText>
          <IconText icon={faUserTie} size={3} textClassName="lead" color="#FFF">
            Produtos e serviços
          </IconText>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Nulla porttitor eros ac ex tristique posuere
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Quisque fringilla tincidunt arcu
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Nam elementum lobortis purus a maximus tortor
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt arcu vel arcu fermentum, eget accumsan dolor
                dignissim. Nam eget quam semper, varius ligula sed, auctor
                augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur
                scelerisque placerat ultrices. Proin purus ante, congue vel arcu
                ac, porta condimentum mauris. Maecenas massa orci, fringilla
                eget fermentum nec, dignissim nec diam.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Faq;
