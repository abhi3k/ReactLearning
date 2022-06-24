import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Spinner, Badge, Button } from 'react-bootstrap'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment, FaUserCircle } from 'react-icons/fa'
import axios from 'axios'
import './Post.css'
import dummyPostText from "../../assets/dummyPostText.json"
import dummyPostTime from "../../assets/dummyPostTime.json"

const Photo = () => {

    const [pic, setPic] = useState([])

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const res = await axios.get("https://picsum.photos/v2/list")
                setPic(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getPhotos()
    }, [])


    return (
        <Container className="posts-container">
            <Row>
                {
                    pic.length ?
                        (
                            pic.map(photo => (
                                <Col md={3} key={photo.id} className="single-pic">
                                    <Card>
                                        <Card.Header className="post-header">
                                            <div>
                                                <FaUserCircle /> {photo.author}
                                            </div>
                                            <p className="post-time">{dummyPostTime[Math.ceil(Math.random()*5)]}</p>
                                        </Card.Header>
                                        <Card.Img variant="top" src={photo.download_url} className="photo-img" />
                                        <Card.Body>
                                            <p className="lead">{dummyPostText[Math.ceil(Math.random()*3)]}</p>
                                            <Row>
                                                <Col md={{ span: '7', offset: '5' }} className="action-btn-outer">
                                                    <Button variant="light">
                                                        <AiOutlineLike />
                                                        {' '}
                                                        <Badge pill bg="info">
                                                            256
                                                        </Badge>
                                                    </Button>
                                                    <Button variant="light">
                                                        <FaRegComment />
                                                        {' '}
                                                        <Badge pill bg="info">
                                                            25
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
        </Container>
    )
}

export default Photo


  // useEffect(() => {
    //     axios.get('https://picsum.photos/v2/list')
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // },[])