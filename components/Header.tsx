import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            id='header'
            fixed='top'
            expand="md"
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand href="#" onClick={() => { setExpanded(false); removeClass() }}>Sp.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setExpanded(expanded ? false : "expanded"); }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
                        <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function removeClass() {
    let nav = document.getElementsByClassName('navbar-nav')[0].children;
    for (let i = 0; i < nav.length; i++) {
        if (nav[i].classList.contains('active')) {
            nav[i].classList.remove('active');
        }
    }
}