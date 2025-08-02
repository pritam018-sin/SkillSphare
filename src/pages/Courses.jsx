import React from 'react'
import { coursesData } from '../Utils/coursesData'
import { useState } from 'react';
import { GiDuration } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Courses = () => {
    const [selectedCat, setSelectedCat] = useState("All");
    const categories = ["All", ...new Set(coursesData.map((item) => item.category))];

    const filteredCourses =
        selectedCat === "All"
            ? coursesData
            : coursesData.filter((item) => item.category === selectedCat);
    return (
        <section className="max-w-7xl px-6 py-12 text-white mx-auto mt-10 gap-2">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Courses
            </h2>
            <div className='flex flex-wrap gap-3 justify-center mb-8'>
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCat(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm border transition-all ${selectedCat === cat
                            ? "bg-green-400 text-black"
                            : "border-white/10 hover:border-green-400"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Courses Card Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                {filteredCourses.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-green-400 transition"
                    >
                        <img src={item.thumbnail} alt="CourseThumbnail" className="mb-4 border border-white/10 rounded-xl shadow-md object-cover w-full h-40" />
                        <h3
                            className="text-xl font-semibold mb-3 bg-gradient-to-r from-green-400
                 via-cyan-400 to-blue-500 text-transparent bg-clip-text flex justify-between "
                        >
                            {item.title}
                        </h3>
                        <div className="grid gap-2 text-sm text-white">
                            <p className="text-red-200">
                                <span className="font-semibold text-red-500">Level:</span> {item.level}
                            </p>

                            <p className="text-gray-400">
                                {item.description}
                            </p>

                            <p className="text-gray-400 flex items-center gap-2">
                                <span className="text-green-400 text-lg"><GiDuration /></span>
                                <span>{item.duration}</span>
                            </p>
                            <h3 className='text-white/70 font-semibold text-[1rem]'><span>Faculty: </span>{item.instructor}</h3>
                            <p className=' bg-green-500/20 text-green-300 border rounded-full px-1 border-green-400/30 w-fit'>{item.price}</p>
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <Link
                                to={`/courses/${item.id}`}
                                className="px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-green-400/20 via-cyan-400/30 to-blue-500/20 rounded-lg shadow-md hover:scale-105 hover:shadow-green-400/70 transition-all"
                            >
                                View Course
                                <span className='inline-block ml-2 '><FaArrowRight /></span>
                            </Link>
                            <p className='bg-orange-500/20 text-orange-300 border rounded-full px-1 border-orange-400/30 w-fit'>{item.category}</p>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Courses
