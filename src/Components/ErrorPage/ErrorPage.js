import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-purple-600 text-2xl font-bold mt-12 mb-4'>This Page Is Not Founding!</h1>
            <Link className=' text-purple-600 text-xl btn-link' to='/'>Go to home page</Link>
        </div>
    );
};

export default ErrorPage;