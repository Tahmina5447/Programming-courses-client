import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-purple-600 font-bold text-center text-4xl mt-10'>Know More About Programming</h1>
            <hr className='w-2/5 bg-purple-600 h-0.5 mx-auto mt-3' />
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                what is cors?
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p className='py-4'> There are several technologies available that you can use for developing backend infrastructure. For instance, there is Python, Node.js and Express.js, Ruby on Rails, etc. Whatever technology you choose, you would have to handle CORS at the server so the frontend can access it via REST API.</p>
                </div>
            </div>
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                    Focus me to see content
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                    Focus me to see content
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                    Focus me to see content
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;