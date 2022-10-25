import { useLoaderData } from "react-router-dom";


const CourseDetails = () => {

    const courseDetails = useLoaderData();
    const { category, learningTime, img, description } = courseDetails;
    console.log(courseDetails);
    return (
        <div>
            <h1 className="text-purple-600 text-center font-bold text-4xl mt-8">{category}</h1>
            <div className="card w-3/5 mx-auto bg-purple-600 shadow-xl my-8">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">{category}</h2>
                    <p className="text-white">{description}</p>
                    <p className="text-white">To learn this topic you need {learningTime}</p>
                    <div className="card-actions">
                        <button className="btn bg-white text-purple-600">Download</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;