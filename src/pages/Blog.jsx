import React, { useState } from "react";
import { blogItems, blogData } from "../Utils/blogItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariant, fadeIn, staggerContainer } from "../Utils/motion"; // adjust path if needed

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", ...new Set(blogItems.map((item) => item.tag))];

  const filteredBlogs =
    selectedTag === "All"
      ? blogItems
      : blogItems.filter((item) => item.tag === selectedTag);

  return (
    <motion.div
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl px-6 py-12 text-white mx-auto mt-10"
    >
      {/* 🟢 Heading */}
      <motion.h2
        variants={textVariant(0.2)}
        className="text-3xl font-bold mb-8 text-center"
      >
        Latest Blogs
      </motion.h2>

      {/* 🟢 Tag Filters */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex flex-wrap gap-3 justify-center mb-8"
      >
        {tags.map((tag, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedTag(tag)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              selectedTag === tag
                ? "bg-green-400 text-black"
                : "border-white/10 hover:border-green-400"
            }`}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>

      {/* 🟢 Blog Cards Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-12">
        {filteredBlogs.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeIn("up", index * 0.1)}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-green-400 transition"
          >
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{item.description}</p>
            <p className="text-xs text-gray-500 mb-2">{item.date}</p>
            <p className="text-xs italic text-gray-400 mb-2">By {item.author}</p>
            <Link
              to={`/blog/${item.id}`}
              className="text-green-400 text-sm underline hover:text-green-300"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 🟢 News + Other Blogs Section */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="mt-12 border-t border-white/10 pt-10"
      >
        <h2 className="text-2xl font-bold mb-6">News & Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.1 + 0.4)}
              whileHover={{ scale: 1.015 }}
              className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-blue-400 transition"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{item.description}</p>
              <p className="text-xs text-gray-500">
                {item.date} · {item.category}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
