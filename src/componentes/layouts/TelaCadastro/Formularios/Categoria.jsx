import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function FormCategoria(props){
   
        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Código</Form.Label>
              <Form.Control type="nome" placeholder="Digite um código" />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="cpf" placeholder="Digite uma descrição" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tipo</Form.Label>
              <Form.Control type="cep" placeholder="Digite um tipo" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );

}
      
    

