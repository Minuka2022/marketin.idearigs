import React from 'react';

const Footer = () => {
  const services = [
    'Video Production',
    'Design & Branding',
    'Social Media Marketing',
    'Content Creation',
    'VFX & Animation',
    'Digital Strategy',
    'Brand Identity',
    'Web Development'
  ];

  return (
    <footer className="bg-gray-100 py-20 overflow-hidden">
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          LET'S MAKE<br />IT HAPPEN.
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-2xl mx-auto">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Be</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Ig</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Fb</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tw</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Li</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
            <a href="mailto:hello@idearigs.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              hello@idearigs.com
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <div className="relative">
        {/* First Row */}
        <div className="flex animate-marquee whitespace-nowrap mb-4">
          {[...services, ...services].map((service, index) => (
            <span
              key={`row1-${index}`}
              className="mx-8 text-6xl md:text-8xl font-bold text-gray-900 flex items-center"
            >
              {service}
              <span className="mx-8 text-primary">✦</span>
            </span>
          ))}
        </div>

        {/* Second Row - Reverse Direction */}
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...services.reverse(), ...services].map((service, index) => (
            <span
              key={`row2-${index}`}
              className="mx-8 text-6xl md:text-8xl font-bold text-gray-900 flex items-center"
            >
              {service}
              <span className="mx-8 text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-16 px-4">
        <p className="text-gray-500 text-sm">
          ©2025 Idearigs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;