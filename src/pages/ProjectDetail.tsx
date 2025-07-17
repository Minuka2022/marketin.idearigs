import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-8 left-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors duration-300 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <span className="block text-primary text-sm font-medium mb-2">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Project Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{project.overview}</p>
            </section>

            {/* Goals */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-primary">Project Goals</h2>
              <ul className="space-y-3">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            {project.outcome.stats && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.outcome.stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-dark-100 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Client Quote */}
            {project.outcome.quote && (
              <section className="mb-12">
                <div className="bg-dark-100 p-8 rounded-lg border-l-4 border-primary">
                  <blockquote className="text-lg text-gray-300 mb-4 italic">
                    "{project.outcome.quote.text}"
                  </blockquote>
                  <div className="text-primary font-medium">
                    {project.outcome.quote.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {project.outcome.quote.position}
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-dark-100 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-primary">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Client</h4>
                  <p className="text-gray-400">{project.client}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Category</h4>
                  <p className="text-gray-400">{project.category}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-white mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-200 text-primary text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-dark-300">
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;