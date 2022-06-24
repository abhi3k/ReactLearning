import React from 'react'
import { Container, Navbar, Nav, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import photoLogo from '../assets/photo-app-logo.png'

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
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
                        <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent