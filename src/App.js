import Pagina from "./componentes/layouts/Pagina";
import TelaCliente from "./componentes/layouts/TelaCadastro/TelaCliente";
import TelaCategoria from "./componentes/layouts/TelaCadastro/TelaCategoria";
import TelaFornecedor from "./componentes/layouts/TelaCadastro/TelaFornecedor";
import TelaUsuario from "./componentes/layouts/TelaCadastro/TelaUsuario";
function App() {
  return (
    <div className="App">
      <div className="App">
        <Pagina>
          <h1>Esta é a página de cadasro de cliente</h1>
          <TelaCliente/>
          <br></br>
        </Pagina>
      
        <Pagina>
          <h1>Esta é a página de cadastro de usuario</h1>
          <TelaUsuario/>
          <br></br>
        </Pagina>

        <Pagina>
          <h1>Esta é a página de cadastro de fornecedores</h1>
          <TelaFornecedor/>
          <br></br>
        </Pagina>

        <Pagina>
          <h1>Esta é a página de cadastro de categorias</h1>
          <TelaCategoria/>
          <br></br>
        </Pagina>
      </div>
    </div>
  );
}

export default App;
