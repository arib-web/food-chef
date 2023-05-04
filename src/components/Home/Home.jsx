import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import Chefs from '../Chefs/Chefs';

const Home = () => {
    return (
        <div>
            <div className='banner-bg'>
                <Container>
                    <Row className='pb-5'>
                        <Col lg={12}>
                            <div className="intro-text text-center text-white">
                                <div>
                                    <span>Welcome To Our Restaurant</span>
                                    <h2>Only Quality Food</h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo inventore.</p>
                                </div>
                                <div>
                                    <a href="#" className="btn swin-btn">View Full Menu</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>



    );
};

export default Home;