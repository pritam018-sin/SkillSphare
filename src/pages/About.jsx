import React from "react";
import { motion } from "framer-motion";
import { aboutItems } from "../Utils/aboutData";
import { textVariant, fadeIn, staggerContainer } from "../Utils/motion"; // adjust path if needed

const About = () => {
  return (
    <motion.section
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-4 mt-20"
    >
      <motion.div variants={textVariant(0.2)} className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">👋 About Me</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          I’m a frontend developer passionate about creating seamless and modern web experiences. Here’s what defines me:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.2)}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-green-400 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
