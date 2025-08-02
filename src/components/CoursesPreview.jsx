import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CoursesPreview = () => {
  const courses = [
    {
      title: "Mastering React",
      level: "Beginner → Advanced",
      color: "from-green-400 to-blue-500",
      path: "/courses/react",
    },
    {
      title: "Tailwind UI Pro",
      level: "Intermediate",
      color: "from-purple-400 to-pink-500",
      path: "/courses/tailwind",
    },
    {
      title: "JavaScript DSA",
      level: "Advanced",
      color: "from-yellow-400 to-red-500",
      path: "/courses/js-dsa",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">🚀 Popular Courses</h2>
        <Link
          to="/courses"
          className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition"
        >
          View All <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <Link
              to={course.path}
              className="block p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:border-green-400 hover:shadow-green-500/20 transition duration-300"
            >
              <h3
                className={`text-xl font-semibold bg-gradient-to-r ${course.color} text-transparent bg-clip-text`}
              >
                {course.title}
              </h3>
              <p className="text-gray-300 mt-2">{course.level}</p>
              <motion.div
                className="mt-4 text-green-400 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Start Learning →
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoursesPreview;
