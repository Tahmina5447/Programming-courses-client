import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const premiumData=useLoaderData();
    const {img,category,description}=premiumData;
    return (
        <div>
            <h3 className='text-purple-600 text-2xl font-bold text-center my-8'>{category}</h3>
          <img className='h-56 w-56 mx-auto' src={img} alt="" />
          <p className='text-purple-600 my-8 text-center w-4/5 mx-auto'>{description}</p>
        </div>
    );
};

export default PremiumAccess;