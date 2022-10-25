import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className='flex'>
            <div className='w-2/6 text-center bg-purple-600 pb-6'>
                <hr />
                <h2 className='font-bold text-white text-xl mt-8 mb-6'>Our Courses</h2>
                {
                    categories.map(category=><p key={category.id}>
                        <Link to={`/courses/${category.id}`} className='text-white'>{category.category}</Link>
                    </p>)
                }
            </div>
            <div className='w-4/6 grid grid-cols-2 m-8 gap-8'>
                {categories.map(category=>
                    <div className="card card-side bg-base-100 shadow-xl border border-2 border-purple-600">
                    <figure className='bg-purple-600'><img  className='h-60 w-60 ml-2 ' src={category.img} alt="Movie"/></figure>
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