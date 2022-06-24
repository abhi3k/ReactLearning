import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import axios from 'axios'
import './Photo.css'

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
        <Container>
            <Row>
                {
                    pic.length ?
                        (
                            pic.map(photo => (
                                <Col md={3} key={photo.id} className="single-pic">
                                    <Card>
                                        <Card.Header>{photo.author}</Card.Header>
                                        <Card.Img variant="top" src={photo.download_url} className="photo-img" />
                                        <Card.Body className="outer-btn">
                                            <a className="btn btn-dark" href={photo.url}>View Source</a>
                                            <a className="btn btn-dark" href={photo.download_url}>View Original</a>
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