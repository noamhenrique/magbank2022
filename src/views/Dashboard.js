import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

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
    history: [
      {
        date: "17/07",
        description: "SAQUE 24H 012345",
        value: <span className="text-danger">200,00-</span>,
      },
      {
        date: "17/07",
        description: "SALDO DO DIA",
        balance: "2.780,00",
      },
      {
        date: "19/07",
        description: "ESTACIONAMENTO 123234",
        value: <span className="text-danger">12,00-</span>,
      },
      {
        date: "19/07",
        description: "COMPRA INTERNET 123432",
        value: <span className="text-danger">450,00-</span>,
      },
      {
        date: "19/07",
        description: "SALDO DO DIA",
        balance: "2.318,00",
      },
      {
        date: "21/07",
        description: "SUPERMERCADO 2312332",
        value: <span className="text-danger">275,90-</span>,
      },
      {
        date: "21/07",
        description: "ESTACIONAMENTO 123234",
        value: <span className="text-danger">12,00-</span>,
      },
      {
        date: "21/07",
        description: "SHOPPING 123432",
        value: <span className="text-danger">180,00-</span>,
      },
      {
        date: "21/07",
        description: "SALDO DO DIA",
        balance: "1.851,00",
      },
      {
        date: "22/07",
        description: "SUPERMERCADO 2312332",
        value: <span className="text-danger">275,90</span>,
      },
      {
        date: "22/07",
        description: "DEPÓSITO 123234",
        value: "1.000,00",
      },
      {
        date: "22/07",
        description: "SALDO DO DIA",
        balance: "2.576,00",
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
          <Route path="history" element={<AccountHistory data={data} />} />
          <Route path="payments" element={<AccountPayments />} />
          <Route path="" element={<AccountBalance data={data} />} />
        </Routes>
      </Row>
    </Container>
  );
};
export default Dashboard;
