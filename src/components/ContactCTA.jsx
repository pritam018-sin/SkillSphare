import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariant, fadeIn, scale } from "../Utils/motion"; // adjust the import path as needed

const ContactCTA = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <motion.div
        variants={scale(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-16 overflow-hidden shadow-lg hover:shadow-green-500/20 transition duration-300"
      >
        {/* 🔮 Glow Overlay */}
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-500 opacity-10 blur-[100px] rounded-full z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500 opacity-10 blur-[100px] rounded-full z-0"></div>

        {/* 🔧 Content */}
        <div className="relative z-10 text-center">
          <motion.h2
            variants={textVariant(0.3)}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Have a Project or Question?
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-300 mb-8 max-w-xl mx-auto"
          >
            I’d love to hear from you. Whether it’s a new opportunity, collaboration, or just a hello — let’s connect!
          </motion.p>

          <motion.div variants={fadeIn("up", 0.7)}>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Contact Me →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
