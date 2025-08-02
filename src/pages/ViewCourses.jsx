import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from '../Utils/coursesData';
import { GiDuration } from "react-icons/gi";


const ViewCourses = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const course = coursesData.find((item) => item.id.toString() === id);

    if (!course) {
        return (
            <div className="max-w-6xl mx-auto text-white text-center py-20">
                <h2 className="text-2xl font-bold">Course Not Found</h2>
                <button
                    onClick={() => navigate("/courses")}
                    className="mt-4 px-4 py-2 border rounded-full border-white/20 hover:border-red-400 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-white mt-10">
            {/* 🔙 Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm hover:border-green-400 hover:bg-white/5 transition"
            >
                ← Back
            </button>

            {/* 🧠 Title + Meta */}
            <img src={course.thumbnail} alt="Course Thumbnail"
                className=' h-[300px] w-full sm:h-150 border border-white/20 rounded-lg mb-4 object-cover'

            />
            <h3 className=" text-3xl sm:text-4xl font-semibold mb-3 bg-gradient-to-r from-green-400
                 via-cyan-400 to-blue-500 text-transparent bg-clip-text flex justify-between "
                >
                    {course.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-2xl text-white">
                <p className="text-red-200">
                    <span className="font-semibold text-yellow-500">Level:</span> {course.level}
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                    <span className="font-semibold text-yellow-500">Duration:</span>
                    <span className="text-green-400 text-lg"><GiDuration /></span>
                    <span>{course.duration}</span>
                </p>
                <h3 className='text-white/70 font-semibold text-[1.5rem] '><span className="font-semibold text-yellow-500">Faculty: </span>{course.instructor}</h3>
                <p className=' bg-green-500/20 text-green-300 border rounded-full px-1 border-green-400/30 w-fit'><span className="font-semibold text-white/70">Price:</span> {course.price}</p>
                <p className='bg-orange-500/20 text-orange-300 border rounded-full px-1 border-orange-400/30 w-fit'><span className="font-semibold text-white/70">Category: </span>{course.category}</p>
            </div>

            <div>
                <h3 className=' text-3xl font-bold mt-4  mb-2 text-emerald-600'>Syllabus</h3>
                <p className='text-lg font-medium text-gray-300'>{course.syllabus}</p>
            </div>
            {/* 📋 Short Description */}
            <div className='mt-4'>
                <h3 className=' text-3xl font-bold mb-2 text-emerald-600/70'>Short Description</h3>
                <p className='text-gray-400 text-lg'>{course.description}</p>
            </div>

            {/* 📝 Full Content */}
            <div
                className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 max-w-none text-base leading-relaxed"
                dangerouslySetInnerHTML={{
                    __html: course.fullContent.replace(/\n/g, "<br/>").replace(/### (.*?)<br\/>/g, "<h3>$1</h3>"),
                }}
            />
           =
           <div className='flex justify-center'>
             <buttun className = 'py-1 px-2 border border-white/20 items-center bg-green-500 rounded-full w-fit hover:bg-white hover:text-green-500 cursor-pointer'>
                Buy Course
            </buttun>

           </div>
            {/* 👣 Footer */}
            <div className="mt-12 text-sm text-center text-gray-500">
                <hr className="my-4 border-white/10" />
                <p>© 2025 SkillSphere. All rights reserved.</p>
            </div>
        </div>
    )
}

export default ViewCourses
