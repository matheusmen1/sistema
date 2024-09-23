import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';
export default function FormProduto(props) {
  const [produto, setProduto] = useState(props.produtoSelecionado); // extrai essas informações da telaProduto 
  const [formValidado, setFormValidado] = useState(false);
  function manipularSubmissao(evento) {

    const form = evento.currentTarget;
    if (form.checkValidity()) {
      if (props.modoEdicao == true){ // verifica se o alterar foi selecionado pelo usuario, em caso true
        // meu codigo
        /*const listaAtualizada = props.listaDeProdutos.map((item) =>{  // aqui ele está iterando toda a lista de produto na listaAtualizada, atraves da função .map
          return item.codigo === produto.codigo ? produto : item // aqui está verificando se o codigo existe, quando achar, ele substitui no mesmo codigo com as alterações
        });
        props.setListaDeProdutos(listaAtualizada);*/ // aqui ele atualiza o estado da lista, depois de ser alterada
        // codigo professor
        props.setListaDeProdutos(props.listaDeProdutos.map((item) => {
          if (item.codigo !== produto.codigo)
              return item
          else
              return produto
         }));
        props.setModoEdicao(false);
        props.setProdutoSelecionado({codigo: 0,
          descricao: "",
          precoCusto: 0,
          precoVenda: 0,
          qtdEstoque: 0,
          urlImagem: "",
          validade:""});
          props.setExibirTabela(true);
        
      }
      else{// adiciona um novo produto
        //cadastrar o produto
       props.setListaDeProdutos([...props.listaDeProdutos, produto]);
      //exibir tabela com o produto incluido
        
      }
      props.setExibirTabela(true);
    }
    else {
      setFormValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  function manipularMudanca(evento) {
    
    const elemento = evento.target.name;
    const valor = evento.target.value;
    setProduto({...produto, [elemento]: valor });
  }
  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      <Row className="mb-4">
        <Form.Group as={Col} md="4">
          <Form.Label>Código</Form.Label>
          <Form.Control
            required
            type="text"
            id="codigo"
            name="codigo"
            value={produto.codigo}
            onChange={manipularMudanca}
            disabled ={props.modoEdicao} // quando o estado for true ou readOnly={props.modoEdicao} 
          />
          <Form.Control.Feedback type='invalid'>Por favor, informe o código do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            required
            type="text"
            id="descricao"
            name="descricao"
            value={produto.descricao}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a descrição do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="4">
          <Form.Label>Preço de Custo:</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="precoCusto">R$</InputGroup.Text>
            <Form.Control
              type="text"
              id="precoCusto"
              name="precoCusto"
              value={produto.precoCusto}
             onChange={manipularMudanca}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de custo!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Preço de Venda:</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="precoVenda">R$</InputGroup.Text>
            <Form.Control
              type="text"
              id="precoVenda"
              name="precoVenda"
              value={produto.precoVenda}
              onChange={manipularMudanca}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de venda!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Qtd em estoque:</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="qtdEstoque">+</InputGroup.Text>
            <Form.Control
              type="text"
              id="qtdEstoque"
              name="qtdEstoque"
              value={produto.qtdEstoque}
              onChange={manipularMudanca}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a quantidade em estoque!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12">
          <Form.Label>Url da imagem:</Form.Label>
          <Form.Control
            required
            type="text"
            id="urlImagem"
            name="urlImagem"
            value={produto.urlImagem}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a url da imagem do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12">
          <Form.Label>Válido até:</Form.Label>
          <Form.Control
            required
            type="text"
            id="validade"
            name="validade"
            value={produto.validade}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">Por favor, informe a data de validade do produto!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mt-2 mb-2'>
        <Col md={1} className='mr-2'>
          <Button type="submit">{props.modoEdicao ? "Alterar":"Confirmar"}</Button>
        </Col>
        <Col md={{ offset: 1 }}>
          <Button onClick={() => {
            props.setExibirTabela(true);
          }}>Voltar</Button>
        </Col>
      </Row>
    </Form>
  );

}
