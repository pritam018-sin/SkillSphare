// src/components/HeroSection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="h-screen  text-white flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Unlock Your Skills with SkillSphere 🚀
        </h1>

        <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Learn, build, and grow with expert-crafted content, hands-on courses, and dev blogs curated for modern developers.
        </p>

        <div className="mt-8">
          <Link to="/courses">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-cyan-500 hover:from-cyan-500 hover:to-green-400 transition px-8 py-3 rounded-full font-semibold shadow-md"
            >
                Explore Courses
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
