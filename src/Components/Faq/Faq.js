import React from 'react';

const Faq = () => {
    return (
        <div className='my-12'>
            <h1 className='text-purple-600 font-bold text-center text-4xl mt-10'>FAQ</h1>
            <hr className='w-2/5 bg-purple-600 h-0.5 mx-auto mt-3' />
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                Is the website Responsive?
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p className='py-4'> Yes, This website is responsive</p>
                </div>
            </div>
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                Has Download system?
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p>Yes, You can download our courses</p>
                </div>
            </div>
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                Can I get premium access without login?
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p>No, You must login to get premium access.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;