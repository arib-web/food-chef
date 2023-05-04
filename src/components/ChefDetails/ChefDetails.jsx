import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recepies from '../Recepies/Recepies';

const ChefDetails = () => {

    const chefsdata = useLoaderData();
    const { chef_name, chef_picture, likes, num_of_recipes, years_of_experience, description, recepies } = chefsdata;
    return (
        
    );
};

export default ChefDetails;