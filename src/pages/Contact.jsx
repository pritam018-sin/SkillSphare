import React from "react";
import {toast } from 'react-toastify';

import { motion } from "framer-motion";
import { fadeIn } from "../Utils/motion";

const Contact = () => {

     const [result, setResult] = React.useState("");
     
     const onSubmit = async (event) => {
         event.preventDefault();
         setResult("Sending....");
         const formData = new FormData(event.target);
     
         formData.append("access_key", "d46bc6d7-fcb4-4f44-a8cb-d2a80498ffdb");
     
         const response = await fetch("https://api.web3forms.com/submit", {
           method: "POST",
           body: formData
         });
     
         const data = await response.json();
     
         if (data.success) {
           setResult("");
             toast.success("Message Sent Successfully");
           event.target.reset();
         } else {
           console.log("Error", data);
           toast.warning("Something Went Wrong");
           setResult('');
         }
       };

  return (
    <motion.section
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      animate="show"
      className="min-h-screen px-4 py-20  text-white flex items-center justify-center"
    >
      <div className="w-full max-w-4xl glassmorphism p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur-md">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
            📬 Get in Touch
          </h2>
          <p className="mt-2 text-gray-400">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-green-400 text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-green-400 text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Message</label>
            <textarea
              rows={5}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-green-400 text-white placeholder:text-gray-500"
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-block bg-gradient-to-r from-green-400 to-cyan-500 text-black font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              {result? result: 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;

