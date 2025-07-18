import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  backgroundColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  category, 
  image, 
  description, 
  backgroundColor = '#f3f4f6' 
}) => {
  return (
    <Link to={`/project/${id}`} className="group block">
      <div className="rounded-3xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div 
          className="relative overflow-hidden aspect-square p-8 flex items-center justify-center"
          style={{ backgroundColor }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-300"
          />
        </div>
        <div className="pt-6 pb-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {title}
            </h3>
            <span className="text-gray-500 text-sm font-medium">{category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;