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
      <div className="rounded-2xl overflow-hidden card-hover transition-transform duration-300 group-hover:scale-105">
        <div 
          className="relative overflow-hidden aspect-square"
          style={{ backgroundColor }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {title}
            </h3>
            <span className="text-gray-500 text-sm font-medium">{category}</span>
          </div>
          {description && (
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;