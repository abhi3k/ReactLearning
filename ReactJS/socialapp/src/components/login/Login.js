import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Login.css'

const Login = () => {
    return (
        <>
        <h1 className="display-1">Log In</h1>
        <Form className="login-form">
            <Form.Group as={Row} className='login-input'>
                <Col md={{ span: '1', offset: '3' }}>
                    <Form.Label>Username</Form.Label>
                </Col>
                <Col md={{ span: '5', offset: '1' }}>
                    <Form.Control className="text-center" type="email" placeholder="USERNAME" required></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className='login-input'>
                <Col md={{ span: '1', offset: '3' }}>
                    <Form.Label>Password</Form.Label>
                </Col>
                <Col md={{ span: '5', offset: '1' }}>
                    <Form.Control className="text-center" type="password" placeholder="PASSWORD" required></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group className='login-input'>
                <Col md={{ span: '4', offset: '4' }}>
                    <Button variant="primary" type="submit">Login</Button>
                </Col>
            </Form.Group>

        </Form>
        </>

    )
}

export default Login