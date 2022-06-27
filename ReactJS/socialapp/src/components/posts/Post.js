import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col, Card, Spinner, Badge, Button } from 'react-bootstrap'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment, FaUserCircle } from 'react-icons/fa'
import axios from 'axios'
import './Post.css'
import dummyPostText from "../../assets/dummyPostText.json"
import dummyPostTime from "../../assets/dummyPostTime.json"

const Post = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get("https://picsum.photos/v2/list")
                let resPost = [...res.data]
                let postWithAdditionalDetails = resPost.map(post => {
                    let likeCount = Math.ceil(Math.random()*1000)
                    let commentCount = Math.ceil(Math.random()*25)
                    let text = dummyPostTime[Math.ceil(Math.random()*5)]
                    let time = dummyPostText[Math.ceil(Math.random()*3)]
                    return {
                        ...post,
                        likeCount,
                        commentCount,
                        text,
                        time
                    }
                })
                setPost(postWithAdditionalDetails)
            } catch (err) {
                console.log(err)
            }
        }
        getPosts()
    }, [])

    const toggleLikeCount = (postId) => {
        let updatedPost = post.map(post => {
            if(post.id === postId){
                post.likeCount = post.likeCount + 1
            }
            return post
        })
        setPost(updatedPost)
    }   

    return (
        <Col md={{span:4, offset:4}}>
            <Row>
                {
                    post.length ?
                        (
                            post.map(post => (
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
                                            <Row>
                                                <Col md={{ span: '7', offset: '5' }} className="action-btn-outer">
                                                    <Button variant="light" onClick={() => {toggleLikeCount(post.id)}}>
                                                        <AiOutlineLike />
                                                        {' '}
                                                        <Badge pill bg="info">
                                                            {post.likeCount}
                                                        </Badge>
                                                    </Button>
                                                    <Button variant="light">
                                                        <FaRegComment />
                                                        {' '}
                                                        <Badge pill bg="info">
                                                            {post.commentCount}
                                                        </Badge>
                                                    </Button>
                                                </Col>
                                            </Row>
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
    )
}

export default Post


  // useEffect(() => {
    //     axios.get('https://picsum.photos/v2/list')
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // },[])