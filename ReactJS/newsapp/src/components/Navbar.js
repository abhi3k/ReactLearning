import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">News App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign In</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent