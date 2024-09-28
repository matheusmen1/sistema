import { Alert } from "react-bootstrap";
import FormCadUsuario from "./Formularios/FormCadUsuario";
import Pagina from "../Pagina";
import { useState } from "react";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios"
import { usuarios } from "../../../dados/mockUsuarios"

export default function TelaCadastroUsuario(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaUsuarios, setListaUsuarios] = useState(usuarios);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        codigo:0,
        cpf:"",
        nome:"",
        nascimento:"",
        cidade:"",
        cep:"",
    });

   
    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro de Usuario
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaUsuarios listaUsuarios={listaUsuarios}
                                        setListaUsuarios={setListaUsuarios} 
                                        setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setUsuarioSelecionado={setUsuarioSelecionado} /> :
                        <FormCadUsuario listaUsuarios={listaUsuarios}
                                         setListaUsuarios={setListaUsuarios}
                                         setExibirTabela={setExibirTabela}
                                         usuarioSelecionado={usuarioSelecionado}
                                         setUsuarioSelecionado={setUsuarioSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}

                                         />
                }
            </Pagina>
        </div>
    );
}