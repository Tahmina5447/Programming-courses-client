import React from 'react';
import html from '../../images/html.jpg';
import css from '../../images/css.png';
import bootstrap from '../../images/bootatrap.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <hr />
            <div className='bg-purple-600'>
                <div className='w-2/5 mx-auto text-center py-16'>
                    <h1 className='text-4xl font-bold text-white '>Learn Programming and Develop Your Skill</h1>
                    <p className='text-white mt-3'>The world is digital. You have to digital. You must know about today's world. Learn more and update yourself.</p>
                </div>
            </div>
            <div>
                <h1 className='text-purple-600 font-bold text-center text-4xl mt-10'>Our Courses</h1>
                <hr className='w-2/5 bg-purple-600 h-0.5 mx-auto mt-3' />
            </div>
            <div className='w-3/5 mx-auto grid grid-cols-3 my-8 gap-6'>
                <div className="card w-64 h-48 bg-base-100 shadow-xl image-full">
                    <figure><img src={html}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Html</h2>
                    </div>
                </div>
                <div className="card w-64 h-48 bg-base-100 shadow-xl image-full">
                    <figure><img src={css}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">CSS</h2>
                    </div>
                </div>
                <div className="card w-64 h-48 bg-base-100 shadow-xl image-full">
                    <figure><img src={bootstrap}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bootstrap</h2>
                    </div>
                </div>
            </div>
            <div className='text-center mb-12'> 
                <button className='btn bg-purple-600 text-white'><Link to='/courses'>Courses</Link></button>
            </div>
            
        </div>
    );
};

export default Home;