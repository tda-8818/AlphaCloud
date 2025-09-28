import React from 'react';

const Products = () => (
  <section id="products" className="py-20 bg-black text-center min-h-screen pt-20">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Explore our suite of powerful cloud products designed for modern businesses.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Example Product Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">Compute Engine</h3>
          <p className="text-gray-400">Scalable virtual machines for any workload, from simple web servers to complex applications.</p>
        </div>
        {/* Example Product Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">Cloud Storage</h3>
          <p className="text-gray-400">Secure, highly available object storage for unstructured data of any size.</p>
        </div>
        {/* Example Product Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">Managed Databases</h3>
          <p className="text-gray-400">Fully managed, enterprise-grade databases to simplify your data management.</p>
        </div>
        {/* Example Product Card 4 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">Networking</h3>
          <p className="text-gray-400">Global network infrastructure with robust security and low latency.</p>
        </div>
        {/* Example Product Card 5 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          <h3 className="text-2xl font-semibold text-white mb-2">AI & Machine Learning</h3>
          <p className="text-gray-400">Tools and services to build, train, and deploy custom machine learning models.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Products;
