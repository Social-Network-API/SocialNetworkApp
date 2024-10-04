// src/components/Home.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Usando Bootstrap para estilos

const Home = () => {
    return (
        <Container fluid className="text-center" style={{ padding: "50px" }}>
            <Row>
                <Col>
                    <h1>Bienvenido a la Red Social</h1>
                    <p>Conéctate con tus amigos y comparte tus momentos.</p>
                    <Button variant="primary" size="lg">Comienza Ahora</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;