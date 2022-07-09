import React from 'react'
import './newsList/NewsList.css'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SingleNews = () => {
    const { id } = useParams()
    const newsList = useSelector(state => state.news.newsList)
    let singleNews = newsList && id && newsList[id]
    return (
        <>
            <Container>
                <Row>
                    {
                        singleNews &&
                        (
                            <Col md={{ span: 4, offset: 4 }} className="single-news">

                                <Card className="text-center">
                                    <Card.Img variant="top" src={
                                        singleNews.urlToImage ? singleNews.urlToImage : "https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"} alt="single-dp" />
                                    <Card.Body>
                                        <Card.Title>{singleNews.title && singleNews.title.length > 100 ? `${singleNews.title.slice(0, 100)}...` : singleNews.title}</Card.Title>
                                        <Card.Text>
                                            {singleNews.description && singleNews.description.length > 150 ? `${singleNews.description.slice(0, 120)}...` : singleNews.description}
                                        </Card.Text>
                                        <Button variant="dark">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    )
}

export default SingleNews