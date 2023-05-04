import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingelChef from '../SingelChef/SingelChef';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Chefs = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
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