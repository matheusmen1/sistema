import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function FormClientes(props){
   
        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="nome" placeholder="Digite seu nome" />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="cpf" placeholder="Digite seu CPF" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CEP</Form.Label>
              <Form.Control type="cep" placeholder="Digite seu CEP" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="telefone" placeholder="Digite seu " />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );

}
      