import React, { Component } from 'react'
import { Container, Navbar as BootNav, Nav,} from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return (
            <>
                <BootNav collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <BootNav.Brand href="#home">React-Bootstrap</BootNav.Brand>
                        <BootNav.Toggle aria-controls="responsive-navbar-nav" />
                        <BootNav.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#aboutus">About Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#signup">Sign Up</Nav.Link>
                                <Nav.Link eventKey={2} href="#login">
                                    Log In
                                </Nav.Link>
                            </Nav>
                        </BootNav.Collapse>
                    </Container>
                </BootNav>
            </>
        )
    }
}

export default Navbar