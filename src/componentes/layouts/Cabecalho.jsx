import {Alert} from "react-bootstrap";
export default function Cabecalho(props){
    //metodo render
    return (
        <Alert className={"text-center"} variant="light">{props.titulo || "Título não fornecido"}</Alert>
    );
}