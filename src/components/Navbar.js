import { Link, useRoutes } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({ handleCreateAcc }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="Magbank logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#cartao">Cartão</Nav.Link>
                <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
              </Nav>
              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-light">
                  <NavDropdown
                    title="Acessar minha conta"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/login">Pessoa Física</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/login">Pessoa Jurídica</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
                <Button variant="outline-light" onClick={handleCreateAcc}>
                  Abra sua conta
                </Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ),
    },
    {
      path: "/login",
      element: (
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="Magbank logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#cartao">Cartão</Nav.Link>
                <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
              </Nav>
              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-light">
                  <NavDropdown
                    title="Acessar minha conta"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/login">Pessoa Física</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/login">Pessoa Jurídica</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>
                <Button variant="outline-light" onClick={handleCreateAcc}>
                  Abra sua conta
                </Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="Magbank logo"
                />
              </Link>
            </Navbar.Brand>
            <ButtonGroup aria-label="Basic example" className="Leave__Button">
              <Link to="/">
                <Button variant="outline-light">Sair</Button>
              </Link>
            </ButtonGroup>
          </Container>
        </Navbar>
      ),
    },
    {
      path: "/dashboard/payments",
      element: (
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="Magbank logo"
                />
              </Link>
            </Navbar.Brand>
            <ButtonGroup aria-label="Basic example" className="Leave__Button">
              <Link to="/">
                <Button variant="outline-light">Sair</Button>
              </Link>
            </ButtonGroup>
          </Container>
        </Navbar>
      ),
    },
    {
      path: "/dashboard/history",
      element: (
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="Magbank logo"
                />
              </Link>
            </Navbar.Brand>
            <ButtonGroup aria-label="Basic example" className="Leave__Button">
              <Link to="/">
                <Button variant="outline-light">Sair</Button>
              </Link>
            </ButtonGroup>
          </Container>
        </Navbar>
      ),
    },
  ]);

  return routes;
};

export default Navigation;
