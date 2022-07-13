import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Signup.css'

const Signup = () => {
    return (
        <>
            <h1 className="display-1">Sign UP</h1>
            <Form className="signup-form">
                <Form.Group as={Row} className="signup-input">
                    <Col md={{span:'1', offset:'2'}}>
                    <Form.Label>Full Name</Form.Label>
                    </Col>
                    <Col md={{span:'5', offset:'1'}}>
                    <Form.Control type="text" placeholder="Enter your name" required></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="signup-input">
                    <Col md={{span:'1', offset:'2'}}>
                    <Form.Label>Location</Form.Label>
                    </Col>
                    <Col md={{span:'5', offset:'1'}}>
                    <Form.Control type="text" placeholder="Enter your location" required></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="signup-input">
                    <Col md={{span:'1', offset:'2'}}>
                    <Form.Label>Email</Form.Label>
                    </Col>
                    <Col md={{span:'5', offset:'1'}}>
                    <Form.Control type="email" placeholder="Enter your email address" required></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="signup-input">
                    <Col md={{span:'1', offset:'2'}}>
                    <Form.Label>Username</Form.Label>
                    </Col>
                    <Col md={{span:'5', offset:'1'}}>
                    <Form.Control type="text" placeholder="Enter username" required></Form.Control>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="signup-input">
                    <Col md={{span:'1', offset:'2'}}>
                    <Form.Label>Password</Form.Label>
                    </Col>
                    <Col md={{span:'5', offset:'1'}}>
                    <Form.Control type="text" placeholder="Enter your password" required></Form.Control>
                    </Col>
                </Form.Group>

                <Col md={{span:'5', offset:'3'}}>
                    <Button variant="primary" type="submit">Sign up</Button>
                </Col>
            </Form>
        </>
    )
}

export default Signup