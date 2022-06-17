import React, { Component } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

class Products extends Component {
    constructor(props){
        super(props)

        this.state = {
            product : [
                
            ]
        }
    }
    render() {
        return (
            <>
                <Container>
                    <Row >
                        <h1 className="display-1">Welcome to this Shopping App</h1>
                        <p className="lead">Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecate</p>
                        <Col md={4} xs={12} style={{ margin: "10px 0px" }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="http://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12} style={{ margin: "10px 0px" }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00198_01_studio_wireless_headphones_matte_1016367.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12} style={{ margin: "10px 0px" }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://i5.walmartimages.com/asr/8e721600-92c0-4e76-8a03-97b29a94719b_1.250e2ee75deb5a3682986e809f76e485.jpeg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12} style={{ margin: "10px 0px" }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://i5.walmartimages.com/asr/8e721600-92c0-4e76-8a03-97b29a94719b_1.250e2ee75deb5a3682986e809f76e485.jpeg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12} style={{ margin: "10px 0px" }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://i5.walmartimages.com/asr/8e721600-92c0-4e76-8a03-97b29a94719b_1.250e2ee75deb5a3682986e809f76e485.jpeg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12} style={{ margin: "10px 0px" }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src="https://i5.walmartimages.com/asr/3809c7e2-4a26-4da2-8fb7-1712452eb3d8_1.0c6e3138e54774b8b346c26eab810896.jpeg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Products