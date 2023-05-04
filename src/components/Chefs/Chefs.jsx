import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingelChef from '../SingelChef/SingelChef';

const Chefs = () => {
    const { chefs } = useLoaderData();
    // console.log(chefs);
    return (
            <div className='container'>
                <h2 className='fw-bold mt-5 mb-5 text-center'>Our Chefs</h2>
                <div className='row g-4 mb-5'>
                        {chefs.map(chef =>
                            <SingelChef
                                key={chef.id}
                                chef={chef}
                            />
                        )}
                    
                </div>
            </div>
    );
};

export default Chefs;