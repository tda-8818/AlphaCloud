import React from "react";

const Home = () => (
    <section className="hero-bg min-h-screen flex items-center justify-center text-center p-4">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                Future-Proof Your Business with <span className="text-red-500">Alpha Cloud</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
                Scalable, secure, and reliable cloud solutions tailored to fuel your growth.
            </p>
            <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-red-600 text-white text-lg px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-2xl"
            >
                Explore Our Solutions
            </button>
        </div>
    </section>
);

export default Home;