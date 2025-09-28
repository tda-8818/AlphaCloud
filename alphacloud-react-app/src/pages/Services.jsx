import React from "react";

const Services = () => (
  <section id="services" className="py-20 bg-black">
    <div className="container mx-auto px-4 md:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        From infrastructure to application hosting, we've got you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          {/* … icon … */}
          <h3 className="text-2xl font-semibold text-white mb-2">
            Scalable Infrastructure
          </h3>
          <p className="text-gray-400">
            Effortlessly scale your resources up or down to meet fluctuating
            demand, without downtime.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          {/* … icon … */}
          <h3 className="text-2xl font-semibold text-white mb-2">
            Ironclad Security
          </h3>
          <p className="text-gray-400">
            Protect your data with multi‑layered security protocols, compliance
            certifications, and 24/7 monitoring.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow">
          {/* … icon … */}
          <h3 className="text-2xl font-semibold text-white mb-2">
            Expert Support
          </h3>
          <p className="text-gray-400">
            Our team of certified cloud architects is available around the
            clock to assist you.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;