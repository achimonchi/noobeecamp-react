import React from 'react';
import { Col, Container, Row } from 'reactstrap';


export default function Loading(){
    return (
        <section id="loading" className="mt-5">
            <Container>
                <Row>
                    <Col>
                        <div className="content">
                            <h3>Loading ...</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}