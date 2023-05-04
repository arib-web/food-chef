import React from 'react';
import './LoadiSpinner.css'
import { FaGrimace } from 'react-icons/fa';

const LoadingSpinner = () => {
    return (
        <div className=' mt-5'>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <p className='text-xxl'>L <FaGrimace></FaGrimace> ading....</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;