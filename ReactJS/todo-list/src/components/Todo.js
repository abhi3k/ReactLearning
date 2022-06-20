import React, { Component } from 'react'
import { Container, Form, Col, Row, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline, MdOutlineAddBox } from 'react-icons/md'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoList: ['revise JavaScript', 'asynchronousJS', 'practice array methods', 'revise react state']
        }
    }

    render() {
        const { toDoList } = this.state
        return (
            <Container>
                <Col md={{ span: 4, offser: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" placeholder="Large Text"></Form.Control>
                        <Button variant="outline-secondary" id="btn-1"><MdOutlineAddBox/></Button>
                    </InputGroup>
                    <ListGroup>
                        {
                            // toDoList.
                        }
                        <ListGroup.Item>
                            <Row>
                                <Col ms={9}>
                                    Details are here
                                </Col>
                                <Col ms={3}>
                                    <Button variant="warning"><FaEdit /></Button>
                                    <Button variant="danger"><MdDeleteOutline /></Button>
                                </Col>
                            </Row>
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