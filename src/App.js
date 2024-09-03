import Pagina from "./componentes/layouts/Pagina";
import TelaCliente from "./componentes/layouts/TelaCadastro/TelaCliente";
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
          <h1>Esta é a página de cadastro de produto</h1>

          <br></br>
        </Pagina>

        <Pagina>
          <h1>Esta é a página de cadastro de fornecedores</h1>

          <br></br>
        </Pagina>

        <Pagina>
          <h1>Esta é a página de cadastro de categorias</h1>

          <br></br>
        </Pagina>
      </div>
    </div>
  );
}

export default App;
