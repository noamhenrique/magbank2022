import { Container, Row, Col, Button, Tab, Tabs, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";

const Dashboard = () => {
  const latestData = [
    { date: "22/07", description: "SAQUE 24h 012345", value: "300,00" },
    { date: "21/07", description: "SUPERMERCADO 24h 2312332", value: "275,90" },
    { date: "21/07", description: "ESTACIONAMENTO 123234", value: "12,00" },
    {
      date: "21/07",
      description: "PAGAMENTO ALUGUEL 123432",
      value: "1.500,00",
    },
    { date: "21/07", description: "SEGURO 132987", value: "185,00" },
  ];

  const futureData = [
    { date: "22/08", description: "SAQUE 24h 012345", value: "300,00" },
    { date: "21/08", description: "SUPERMERCADO 24h 2312332", value: "275,90" },
    { date: "21/08", description: "ESTACIONAMENTO 123234", value: "12,00" },
    {
      date: "21/08",
      description: "PAGAMENTO ALUGUEL 123432",
      value: "1.500,00",
    },
  ];

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
            <Button
              className="dashboard__button dashboard__button--active text-start"
              variant="link"
            >
              Minha Conta
            </Button>
            <Button className="dashboard__button text-start" variant="link">
              Pagamentos
            </Button>
            <Button className="dashboard__button text-start" variant="link">
              Extrato
            </Button>
          </div>
        </Col>
        <Col xs={12} lg={3} className="mt-lg-5 pt-lg-4">
          <h3 className="my-5">Conta Corrente</h3>
          <h6>
            <small>
              <strong>Saldo em conta corrente</strong>
            </small>
          </h6>
          <h4 className="text-success mb-4">
            <small>R$</small>3.450<small>,00</small>
          </h4>
          <h6>
            <small>
              <strong>Cheque especial</strong>
            </small>
          </h6>
          <p className="mb-0">Limite disponível</p>
          <p className="mb-4">R$ 5.000,00</p>
          <Button variant="secondary">Ver extrato</Button>
        </Col>
        <Col xs={12} lg={5} className="mt-lg-5 pt-lg-5">
          <Tabs defaultActiveKey="latest" className="mt-5 pt-lg-5">
            <Tab eventKey="latest" title="Últimos Lançamentos">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {latestData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="future" title="Lançamentos Futuros">
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {futureData.map(({ date, description, value }) => (
                    <tr>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
