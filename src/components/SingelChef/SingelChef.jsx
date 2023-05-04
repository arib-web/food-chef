import React from 'react';
import { Link } from 'react-router-dom';

const SingelChef = ({ chef }) => {
    const { chef_name, chef_picture, id, likes, num_of_recipes, years_of_experience } = chef
    return (
        <div className='col-md-4'>
            <div className="card">
                <img src={chef_picture} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{chef_name}</h5>
                    <p>Experience: {years_of_experience} years</p>
                    <p>Number of recepieces: {num_of_recipes}</p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p ><span className='fw-bold'> Likes:- </span>{likes}</p>
                        <Link to={`/chef/${id}`} className="btn swin-btn">View Recepie</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingelChef;