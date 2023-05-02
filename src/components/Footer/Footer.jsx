import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {  FaCopyright, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-secondary footer-bottom'>
            <Container>
                    <Row>
                        <Col lg={6}>
                            <p className='text-white'><FaCopyright className='text-white'></FaCopyright> Copyright 2023 ,Arib Mahmud</p>
                        </Col>
                        <Col lg={6}>
                            <ul class="icon-bottom d-flex justify-content-end">
                                <li ><i><FaFacebook className='fb'></FaFacebook></i></li>
                                <li ><i><FaTwitter className='tw'></FaTwitter></i></li>
                                <li ><i><FaPinterest className='pin'></FaPinterest> </i></li>
                                <li ><i><FaYoutube className='youtube'></FaYoutube></i></li>
                            </ul>
                        </Col>
                    </Row>

            </Container>
        </div>
    );
};

export default Footer;