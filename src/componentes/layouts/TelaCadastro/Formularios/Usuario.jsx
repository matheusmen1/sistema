import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function FormUsuario(props){
   
        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="nome" placeholder="Digite seu nome" />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="cpf" placeholder="Digite sua senha" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Cadastrar
            </Button>
          </Form>
        );

}
      