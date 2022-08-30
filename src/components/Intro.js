import {Col, Container, Row, Button } from "react-bootstrap";
const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex text-center justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="titles">TANPA KARCIS</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
        </div>
    )
}

export default Intro