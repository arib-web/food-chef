import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='header'>
            <Container >
                <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>

                        <NavLink to="/blog"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                    </Nav>
                    <div>
                        <Button  className='swin-btn'>Login</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;