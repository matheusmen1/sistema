import FormCategoria from "./Formularios/Categoria"
import Pagina from "../Pagina"
import { Container } from "react-bootstrap"
export default function TelaCategoria(props){
    return(
      <Container>
        <Pagina>
            <FormCategoria/>
        </Pagina>
      </Container>
        
    )
}