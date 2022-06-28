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
                                    <div style={{color:"grey", opacity:0.7, fontFamily:"cursive"}}>{post.chats.messageText}</div>
                                    
                                </div>
                                <Badge bg="info" pill>
                                    {post.chats.messageCount}
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