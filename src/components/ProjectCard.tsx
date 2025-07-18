import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  category, 
  image, 
  description
}) => {
  return (
    <Link to={`/project/${id}`} className="group block">
      <div className="transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative overflow-hidden aspect-square rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-white">
              <h3 className="text-lg font-bold drop-shadow-md">{title}</h3>
              <span className="text-sm font-medium text-white/90 drop-shadow-md">{category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;