import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import "./Dashboard.scss";

const Dashboard = () => {
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
            <Link to="">
              <Button
                className="dashboard__button dashboard__button--active text-start"
                variant="link"
              >
                Minha Conta
              </Button>
            </Link>
            <Link to="payments">
              <Button className="dashboard__button text-start" variant="link">
                Pagamentos
              </Button>
            </Link>
            <Link to="history">
              <Button className="dashboard__button text-start" variant="link">
                Extrato
              </Button>
            </Link>
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
