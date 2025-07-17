import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, image, description }) => {
  return (
    <Link to={`/project/${id}`} className="group block">
      <div className="bg-dark-100 rounded-lg overflow-hidden card-hover">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="btn-primary flex items-center gap-2">
              View Project
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-primary text-sm font-medium">{category}</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;