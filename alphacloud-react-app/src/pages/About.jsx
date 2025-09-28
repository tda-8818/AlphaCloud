import React from 'react';

const About = () => (
    <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-white mb-4">About Alpha Cloud</h2>
            <p className="text-gray-400 text-lg mb-4">
              Established in 2020, Alpha Cloud Pty Ltd was founded on the principle of making robust cloud technology accessible to businesses of all sizes. We're an Australian-based company dedicated to providing cutting-edge cloud infrastructure and personalized support.
            </p>
            <p className="text-gray-400 text-lg">
              Our mission is to empower our clients with the tools they need to innovate, grow, and thrive in a digital-first world. We believe in building partnerships, not just providing services.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://placehold.co/600x400/333333/999999?text=Alpha+Cloud" alt="Alpha Cloud headquarters" className="w-full h-auto rounded-xl shadow-lg"/>
          </div>
        </div>
      </section>
);

export default About;