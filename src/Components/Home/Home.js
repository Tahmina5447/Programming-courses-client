import React from 'react';
import bg from '../../images/bg.jpg'

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
        </div>
    );
};

export default Home;