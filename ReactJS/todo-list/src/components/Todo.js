import React, { Component } from 'react'
import './Todo.css'
import { Container, Form, Col, Row, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline, MdOutlineAddBox } from 'react-icons/md'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputToDo: '',
            toDoList: [
                'revise JavaScript',
                'asynchronousJS',
                'practice array methods',
                'revise react state'
            ]
        }
    }

    render() {
        const { inputToDo, toDoList } = this.state
        return (
            <Container style={{ margin: "20px auto" }}>
                <Col md={{ span: 4, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" value={inputToDo} placeholder="Enter To-Do" onChange={event => this.setState({ inputToDo: event.target.value })}></Form.Control>
                        <Button
                            variant="outline-secondary" id="btn-1"
                            onClick={() =>
                                this.setState(prevState => ({
                                     toDoList: [...prevState.toDoList, inputToDo]
                                    }))
                                }><MdOutlineAddBox /></Button>
                    </InputGroup>
                    <ListGroup className="to-do-list">
                        {
                            toDoList.map((job, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={9}>
                                            {job}
                                        </Col>
                                        <Col md={3} className="action-btn">
                                            <Button variant="warning" size="sm"><FaEdit /></Button>
                                            <Button variant="danger" size="sm"><MdDeleteOutline /></Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Container>
        )
    }
}

export default Todo