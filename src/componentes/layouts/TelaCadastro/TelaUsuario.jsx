import FormUsuario from "./Formularios/Usuario"
import Pagina from "../Pagina"
import { Container } from "react-bootstrap"
export default function TelaUsuario(props) {
    return (

        <Container>
            <Pagina>
                <FormUsuario />
            </Pagina>
        </Container>

    )
}