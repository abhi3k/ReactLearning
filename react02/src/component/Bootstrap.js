import React, { Component } from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'

class Bootstrap extends Component {
    render() {
        return (
            <>
                <h1>React BootStrap</h1>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br/>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
            </>
        )
    }
}

export default Bootstrap