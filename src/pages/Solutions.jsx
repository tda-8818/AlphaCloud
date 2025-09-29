import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Solutions = () => {
  const solutions = [
    {
      icon: "🏦",
      title: "Financial Services",
      description: "APRA-compliant cloud infrastructure and cybersecurity solutions for banks, credit unions, and fintech companies.",
      features: ["APRA CPS 234 compliance", "PCI DSS certification support", "Fraud detection systems", "Real-time transaction monitoring"]
    },
    {
      icon: "🏥",
      title: "Healthcare & Life Sciences",
      description: "Privacy-first cloud solutions ensuring patient data protection and regulatory compliance.",
      features: ["HIPAA compliance frameworks", "Medical device security", "Secure patient portals", "Clinical data analytics"]
    },
    {
      icon: "🏛️",
      title: "Government & Public Sector",
      description: "Sovereign cloud solutions with enhanced security controls for government agencies and public organisations.",
      features: ["Protected-level classifications", "Australian data sovereignty", "Secure citizen services", "Digital transformation consulting"]
    },
    {
      icon: "🏭",
      title: "Manufacturing & Industrial",
      description: "Secure industrial IoT and operational technology protection for manufacturing environments.",
      features: ["OT/IT network segmentation", "Industrial IoT security", "SCADA system protection", "Supply chain security"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-900 pt-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, threshold: 0.1 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Specialised cybersecurity and cloud solutions tailored for specific industry requirements.
          </p>
        </motion.div>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, threshold: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-black/50 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{solution.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;