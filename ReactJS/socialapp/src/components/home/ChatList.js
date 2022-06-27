import React from 'react'
import { Col, Badge, ListGroup } from 'react-bootstrap'
import './Home.css'

const ChatList = ({ posts }) => {
    return (
        <>
            <Col md={3}>
                <ListGroup as="ul">
                    {
                        posts.map(post => (
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start chat-list-item"
                                key = { post.id }
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{post.author}</div>
                                    Cras justo odio
                                </div>
                                <Badge bg="info" pill>
                                    5
                                </Badge>
                            </ListGroup.Item>

                        ))
                    }
                </ListGroup>
            </Col>
        </>
    )
}

export default ChatList