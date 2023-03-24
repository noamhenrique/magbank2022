import { Col, Table, Tabs, Tab } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-4">
      <h3 className="my-5">Extrato de conta corrente</h3>
      <Tabs defaultActiveKey="latest">
        <Tab eventKey="latest" title="Últimos Lançamentos">
          <Table striped borderless>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor (R$)</th>
                <th>Saldo (R$)</th>
              </tr>
            </thead>
            <tbody>
              {history.map(({ date, description, value, balance }) => (
                <tr>
                  <td>{date}</td>
                  <td>{description}</td>
                  <td>
                    <strong>{value}</strong>
                  </td>
                  <td>
                    <strong>{balance}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Col>
  );
};

export default AccountHistory;
