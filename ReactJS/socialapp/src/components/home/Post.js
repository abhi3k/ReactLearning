import React from 'react'
import { Row, Col, Card, Spinner, Badge, Button } from 'react-bootstrap'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { FaRegComment, FaUserCircle } from 'react-icons/fa'

const Post = ({ posts, setPosts }) => {

    const toggleLikeCount = (postId) => {
        let updatedPost = posts.map(post => {
            if (post.id === postId) {
                if (post.isLikedByCurrentUser) {
                    post.likeCount = post.likeCount - 1
                    post.isLikedByCurrentUser = false
                } else {
                    post.likeCount = post.likeCount + 1
                    post.isLikedByCurrentUser = true
                }
            }
            return posts
        })
        setPosts(updatedPost)
    }

    const incrementCommentCount = (postId) => {
        let updatePost = posts.map(post => {
            if (post.id === postId) {
                post.commentCount = post.commentCount + 1
            }
            return post
        })
        setPosts(updatePost)
    }



    return (
        <>
            <Col md={6}>
                <Row>
                    {
                        posts.length ?
                            (
                                posts.map(post => (
                                    <Col md={12} key={post.id} className="single-pic">
                                        <Card>
                                            <Card.Header className="post-header">
                                                <div>
                                                    <FaUserCircle /> {post.author}
                                                </div>
                                                <p className="post-time">{post.text}</p>
                                            </Card.Header>
                                            <Card.Img variant="top" src={post.download_url} className="photo-img" />
                                            <Card.Body>
                                                <p className="lead">{post.time}</p>
                                                <div>
                                                    <Col md={{ span: '7', offset: '5' }} className="action-btn-outer">
                                                        <Button variant="light" onClick={() => { toggleLikeCount(post.id) }}>
                                                            {post.isLikedByCurrentUser ? <AiFillLike /> : <AiOutlineLike />}
                                                            {' '}
                                                            <Badge pill bg="info">
                                                                {post.likeCount}
                                                            </Badge>
                                                        </Button>
                                                        <Button variant="light" onClick={() => incrementCommentCount(post.id)}>
                                                            <FaRegComment />
                                                            {' '}
                                                            <Badge pill bg="info">
                                                                {post.commentCount}
                                                            </Badge>
                                                        </Button>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <div className="spinner-wrapper">
                                    <Spinner animation="border" role="status"></Spinner>
                                </div>
                            )}
                </Row>
            </Col>
        </>
    )
}

export default Post