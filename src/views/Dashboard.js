import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import "./Dashboard.scss";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: "Minha Conta", path: "", exact: true },
    { text: "Pagamentos", path: "payments" },
    { text: "Extrato", path: "history" },
  ];

  const data = {
    latestBalance: [
      { date: "22/07", description: "SAQUE 24h 012345", value: "300,00" },
      {
        date: "21/07",
        description: "SUPERMERCADO 24h 2312332",
        value: "275,90",
      },
      { date: "21/07", description: "ESTACIONAMENTO 123234", value: "12,00" },
      {
        date: "21/07",
        description: "PAGAMENTO ALUGUEL 123432",
        value: "1.500,00",
      },
      { date: "21/07", description: "SEGURO 132987", value: "185,00" },
    ],

    futureBalance: [
      { date: "22/08", description: "SAQUE 24h 012345", value: "300,00" },
      {
        date: "21/08",
        description: "SUPERMERCADO 24h 2312332",
        value: "275,90",
      },
      { date: "21/08", description: "ESTACIONAMENTO 123234", value: "12,00" },
      {
        date: "21/08",
        description: "PAGAMENTO ALUGUEL 123432",
        value: "1.500,00",
      },
    ],
  };

  return (
    <Container className="dashboard py-5">
      <Row>
        <Col xs={12} lg={4}>
          <Row className="align-items-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h4>Noam Henrique</h4>
              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          <div className="d-grid gap-2">
            {links.map(({ text, path, exact }, key) => (
              <Link to={path} exact={exact ? exact : false} key={key}>
                <Button
                  className={`dashboard__button text-start ${
                    key === activeLink ? "dashboard__button--active" : ""
                  }`}
                  variant="link"
                  onClick={() => setActiveLink(key)}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </div>
        </Col>
        <Routes>
          <Route path="history" element={<h2>Extrato</h2>} />
          <Route path="payments" element={<h2>Pagamentos</h2>} />
          <Route path="" element={<AccountBalance data={data} />} />
        </Routes>
      </Row>
    </Container>
  );
};
export default Dashboard;
