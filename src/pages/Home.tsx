import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import ToolsMarquee from '../components/ToolsMarquee';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
            Digital Growth
            <br />
            <span className="text-primary">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            We help Sri Lankan startups, tuition classes, and small businesses grow digitally through 
            strategic social media marketing, compelling ad campaigns, and stunning visual content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View Our Work
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Start Your Project
              <Play size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Marquee */}
      <ToolsMarquee />

      {/* Featured Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how we've helped businesses across Sri Lanka achieve their digital goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                description={project.description}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              What We Do
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Social Media Marketing',
                description: 'Strategic campaigns that build communities and drive engagement'
              },
              {
                title: 'Ad Campaigns',
                description: 'High-converting ads that maximize your ROI and reach'
              },
              {
                title: 'Content Creation',
                description: 'Compelling visuals and copy that tell your brand story'
              },
              {
                title: 'VFX Videos',
                description: 'Professional video production with stunning visual effects'
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-dark-200 card-hover">
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help you achieve your digital marketing goals
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;