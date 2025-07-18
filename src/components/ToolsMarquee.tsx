import React from 'react';

const ToolsMarquee = () => {
  const logos = [
    'Adobe',
    'Meta', 
    'Google',
    'Apple',
    'NETFLIX',
    'Spotify'
  ];

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trusted by leading brands</h2>
        <p className="text-gray-600">We work with companies of all sizes</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16">
          {[...logos, ...logos, ...logos].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 min-w-[120px] text-2xl font-bold text-gray-400 hover:text-gray-900 transition-all duration-300 flex-shrink-0"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsMarquee;