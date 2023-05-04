import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recepies = ({ recepie }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recepie;
    console.log(recepie);
    return (
        <div className='col-md-4'>
            <div className="card" style={{height:"100%"}}>
                <img className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title text-center">{recipe_name}</h3>
                    <h5 className='fw-bold'>Ingredients:-</h5>
                    <ul className='ps-4'>
                        <li>1.{ingredients[0]}</li>
                        <li>2.{ingredients[1]}</li>
                        <li>3.{ingredients[2]}</li>
                        <li>4.{ingredients[3]}</li>
                        <li>5.{ingredients[4]}</li>
                    </ul>
                    <p className='mt-3'><span className='fw-bold'>Cooking Method:</span>{cooking_method}</p>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Rating className='text-warning'
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <a  class="btn swin-btn">Favourite</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recepies;