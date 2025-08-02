import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogItems } from "../Utils/blogItems";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogItems.find((item) => item.id.toString() === id);

  if (!blog) {
    return (
      <div className="max-w-6xl mx-auto text-white text-center py-20">
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 px-4 py-2 border rounded-full border-white/20 hover:border-red-400 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-white">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm hover:border-green-400 hover:bg-white/5 transition"
      >
        ← Back
      </button>

      {/* 🧠 Title + Meta */}
      <h1 className="text-4xl font-bold mb-2 text-amber-500">{blog.title}</h1>
      <p className="text-green-200 italic mb-4">
        {blog.date} · {blog.tag} · by {blog.author}
      </p>

      {/* 📋 Short Description */}
      <p className="text-gray-500 text-lg leading-relaxed mb-8">
        {blog.description}
      </p>

      {/* 📝 Full Content */}
      <div
        className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 max-w-none text-base leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: blog.content.replace(/\n/g, "<br/>").replace(/### (.*?)<br\/>/g, "<h3>$1</h3>"),
        }}
      />

      {/* 👣 Footer */}
      <div className="mt-12 text-sm text-center text-gray-500">
        <hr className="my-4 border-white/10" />
        <p>© 2025 SkillSphere. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BlogDetail;
