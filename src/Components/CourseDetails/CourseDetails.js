
import { Link, useLoaderData } from "react-router-dom";


const CourseDetails = () => {

    const courseDetails = useLoaderData();
    const { category, learningTime, img, description,id } = courseDetails;
    console.log(courseDetails);

    return (
        <div>
            <h1 className="text-purple-600 text-center font-bold text-4xl mt-8">{category}</h1>

            <div className="card w-3/5 mx-auto bg-purple-600 shadow-xl my-8">
                
                    <div className="card-actions ml-6 mt-4">
                        <button className="btn bg-white text-purple-600">Download</button>
                    </div>
                    
                
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">{category}</h2>
                    <p className="text-white">{description}</p>
                    <p className="text-white">To learn this topic you need {learningTime}</p>

                </div>
                <div className="card-actions mx-auto my-4">
                        <Link to={`/premium/${id}`} className="btn bg-white text-purple-600">Get Premium Access</Link>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;