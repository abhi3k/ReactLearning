import React, { Component } from 'react'
import './Todo.css'
import { Container, Form, Col, Row, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline, MdOutlineAddBox } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'

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
            ],
            isEditing: false,
            editingIndex: ''
        }
    }

    addOrUpdate = () => {
        const { inputToDo, isEditing, editingIndex } = this.state
        if (inputToDo) {
            if (isEditing) {
                this.setState((prevState) => ({
                    toDoList: prevState.toDoList.map((job, idx) => {
                        if (idx === editingIndex)
                            job = inputToDo
                        return job
                    }), inputToDo: ''
                }))
            } else {
                this.setState((prevState) => ({
                    toDoList: [...prevState.toDoList, inputToDo],
                    inputToDo: '',
                }))
            }
        }
    }

    editTodo = (index) => {
        this.setState((prevState) => ({
            inputToDo: prevState.toDoList[index],
            isEditing: true,
            editingIndex: index
        }))
    }

    deleteTodo = (index) => {
        this.setState((prevState) => ({
            toDoList: prevState.toDoList.filter((job, idx) => idx !== index)
        }))
    }


    render() {
        const { inputToDo, toDoList, isEditing } = this.state
        return (
            <Container style={{ margin: "20px auto" }}>
                <Col md={{ span: 4, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" value={inputToDo} placeholder="Enter To-Do" onChange={event => this.setState({ inputToDo: event.target.value })}></Form.Control>
                        <Button
                            variant="outline-secondary" id="btn-1"
                            onClick={this.addOrUpdate}>{isEditing ?<AiOutlineCheckCircle />:<MdOutlineAddBox />}</Button>
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
                                            <Button variant="warning" size="sm" onClick={() => this.editTodo(index)}><FaEdit /></Button>
                                            <Button variant="danger" size="sm" onClick={() => this.deleteTodo(index)}><MdDeleteOutline /></Button>
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