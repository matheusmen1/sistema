import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function FormProduto(props){
   
        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Codigo</Form.Label>
              <Form.Control type="codigo" placeholder="Digite seu codigo" />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="descricao" placeholder="Digite uma descrição" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control type="quantidade" placeholder="Digite uma quantidade" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Valor</Form.Label>
              <Form.Control type="valor" placeholder="Digite um valor" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Cadastrar
            </Button>
          </Form>
        );

}
      