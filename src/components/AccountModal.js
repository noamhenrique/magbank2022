import { Modal, Button, Form } from "react-bootstrap";

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra sua conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Seu nome</Form.Label>
          <Form.Control type="text" placeholder="Seu nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seu email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label className="my-1 mr-2" htmlFor="formCitySelect">
            Preference
          </Form.Label>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="formCitySelect"
            custom
          >
            <option value="0">Florianópolis - SC</option>
            <option value="1">Curitiba - PR</option>
            <option value="2">São Paulo - SP</option>
            <option value="3">Rio de Janeiro - RJ</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Eu li e concordo com os termos de uso"
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Criar Conta
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AccountModal;
