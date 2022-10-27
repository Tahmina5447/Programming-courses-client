
import { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";


const CourseDetails = () => {
    const ref = createRef();
    const courseDetails = useLoaderData();
    const { category, learningTime, img, description, id } = courseDetails;
    console.log(courseDetails);

    return (
        <div ref={ref}>

            <div className=" flex w-1/5 mx-auto">
                <h1 className="text-purple-600 text-center font-bold text-4xl mt-8">{category}</h1>
                <div className="mt-8 ml-3">
                    <Pdf targetRef={ref} fileName="">
                        {({ toPdf }) => (

                            <button onClick={toPdf} className="btn bg-white text-purple-600">Download</button>
                        )}
                    </Pdf>
                </div>
            </div>

            <div className="card w-3/5 mx-auto bg-purple-600 shadow-xl my-8">




                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white text-2xl">{category}</h2>
                    <p className="text-white">{description}</p>
                    <p className="text-white">To learn this topic you need {learningTime}</p>

                </div>
                <div className="card-actions mx-auto my-4">
                    <Link to={`/checkout/${id}`} className="btn bg-white text-purple-600">Get Premium Access</Link>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;