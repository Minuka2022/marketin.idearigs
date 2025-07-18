import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

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
            <div className="flex space-x-6">
              <a href="https://instagram.com/idearigs" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/idearigs" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://tiktok.com/@idearigs" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
            <a href="mailto:info@idearigs.com" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2">
              <span>info@idearigs.com</span>
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