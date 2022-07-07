import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">News App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/contactus">Contact Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/count">Count</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="/signup">Sign In</Nav.Link>
                            <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent