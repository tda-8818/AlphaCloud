import React from "react";
import { motion } from 'framer-motion';
import { heroAnimations } from '../utils/animations';

const Home = () => {
  // Split text into words for animation
  const titleWords = "Enterprise".split("");
  const redText = "Cloud Architecture".split("");
  const subtitle = "15+ years delivering world-class cloud transformations, network security, and digital infrastructure for Australia's leading enterprises.";

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-center p-4 pt-20">
      <div className="max-w-5xl mx-auto">
        {/* Animated Title with Letter-by-Letter Animation */}
        <motion.div
          initial="initial"
          animate="animate"
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {/* "Enterprise" with letter animation */}
            <span className="inline-block">
              {titleWords.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={heroAnimations.letter}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.05 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            {" "}
            {/* Red text with glow and bounce */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }
              }}
              className="inline-block text-red-500 animate-[glow_2s_ease-in-out_infinite_alternate]"
            >
              {redText.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: 0.6 + (index * 0.03),
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>
            <br />
            {/* "& Security Solutions" */}
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.8,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 100
                }
              }}
              className="inline-block"
            >
              & Security Solutions
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle with fade-in */}
        <motion.p
          variants={heroAnimations.subtitle}
          initial="initial"
          animate="animate"
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Buttons with scale animation */}
        <motion.div
          variants={heroAnimations.buttons}
          initial="initial"
          animate="animate"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 text-white text-lg px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-500/50"
          >
            Explore Our Services
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-red-600 text-red-400 text-lg px-8 py-4 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;