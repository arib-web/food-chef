import React, { useContext, useState } from 'react';
import SocialButton from '../SocialButton/SocialButton';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import './Register.css'

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContex)
    const [error, setError] = useState(null)
    const navagate = useNavigate();


    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError(null);

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("password not valid need 8 char ");
            return;
        }
        else if (form.value) {
            setError("Field value required");
            return;
        }

        createUser(email, password, photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                toast.success('Successfully Register!')

                setTimeout(() => navagate('/'), 2000)

                updateUser(name)
                    .then()
                    .catch(error => console.log(error))
                form.reset();
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }

    return (

        <Container className=''>
            <div className='card mt-5 mb-5'>
                <h3 className='text-center'>Please Register</h3>
                <Form onSubmit={handleCreateUser} className='register-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check

                            type="checkbox"
                            name="accept"
                            label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have an Account? <Link to="/login">Login</Link>
                    </Form.Text>
                    <Form.Text className="text-danger">
                        {error && <p className='text-center text-danger mb-2'>{error}</p>}
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Register;