import React from 'react';
import './Errorpage.css'
import { Link, useRouteError } from 'react-router-dom';
import { FaBeer, FaGrimace, FaStar } from 'react-icons/fa';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='container'>
            <div className='d-flex align-items-center p-5 '>
                <div className='container d-flex align-items-center flex-column justify-content-center px-5 mx-auto my-5'>
                    <FaGrimace className='error-logo' />
                    <div className='text-center'>
                        <h2 className='mb-5 '>
                            <span className=''>Error</span>
                            {status || 404}
                        </h2>
                        <p className=' text-danger mb-5'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn btn-danger'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;