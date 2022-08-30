import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import drImage from "../assets/images/superhero/dr.jpg"
import gatotImage from "../assets/images/superhero/gatot.jpg"
import hulkImage from "../assets/images/superhero/hulk.jpg"
import ironmanImage from "../assets/images/superhero/ironman.jpg"
import spidermanImage from "../assets/images/superhero/spiderman.jpg"
import endgameImage from "../assets/images/superhero/endgame.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-style">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={drImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dr Strange</Card.Title>
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
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={gatotImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">GATOTKACA</Card.Title>
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
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={hulkImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">HULK</Card.Title>
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
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={ironmanImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Ironman 3</Card.Title>
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
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Spiderman no way home</Card.Title>
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
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={endgameImage} alt="Baymax Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Avenger : EndGame</Card.Title>
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

export default Superhero