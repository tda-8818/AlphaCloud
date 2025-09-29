import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 pt-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, threshold: 0.1 }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
        >
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-white mb-6">About Alpha Cloud</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Saud Malik is a senior Consultant/Architect with over 15 years of global systems integrator experience in consulting and leading client engagements and digital transformation journeys. Currently serving as Director of Alpha Cloud PTY LTD, whilst maintaining active consulting roles with major enterprises.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Expertise spans building strategy, architecture, design, migration, automation and implementation of data centre, software defined networking, cyber security, hybrid cloud and wireless integrated solutions. Having worked across Government, Health, Financial, Telecommunication, Oil/Gas, Utilities, Education and Commercial sectors globally.
            </p>
            
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cloud Architecture (AWS/Azure)</span>
                  <span className="text-red-400 font-bold">Expert</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Network Security & Firewalls</span>
                  <span className="text-red-400 font-bold">Expert</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">VMware NSX & SDDC</span>
                  <span className="text-red-400 font-bold">Expert</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-full"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Palo Alto Networks</span>
                  <span className="text-red-400 font-bold">Expert</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-full"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Digital Transformation</span>
                  <span className="text-red-400 font-bold">Advanced</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;