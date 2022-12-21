import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('https://server-programming-courses.vercel.app/allCategories')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className=' sm:block md:flex lg:flex'>
            <div className='lg:w-2/6 md:w-full sm:w-full text-center bg-purple-600 pb-6'>
                <hr />
                <h2 className='font-bold text-white text-xl mt-8 mb-6'>Our Courses</h2>
                {
                    categories.map(category=><p key={category.id}>
                        <Link to={`/courses/${category.id}`} className='text-white'>{category.category}</Link>
                    </p>)
                }
            </div>
            <div className='lg:w-4/6 md:w-full sm:w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 m-6 gap-8'>
                {categories.map(category=>
                    <div className="card card-side bg-base-100 shadow-xl border border-2 border-purple-600 sm:pr-6">
                    <figure className='bg-purple-600'><img  className='h-56 w-56 ml-2 ' src={category.img} alt="Movie"/></figure>
                    <div className="card-body  ">
                      <h2 className="card-title">{category.category}</h2>
                      <p className='text-purple-600'>Learning Time: {category.learningTime}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/courses/${category.id}`} className="btn text-white bg-purple-600">See Details</Link>
                      </div>
                    </div>
                  </div>
                  
                    )}
            </div>
            
            
        </div>
    );
};

export default Courses;