import React from 'react';

const ToolsMarquee = () => {
  const tools = [
    'Photoshop',
    'After Effects',
    'Meta Ads Manager',
    'Premiere Pro',
    'Illustrator',
    'Figma',
    'Canva',
    'DaVinci Resolve',
    'Cinema 4D',
    'Blender',
  ];

  return (
    <div className="py-12 bg-dark-100 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((tool, index) => (
            <span
              key={index}
              className="mx-8 text-2xl font-medium text-gray-400 hover:text-primary transition-colors duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsMarquee;