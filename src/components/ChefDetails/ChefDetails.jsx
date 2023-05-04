import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recepies from '../Recepies/Recepies';

const ChefDetails = () => {

    const chefsdata = useLoaderData();
    const { chef_name, chef_picture, likes, num_of_recipes, years_of_experience, description, recepies } = chefsdata;
    return (
        <div className='container'>
            <div className='mt-5'>
                <h2 className='text-center mb-5 fw-bold'>Chef All Details</h2>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className='card'><img src={chef_picture} alt="" /></div>
                    </div>
                    <div className="col-md-6">
                        <div className="card " >
                            <div className="card-body" style={{ height: "420px" }}>
                                <h3 className="card-title text-center mt-2">{chef_name}</h3>
                                <h5 className='mt-4'>{description}</h5>
                                <p className="card-text mt-4">Total Recepies: {num_of_recipes} item</p>
                                <p className="card-text">Experiences: {years_of_experience} Years</p>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p ><span className='fw-bold'> Likes:- </span>{likes}</p>
                                    <a href="#" class="btn swin-btn">Favourite</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='mt-4 mb-5 text-center fw-bold'>Chef Three Recepie</h2>
                <div className='row'>
                    {chefsdata.recipes.map(recepie =>
                        <Recepies
                            recepie={recepie}
                        />
                    )}
                </div>
            </div>
        </div >
        
    );
};

export default ChefDetails;