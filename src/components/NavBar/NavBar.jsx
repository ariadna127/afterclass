import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/">Navbar</Link>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/category/celulares">Celulares</Link>
                        <Link to="/category/auriculares">Auriculares</Link>
                        <Link to="/category/notebooks"> Notebooks </Link>
                        <Link to="/contacto"> Contacto </Link>
                    </Nav>
                    <Link to="/cart"><CartWidget/></Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;