import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {  FaCopyright, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-secondary footer-bottom '>
            <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 ' >
                            <p className='text-white'><FaCopyright className='text-white'></FaCopyright> Copyright 2023 ,Arib Mahmud</p>
                        </div>
                        <div className='col-md-6'>
                            <ul className="icon-bottom d-flex justify-content-end">
                                <li ><i><FaFacebook className='fb'></FaFacebook></i></li>
                                <li ><i><FaTwitter className='tw'></FaTwitter></i></li>
                                <li ><i><FaPinterest className='pin'></FaPinterest> </i></li>
                                <li ><i><FaYoutube className='youtube'></FaYoutube></i></li>
                            </ul>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Footer;