import React from 'react';
import { ArrowRight, MessageCircle, Camera, Utensils, Dumbbell, BookOpen, Share2, Target, FileText, Film } from 'lucide-react';
import ToolsMarquee from '../components/ToolsMarquee';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const Home = () => {
  const [filter, setFilter] = React.useState('All Categories');
  
  const categories = ['All Categories', 'FB Ad', 'Thumbnails', 'Video Editing', 'Post Design', 'Videography', 'Social Media Managing'];
  
  const filteredProjects = filter === 'All Categories' 
    ? projects 
    : projects.filter(project => project.category === filter.replace('All Categories', ''));

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 leading-tight max-w-4xl mx-auto">
            A place to display your
            <br />
            masterpiece
          </h1>
          
          {/* Small decorative circle */}
          <div className="flex justify-center mb-16">
            <div className="w-12 h-12 border-2 border-orange-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Overlapping Cards */}
          <div className="relative flex justify-center items-center mb-16">
            <div className="flex items-center justify-center space-x-2 md:space-x-4">
              {/* Card 1 - VR/Tech */}
              <div className="w-40 h-28 md:w-56 md:h-40 rounded-2xl overflow-hidden shadow-xl transform rotate-[-8deg] hover:rotate-[-4deg] transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="VFX and Technology"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 2 - Food/Restaurant */}
              <div className="w-40 h-28 md:w-56 md:h-40 rounded-2xl overflow-hidden shadow-xl transform rotate-[4deg] hover:rotate-[2deg] transition-all duration-300 hover:shadow-2xl z-10">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Food and Restaurant Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 3 - Fitness */}
              <div className="w-40 h-28 md:w-56 md:h-40 rounded-2xl overflow-hidden shadow-xl transform rotate-[-2deg] hover:rotate-[0deg] transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fitness Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 4 - Education */}
              <div className="w-40 h-28 md:w-56 md:h-40 rounded-2xl overflow-hidden shadow-xl transform rotate-[6deg] hover:rotate-[3deg] transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Education and Tuition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Artists can display their masterpieces, and buyers can discover and purchase works
            <br />
            that resonate with them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToContact} className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Discover Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Tools Marquee */}
      <ToolsMarquee />

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {filteredProjects.map((project) => (
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
          
          {/* <div className="text-center">
            <button className="bg-orange-400 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition-all duration-300 inline-flex items-center gap-2">
              Load More
              <ArrowRight size={20} />
            </button>
          </div> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              About Idearigs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a digital creative agency based in Sri Lanka, specializing in helping startups, 
              tuition classes, and small businesses grow through strategic digital marketing and creative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Social Media Marketing',
                description: 'Strategic campaigns that build communities and drive engagement',
                icon: <Share2 className="w-6 h-6 text-blue-500" />,
                bgColor: 'bg-blue-50',
                iconColor: 'text-blue-500'
              },
              {
                title: 'Ad Campaigns',
                description: 'High-converting ads that maximize your ROI and reach',
                icon: <Target className="w-6 h-6 text-green-500" />,
                bgColor: 'bg-green-50',
                iconColor: 'text-green-500'
              },
              {
                title: 'Content Creation',
                description: 'Compelling visuals and copy that tell your brand story',
                icon: <FileText className="w-6 h-6 text-amber-500" />,
                bgColor: 'bg-amber-50',
                iconColor: 'text-amber-500'
              },
              {
                title: 'VFX Videos',
                description: 'Professional video production with stunning visual effects',
                icon: <Film className="w-6 h-6 text-purple-500" />,
                bgColor: 'bg-purple-50',
                iconColor: 'text-purple-500'
              }
            ].map((service, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`w-14 h-14 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-5`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your digital marketing goals
          </p>
          <a 
            href="https://wa.me/94762021375" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            We're Available to Chat
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;