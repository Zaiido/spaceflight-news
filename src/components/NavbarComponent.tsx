import { Navbar, Container } from "react-bootstrap"
import Nav from "react-bootstrap/esm/Nav"
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to={"/"}>
                            <div className="nav-link">Home</div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>)
}

export default NavbarComponent

