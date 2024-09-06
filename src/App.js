import TelaCliente from "./componentes/layouts/TelaCadastro/TelaCliente";
import TelaCategoria from "./componentes/layouts/TelaCadastro/TelaCategoria";
import TelaFornecedor from "./componentes/layouts/TelaCadastro/TelaFornecedor";
import TelaUsuario from "./componentes/layouts/TelaCadastro/TelaUsuario";
import TelaProduto from "./componentes/layouts/TelaCadastro/TelaProduto";
import TelaMenu from "./componentes/layouts/TelaCadastro/TelaMenu";
import Tela404 from "./componentes/layouts/TelaCadastro/Tela404";
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {
            //A ordem das rotas é importante
          }
          <Routes>
            <Route path="/produto" element={<TelaProduto/>}/>
            <Route path="/categoria" element={<TelaCategoria/>}/>
            <Route path="/cliente" element={<TelaCliente/>}/>
            <Route path="/fornecedor" element={<TelaFornecedor/>}/>
            <Route path="/usuario" element={ <TelaUsuario/>}/>
            <Route path="/" element={<TelaMenu/>}/>
            <Route path="*" element={<Tela404/>}/>
          </Routes>
        </BrowserRouter>
      </div>
   
  );
}

export default App;
