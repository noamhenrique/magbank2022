import { Col, Button, Tab, Tabs, Form, Row, Container } from "react-bootstrap";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <h3 className="my-4">Pagamentos</h3>
      <Tabs defaultActiveKey="boleto" className="mt-5">
        <Tab eventKey="boleto" title="Boleto">
          <Container className="p-lg-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBarCode">
                <Form.Label className="mt-4 mt-lg-0">
                  <strong>Código de barras</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Insira o código de barras"
                />
              </Form.Group>
              <Form.Label className="mt-4">
                <strong>Forma de Pagamento</strong>
              </Form.Label>
              <Form.Group controlId="formPaymentType">
                <Form.Check
                  inline
                  type="radio"
                  id={"debit"}
                  label={"Débito em Conta Corrente"}
                  name="paymentType"
                />
                <Form.Check
                  inline
                  type="radio"
                  id={"credit"}
                  label={"Cartão de Crédito"}
                  name="paymentType"
                />
              </Form.Group>
              <Button className="mt-5" variant="success">
                Continuar
              </Button>
            </Form>
          </Container>
        </Tab>

        <Tab eventKey="transfer" title="Transferências">
          <Container className="p-lg-5">
            <Row className="mt-4 mt-lg-0">
              <Col>
                <Form.Label>
                  <strong>Banco</strong>
                </Form.Label>
                <Form.Select aria-label="Selecione">
                  <option>Selecione</option>
                  <option>MAGBank</option>
                  <option>Bradesco</option>
                  <option>Santander</option>
                  <option>Itaú</option>
                  <option>NuBank</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>
                  <strong>Agência</strong>
                </Form.Label>
                <Form.Control type="number" />
              </Col>
              <Col>
                <Form.Label>
                  <strong>Conta corrente</strong>
                </Form.Label>
                <Form.Control type="number" />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Form.Label>
                  <strong>Valor da transferência</strong>
                </Form.Label>
                <Form.Control type="number" />
              </Col>
              <Col>
                <Form.Label>
                  <strong>Identificação nos extratos</strong>
                </Form.Label>
                <Form.Control type="text" />
              </Col>
            </Row>
            <Button className="mt-4" variant="success">
              Continuar
            </Button>
          </Container>
        </Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
