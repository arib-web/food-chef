import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div className='banner-bg'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div class="intro-text text-center text-white">
                            <div>
                                <span>Welcome To Our Restaurant</span>
                                <h2>Only Quality Food</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo inventore.</p>
                            </div>
                            <div>
                                <a href="#" class="btn swin-btn">View Full Menu</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;