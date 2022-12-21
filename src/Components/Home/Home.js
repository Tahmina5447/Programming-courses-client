import React, { useEffect, useState } from 'react';
import html from '../../images/html.jpg';
import css from '../../images/css.png';
import bootstrap from '../../images/bootatrap.png';
import { Link } from 'react-router-dom';
import StudentsFeedback from './StudentsFeedback';
import Contact from './Contact';

const Home = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('https://server-programming-courses.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    // console.log(categories)
    return (
        <div>
            <hr />
            <div className='bg-purple-600'>
                <div className='px-8 lg:w-2/5 mx-auto text-center py-16'>
                    <h1 className='text-4xl font-bold text-white '>Learn Programming and Develop Your Skill</h1>
                    <p className='text-white mt-3'>The world is digital. You have to digital. You must know about today's world. Learn more and update yourself.</p>
                </div>
            </div>
            <div>
                <h1 className='text-purple-600 font-bold text-center text-4xl mt-10'>Our Courses</h1>
                <hr className='w-2/5 bg-purple-600 h-0.5 mx-auto mt-3' />
            </div>
            <div className='w-3/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-8 gap-6'>
                {
                    categories.map(category=><Link to={`/courses/${category.id}`}> 
                    <div className="card w-64 h-48 bg-base-100 shadow-xl image-full">
                    <figure><img src={category.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category.category}</h2>
                    </div>
                </div>
                    </Link>)
                }
                
            </div>
            <div className='text-center mb-20'>
                <button className='btn bg-purple-600 text-white'><Link to='/courses'>All Courses</Link></button>
            </div>
            <StudentsFeedback></StudentsFeedback>
            <Contact></Contact>

        </div>
    );
};

export default Home;