import React from 'react';

const Recepies = ({recepie}) => {
    const {recipe_name}=recepie;
    console.log(recepie);
    return (
        <div className='col-md-4'>
            <div className="card">
                <img  className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title text-center">{recipe_name}</h5>
                    <p>Exper years</p>
                    <p>Number of rees</p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p ><span className='fw-bold'> Likes:- </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recepies;