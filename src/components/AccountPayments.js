import { Col, Button, Tab, Tabs, Form } from "react-bootstrap";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <Tabs defaultActiveKey="latest" className="mt-5 pt-lg-5">
        <Tab eventKey="boleto" title="Boleto">
          <Form>
            <Form.Group className="mb-3" controlId="formBarCode">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o código de barras"
              />
            </Form.Group>
            <Form.Group controlId="formPaymentType">
              <Form.Label>Forma de Pagamento</Form.Label>
              <Form.Check
                type="radio"
                id={"debit"}
                label={"Débito em Conta Corrente"}
              />
              <Form.Check
                type="radio"
                id={"credit"}
                label={"Cartão de Crédito"}
              />
            </Form.Group>
          </Form>
        </Tab>
        <Tab eventKey="transfer" title="Transferências"></Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
