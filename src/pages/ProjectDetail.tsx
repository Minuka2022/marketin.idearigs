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
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Project Not Found</h1>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: project.backgroundColor || '#f3f4f6' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-w-md max-h-80 object-contain"
          />
        </div>
        <div className="absolute bottom-8 left-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors duration-300 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <span className="block text-gray-600 text-sm font-medium mb-2">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{project.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.overview}</p>
            </section>

            {/* Goals */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Project Goals</h2>
              <ul className="space-y-3">
                {project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Gallery</h2>
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.outcome.stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Client Quote */}
            {project.outcome.quote && (
              <section className="mb-12">
                <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
                  <blockquote className="text-lg text-gray-600 mb-4 italic">
                    "{project.outcome.quote.text}"
                  </blockquote>
                  <div className="text-gray-900 font-medium">
                    {project.outcome.quote.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {project.outcome.quote.position}
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Client</h4>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                  <p className="text-gray-600">{project.category}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="mailto:hello@idearigs.com" 
                  className="btn-primary w-full text-center block"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;