import React from 'react'
import { Container, Navbar, Nav, } from 'react-bootstrap'
import photoLogo from '../assets/photo-app-logo.png'

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={photoLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    Photo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent