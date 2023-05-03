import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingelChef = ({ chef }) => {
    console.log(chef);
    const { chef_name, chef_picture, id, likes, num_of_recipes, years_of_experience } = chef
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        Experience: {years_of_experience} years
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingelChef;