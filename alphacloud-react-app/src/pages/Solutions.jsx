// Solutions.jsx
import React from 'react';

const Solutions = () => (
  <section id="solutions" className="py-20 bg-black min-h-screen pt-20">
    <div className="container mx-auto px-4 md:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        Customized cloud solutions for various industries and use cases.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Solution Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">Enterprise Migration</h3>
          <p className="text-gray-400">Complete migration services from on-premises to cloud infrastructure with minimal downtime.</p>
        </div>
        {/* Solution Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">DevOps Automation</h3>
          <p className="text-gray-400">Streamline your development pipeline with CI/CD automation and infrastructure as code.</p>
        </div>
        {/* Solution Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">Data Analytics</h3>
          <p className="text-gray-400">Transform your data into actionable insights with our analytics and business intelligence solutions.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Solutions;