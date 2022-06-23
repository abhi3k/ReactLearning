import React, { Component } from 'react'
import './Todo.css'
import { Container, Form, Col, Row, InputGroup, Button, ListGroup } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline, MdOutlineAddBox } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputToDo: '',
            toDoList: [],
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
                            job.text = inputToDo
                        return job
                    }), inputToDo: '',
                    editingIndex: '',
                    isEditing: false,
                }))
            } else {
                this.setState((prevState) => ({
                    toDoList: [...prevState.toDoList, {text : inputToDo, completed: false}],
                    inputToDo: '',
                }))
            }
        }
    }

    editTodo = (index) => {
        this.setState((prevState) => ({
            inputToDo: prevState.toDoList[index].text,
            isEditing: true,
            editingIndex: index
        }))
    }

    deleteTodo = (index) => {
        this.setState((prevState) => ({
            toDoList: prevState.toDoList.filter((job, idx) => idx !== index)
        }))
    }

    addTodo = (inputIndex) => {
        this.setState((prevState) => ({
            toDoList : prevState.toDoList.map((job, idx) => {
                if(idx === inputIndex){
                    job.completed = true
                }
                return job
            })
        }))
    }


    render() {
        const { inputToDo, toDoList, isEditing } = this.state
        return (
            <Container style={{ margin: "20px auto" }}>
                <Col md={{ span: 4, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <Form.Control size="lg" type="text" value={inputToDo} placeholder="Enter To-Do" className="input-to-do" onChange={event => this.setState({ inputToDo: event.target.value })}></Form.Control>
                        <Button
                            variant="dark" id="btn-1"
                            onClick={this.addOrUpdate}
                            className="input-to-do-btn">
                                {isEditing ?<AiOutlineCheckCircle />:<MdOutlineAddBox />}
                        </Button>
                    </InputGroup>
                    <ListGroup className="to-do-list">
                        {
                            toDoList.map((job, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col xs={9} className={job.completed && 'completed'}>
                                            {job.text}
                                        </Col>
                                        <Col xs={3} className="action-btn">
                                            <Button variant="warning" size="sm" onClick={() => this.editTodo(index)}disabled={job.completed}><FaEdit /></Button>
                                            <Button variant="danger" size="sm" onClick={() => this.deleteTodo(index)}><MdDeleteOutline /></Button>
                                            <Button variant="success" size="sm" disabled={job.completed} onClick={() => {this.addTodo(index)}}><IoCheckmarkDoneCircleOutline /></Button>
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