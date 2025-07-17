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
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-16 text-white leading-tight animate-fade-in">
            A place to display your
            <br />
            masterpiece
          </h1>
          
          {/* Overlapping Cards */}
          <div className="relative flex justify-center items-center mb-16 animate-slide-up">
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
              {/* Card 1 - VR/Tech */}
              <div className="w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-2xl transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="VFX and Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 2 - Food/Restaurant */}
              <div className="w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-2xl transform rotate-[4deg] hover:rotate-[2deg] transition-transform duration-300 z-10">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Food and Restaurant Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 3 - Fitness */}
              <div className="w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-[0deg] transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fitness Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 4 - Education */}
              <div className="w-48 h-32 md:w-64 md:h-40 rounded-2xl overflow-hidden shadow-2xl transform rotate-[6deg] hover:rotate-[3deg] transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Education and Tuition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up">
            Digital marketers can showcase their campaigns, and businesses can discover and connect with 
            services that resonate with them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Me
            </Link>
            <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
              Discover Our Work
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