import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import baymaxImage from "../assets/images/trending/baymax.jpg"
import bharatImage from "../assets/images/trending/bharat.jpg"
import conjuringImage from "../assets/images/trending/conjuring 2.jpg"
import jahanamImage from "../assets/images/trending/jahanam.jpg"
import squidgameImage from "../assets/images/trending/squidgame.jpeg"
import thorloveImage from "../assets/images/trending/thorlove.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-page">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={baymaxImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BAYMAX</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={bharatImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Bharat</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={conjuringImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Conjuring 2</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={jahanamImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Perempuan Tanah Jahanam</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={squidgameImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Squid Game</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={thorloveImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Thor Love and Thunder</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional
                                        content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending