import React, { Component } from 'react'
import { Container, Form, Col, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { FiDelete } from 'react-icon/fi'

class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
            toDoList : ['revise JavaScript', 'asynchronousJS', 'practice array methods', 'revise react state']
        }
    }

    render() {
        const { toDoList } = this.state
        return (
            <Container style={{ margin: '20px auto' }}>
                <Col md={{ span: 4, offser: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" placeholder="Large Text"></Form.Control>
                        <Button variant="outline-secondary" id="btn-1">+</Button>
                    </InputGroup>
                    <ListGroup>
                        {
                            // toDoList.
                        }
                        <ListGroup.Item> Details are here
                            <Col ms={9}></Col>
                            <Col ms={3}></Col>
                            <Button variant="warning"><FaEdit /></Button>
                            <Button variant="danger">Edit</Button>
                        </ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Container>
        )
    }
}

export default Todo