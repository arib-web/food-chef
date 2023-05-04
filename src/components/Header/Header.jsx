import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Navbar className='header' bg="dark" expand="lg">
            <Container >
                <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ background: '#fff'}} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>

                        <NavLink to="/blog"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                        <NavLink to="/chefs"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>chefs</NavLink>
                    </Nav>
                    <div className='d-flex align-items-center justify-content-center'>
                        {
                            user && <img className='user-img me-2' src={user.photoURL} alt="" /> 
                        }
                        {user?<Link ><Button onClick={handleLogout} className='swin-btn'>LogOut</Button></Link>:
                        <Link to='/register'><Button className='swin-btn'>Login</Button></Link>}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;