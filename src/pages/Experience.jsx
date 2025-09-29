import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      id: 'csl',
      name: 'CSL Behring',
      logo: 'https://logo.clearbit.com/cslbehring.com',
      period: '2022 - Present',
      role: 'Cloud Architect',
      details: {
        description: 'Leading cloud, networking and security architecture projects within CSL Australia and USA. Designing and implementing secure centralised architecture within AWS US West for cloud transformation initiatives.',
        technologies: ['AWS US West architecture', 'Palo Alto VM-Series', 'AWS Gateway Load Balancer', 'Automation & IaC'],
        scope: ['Multi-region deployment', 'Security architecture design', 'Cloud transformation', 'Infrastructure automation'],
        impact: ['Centralised security controls', 'Scalable cloud architecture', 'Automated deployment', 'Global standardisation']
      }
    },
    {
      id: 'accenture',
      name: 'Accenture',
      logo: 'https://logo.clearbit.com/accenture.com',
      period: '2021 - 2022',
      role: 'End-to-End Network Architect',
      details: {
        description: 'Led Telstra\'s secure Hybrid Cloud generation three architecture, design and implementation based on VMware NSX-T with integrated Digital Managed Services and fully automated customer experience.',
        technologies: ['VMware NSX-T', 'Hybrid cloud architecture', 'Digital managed services', 'Automation frameworks'],
        scope: ['End-to-end network design', 'Service automation', 'Customer self-service', 'Service orchestration'],
        impact: ['Next-gen service platform', 'Automated provisioning', 'Enhanced customer experience', 'Scalable service delivery']
      }
    },
    {
      id: 'ntt',
      name: 'NTT Ltd',
      logo: 'https://logo.clearbit.com/ntt.com',
      period: '2017 - 2021',
      role: 'Principal Technical Consultant',
      details: {
        description: 'Led major cybersecurity and infrastructure transformation projects for Toyota Australia and AEMO, focusing on cloud migration, security uplift, and digital transformation initiatives.',
        technologies: ['ZScaler cloud proxy', 'Palo Alto NGFW', 'Microsoft Azure', 'SD-WAN & SD-LAN', 'VMware NSX'],
        scope: ['Toyota security transformation', 'AEMO digital strategy', 'Zero-trust implementation', 'DevSecOps platform'],
        impact: ['Enhanced security posture', 'Modernised infrastructure', 'Future-ready architecture', 'Critical infrastructure protection']
      }
    },
    {
      id: 'metro-trains',
      name: 'Metro Trains Melbourne',
      logo: 'https://logo.clearbit.com/metrotrains.com.au',
      period: '2021',
      role: 'Sr. Consultant',
      details: {
        description: 'Led data centre transformation projects including uplift to software defined data centre based on Cisco DCNM for critical transport infrastructure.',
        technologies: ['Cisco DCNM', 'Software Defined Data Centre', 'Network automation', 'Infrastructure modernisation'],
        scope: ['Data centre transformation', 'SDDC implementation', 'Network infrastructure', 'Critical systems migration'],
        impact: ['Modernised infrastructure', 'Improved reliability', 'Enhanced automation', 'Future-ready platform']
      }
    },
    {
      id: 'dimension-data',
      name: 'Dimension Data',
      logo: 'https://logo.clearbit.com/dimensiondata.com',
      period: '2008 - 2017',
      role: 'Technical Consultant',
      details: {
        description: 'Delivered complex networking and security solutions across multiple regions including VMware NSX deployments, network performance monitoring, and data centre transformations for various enterprise clients.',
        technologies: ['VMware NSX', 'Riverbed monitoring', 'Cisco networking', 'Network security', 'QoS implementation'],
        scope: ['Multi-region projects', 'SDDC deployments', 'Performance monitoring', 'Enterprise transformations'],
        impact: ['Scalable solutions', 'Enhanced visibility', 'Improved performance', 'Security modernisation']
      }
    },
    {
      id: 'toyota',
      name: 'Toyota Australia',
      logo: 'https://logo.clearbit.com/toyota.com.au',
      period: '2020 - 2021',
      role: 'Cyber Security Consultant',
      details: {
        description: 'Comprehensive security and infrastructure transformation programme including ZScaler cloud proxy migration, firewall upgrades, and vulnerability management implementations.',
        technologies: ['ZScaler cloud proxy', 'Palo Alto NGFW', 'Network Access Control', 'Vulnerability management'],
        scope: ['Security transformation', 'Infrastructure uplift', 'Migration planning', 'Risk management'],
        impact: ['Enhanced security posture', 'Modernised infrastructure', 'Improved threat detection', 'Automated security controls']
      }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black pt-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Client Portfolio & Experience</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            15+ years delivering enterprise solutions for leading organisations across Australia and internationally.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedCompany ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {companies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedCompany(company)}
                  className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-red-500/10"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 bg-white rounded-lg p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-red-600 rounded items-center justify-center text-white font-bold text-sm">
                        {company.name.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-red-400 transition-colors duration-300">
                      {company.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="text-red-400 hover:text-red-300 mr-4 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center mr-4">
                      <img 
                        src={selectedCompany.logo} 
                        alt={`${selectedCompany.name} logo`} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-red-600 rounded items-center justify-center text-white font-bold text-xs">
                        {selectedCompany.name.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{selectedCompany.name}</h3>
                      <p className="text-red-400 font-medium">{selectedCompany.role} • {selectedCompany.period}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {selectedCompany.details.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Technologies</h4>
                    <ul className="text-gray-400 space-y-2">
                      {selectedCompany.details.technologies.map((tech, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Scope</h4>
                    <ul className="text-gray-400 space-y-2">
                      {selectedCompany.details.scope.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Impact</h4>
                    <ul className="text-gray-400 space-y-2">
                      {selectedCompany.details.impact.map((impact, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;