import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import './Login.css'
import SocialButton from '../SocialButton/SocialButton';

const Login = () => {
    const { loginUser } = useContext(AuthContex)
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from;



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError(null)

        loginUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                form.reset();
                toast.success('Successfully Login!')

                setTimeout(() => {
                    if (from) {
                        navigate(from)
                    }
                    else {
                        navigate('/')
                    }
                }, 2000)
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }

    return (
        <div className='login-bg'>
            <Container >
                <div className='card '>
                    <Form onSubmit={handleLogin} className='login-form'>
                        <h2 className='mb-4 text-center'>Please Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <br />
                        <Form.Text className="text-secondary">
                            Don't Have an Account? <Link to="/register">Register</Link>
                        </Form.Text>
                        <Form.Text className="text-success">
                            {error && <p className='text-center text-danger mb-2'>{error}</p>}
                        </Form.Text>
                        <SocialButton ></SocialButton>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Login;