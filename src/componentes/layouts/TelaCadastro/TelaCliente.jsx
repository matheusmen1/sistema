import FormClientes from "./Formularios/Clientes";
import Pagina from "../Pagina";
import { Container } from "react-bootstrap";
export default function TelaCliente(props){
    return(
      <Container>
        <Pagina>
            <FormClientes/>
        </Pagina>
      </Container>
        
    )
}