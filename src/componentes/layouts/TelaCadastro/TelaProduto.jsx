import { Container, Alert } from "react-bootstrap";
import Pagina from "../Pagina";
import FormProduto from "./Formularios/Produto";
import { useState } from "react"
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../../dados/mockProdutos";
export default function TelaProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos, setListaDeProdutos] = useState(produtos);
    const [produtoSelecionado, setProdutoSelecionado] = useState(false);

    return (
        <Container>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center" varaint ="success">
                    <h2>
                       Cadastro de Produto 
                    </h2>
                </Alert>
                {exibirTabela ? <TabelaProdutos listaDeProdutos={listaDeProdutos} setListaDeProdutos={setListaDeProdutos} setExibirTabela={setExibirTabela} setProdutoSelecionado={setProdutoSelecionado}/> :
                        <FormProduto listaDeProdutos={listaDeProdutos} setListaDeProdutos={setListaDeProdutos} setExibirTabela={setExibirTabela} produtoSelecionado={produtoSelecionado}/>}

            </Pagina>
        </Container>
    );
}