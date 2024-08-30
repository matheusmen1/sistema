import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Menu(props) {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cliente</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Produtos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Categorias</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Operações" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Venda</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Relátorios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Estoque</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Vendas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Compras</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="home">Sobre</Nav.Link>
                        <Nav.Link href="sair">Sair</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}