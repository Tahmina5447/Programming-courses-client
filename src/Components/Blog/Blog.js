import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
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
                Why are you using firebase and What other options do you have to implement authentication?
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p>Firebase helps you develop high-quality apps, grow your user base and each feature works independently, and they work even better together. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
            </div>
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                How does the private route work?
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
            </div>
            <div tabIndex={0} className=" w-1/2 mx-auto  mt-8 collapse collapse-arrow border border-white bg-purple-600 rounded-box">
                <div className="collapse-title text-xl font-medium text-white">
                    What is node and How does Node work?
                </div>
                <div className="collapse-content text-white border-white border-t-2">
                    <p> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and node.js is a server-side platform that allows you to run JavaScript applications in a run time environment. It includes all the components you need to execute a JavaScript program on a server utilizing the same architecture as the Java Runtime Environment (JRE). With JRE, you have the Java Virtual Machine (JVM) and library classes. Node.js uses the Chrome V8 JavaScript engine in place of the JVM and the Node API or modules instead of Java classes.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;