import React from "react";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Services = () => {
  const services = [
    {
      icon: "🛡️",
      title: "Security Assessment & Penetration Testing",
      description: "Comprehensive security audits, vulnerability assessments, and penetration testing to identify and remediate security gaps.",
      features: ["Network & application penetration testing", "Vulnerability assessments", "Security compliance audits", "Risk management frameworks"]
    },
    {
      icon: "☁️",
      title: "Cloud Migration & Architecture",
      description: "Secure cloud migration strategies with enterprise-grade architecture design and implementation.",
      features: ["AWS, Azure, and multi-cloud solutions", "Infrastructure as Code (IaC)", "Cloud security configuration", "Cost optimisation strategies"]
    },
    {
      icon: "📋",
      title: "Compliance & Governance",
      description: "Ensure regulatory compliance with industry standards and frameworks across your organisation.",
      features: ["ISO 27001/27002 implementation", "SOC 2 Type II compliance", "NIST Cybersecurity Framework", "Australian Privacy Principles"]
    },
    {
      icon: "🚨",
      title: "Incident Response & Forensics",
      description: "24/7 incident response services with digital forensics and threat intelligence capabilities.",
      features: ["24/7 SOC monitoring", "Digital forensics investigation", "Malware analysis", "Business continuity planning"]
    },
    {
      icon: "🔐",
      title: "Identity & Access Management",
      description: "Comprehensive IAM solutions including zero-trust architecture and privileged access management.",
      features: ["Active Directory integration", "Multi-factor authentication", "Privileged access management", "Zero-trust implementation"]
    },
    {
      icon: "⚙️",
      title: "DevSecOps & Automation",
      description: "Integrate security into your development lifecycle with automated security testing and deployment.",
      features: ["CI/CD pipeline security", "Container security scanning", "Infrastructure automation", "Security code reviews"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black pt-28">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Cybersecurity & Cloud Services</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            Comprehensive security and infrastructure solutions tailored for enterprise environments.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/30 transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="text-left text-gray-400 text-sm space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;