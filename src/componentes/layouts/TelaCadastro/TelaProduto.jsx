import { Container } from "react-bootstrap";
import Pagina from "../Pagina";
import FormProduto from "./Formularios/Produto";
export default function TelaProduto(props) {
    return (
        <Container>
            <Pagina>
                <FormProduto />
            </Pagina>
        </Container>
    );
}