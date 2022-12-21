import React from 'react';
import women from '../../images/women.jpg'
import men1 from '../../images/men1.jpg'
import men2 from '../../images/men2.jpg'

const StudentsFeedback = () => {
    return (
        <div >
            <div>
                <h1 className='text-purple-600 font-bold text-center text-4xl mt-10'>Students Feedback</h1>
                <hr className='w-2/5 bg-purple-600 h-0.5 mx-auto mt-3' />
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-6 my-16 w-3/5 mx-auto'>
                <div className='border rounded shadow-xl'>
                    <div className='h-16 w-16 mx-auto mt-4'><img className='avatar rounded-full ' src={men1} alt="" /></div>
                    <div className='p-4'>
                        <p className='text-center'>It was an amazing journey. Really I have learned too much from here.</p>
                    </div>
                </div>
                <div className='border rounded shadow-xl'>
                    <div className='h-16 w-16 mx-auto mt-4'><img className='avatar rounded-full ' src={men2} alt="" /></div>
                    <div className='p-4'>
                        <p className='text-center'>It was an amazing journey. Really I have learned too much from here.</p>
                    </div>
                </div>
                <div className='border rounded shadow-xl'>
                    <div className='h-16 w-16 mx-auto mt-4'><img className='avatar rounded-full ' src={men1} alt="" /></div>
                    <div className='p-4'>
                        <p className='text-center'>It was an amazing journey. Really I have learned too much from here.</p>
                    </div>
                </div>
               
                
            </div>
        </div>
    );
};

export default StudentsFeedback;