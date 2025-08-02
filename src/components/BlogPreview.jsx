import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../Utils/motion"; // adjust path if needed

const blogs = [
  {
    title: "React vs Next.js — What to Choose in 2025",
    excerpt: "A complete comparison between React and Next.js, including performance, SEO, and developer experience.",
    path: "/blog/react-vs-nextjs",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Mastering Tailwind CSS Layouts",
    excerpt: "Learn advanced Tailwind CSS layout techniques used by top developers for responsive UIs.",
    path: "/blog/tailwind-layouts",
    gradient: "from-pink-400 to-red-500",
  },
  {
    title: "JavaScript Debugging Guide",
    excerpt: "Tired of `undefined` and `null` bugs? Learn how to debug JavaScript like a pro.",
    path: "/blog/js-debugging",
    gradient: "from-yellow-400 to-orange-500",
  },
];

const BlogPreview = () => {
  return (
    <motion.section
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-4 mt-24"
    >
      {/* Header Row */}
      <motion.div
        variants={textVariant(0.2)}
        className="flex items-center justify-between mb-8"
      >
        <h2 className="text-3xl font-bold text-white">📚 Latest Blogs</h2>
        <Link
          to="/blog"
          className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition"
        >
          View All <FaArrowRight />
        </Link>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("up", idx * 0.2)}
            whileHover={{ scale: 1.02 }}
            className="group "
          >
            <Link
              to={blog.path}
              className="block p-6 bg-white/5 border border-white/10 rounded-2xl shadow-md hover:border-green-400 hover:shadow-green-500/10 transition duration-300 h-60"
            >
              <h3
                className={`text-xl font-semibold bg-gradient-to-r ${blog.gradient} text-transparent bg-clip-text`}
              >
                {blog.title}
              </h3>
              <p className="text-gray-300 mt-3 text-sm line-clamp-3">
                {blog.excerpt}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-green-400 text-sm"
              >
                Read More →
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BlogPreview;
