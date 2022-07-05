import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NewsList.css'

const NewsList = ({ newsList }) => {
    return (
        <Container>
            <Row>
                {
                    newsList && newsList.map((singleNews, index) => (
                        <Col md={4} key={index} className="single-news">

                            <Card className="text-center">
                                <Card.Img variant="top" src={
                                        singleNews.urlToImage ? singleNews.urlToImage : "https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"} alt="single-dp" />
                                <Card.Body>
                                    <Card.Title>{singleNews.title && singleNews.title.length > 100 ? `${singleNews.title.slice(0,100)}...`: singleNews.title}</Card.Title>
                                    <Card.Text>
                                        {singleNews.description && singleNews.description.length > 150 ? `${singleNews.description.slice(0,120)}...` : singleNews.description}
                                    </Card.Text>
                                    <Link className="btn btn-dark" to={`/news/${index}`} variant="dark">Read More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default NewsList