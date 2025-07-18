import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, ArrowLeft, Save, X } from 'lucide-react';
import { projects as initialProjects, Project } from '../data/projects';

const AdminPanel = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/" className="text-blue-500 hover:underline">
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/admin/dashboard" className="text-xl font-bold text-gray-900">
                Admin Panel
              </Link>
              <div className="ml-10 flex space-x-8">
                <Link
                  to="/admin/dashboard"
                  className={`px-3 py-2 text-sm font-medium ${
                    location.pathname === '/admin/dashboard'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/projects"
                  className={`px-3 py-2 text-sm font-medium ${
                    location.pathname.includes('/admin/projects')
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Projects
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                View Website
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard projects={projects} />} />
        <Route path="/dashboard" element={<Dashboard projects={projects} />} />
        <Route path="/projects" element={<ProjectsList projects={projects} setProjects={setProjects} />} />
        <Route path="/projects/new" element={<ProjectForm projects={projects} setProjects={setProjects} />} />
        <Route path="/projects/edit/:id" element={<ProjectForm projects={projects} setProjects={setProjects} />} />
        <Route path="/projects/view/:id" element={<ProjectView projects={projects} />} />
      </Routes>
    </div>
  );
};

const Dashboard = ({ projects }: { projects: Project[] }) => {
  const stats = {
    totalProjects: projects.length,
    categories: [...new Set(projects.map(p => p.category))].length,
    recentProjects: projects.slice(-3)
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">{stats.totalProjects}</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Projects</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.totalProjects}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold">{stats.categories}</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Categories</dt>
                    <dd className="text-lg font-medium text-gray-900">{stats.categories}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Quick Action</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      <Link to="/admin/projects/new" className="text-blue-600 hover:underline">
                        Add New Project
                      </Link>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.recentProjects.map((project) => (
                <div key={project.id} className="border rounded-lg p-4">
                  <div 
                    className="w-full h-32 rounded-md mb-3 flex items-center justify-center"
                    style={{ backgroundColor: project.backgroundColor }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900">{project.title}</h4>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsList = ({ projects, setProjects }: { projects: Project[], setProjects: (projects: Project[]) => void }) => {
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <Link
            to="/admin/projects/new"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
          >
            <Plus size={20} />
            Add New Project
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project.id}>
                <div className="px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-16 h-16 rounded-md mr-4 flex items-center justify-center"
                      style={{ backgroundColor: project.backgroundColor }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.category} • {project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/admin/projects/view/${project.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye size={20} />
                    </Link>
                    <Link
                      to={`/admin/projects/edit/${project.id}`}
                      className="text-green-600 hover:text-green-800"
                    >
                      <Edit size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectForm = ({ projects, setProjects }: { projects: Project[], setProjects: (projects: Project[]) => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEdit = location.pathname.includes('/edit/');
  const projectId = location.pathname.split('/').pop();
  const existingProject = isEdit ? projects.find(p => p.id === projectId) : null;

  const [formData, setFormData] = useState<Partial<Project>>({
    id: existingProject?.id || '',
    title: existingProject?.title || '',
    category: existingProject?.category || 'Creative',
    image: existingProject?.image || '',
    description: existingProject?.description || '',
    backgroundColor: existingProject?.backgroundColor || '#f3f4f6',
    client: existingProject?.client || '',
    tools: existingProject?.tools || [],
    overview: existingProject?.overview || '',
    goals: existingProject?.goals || [],
    gallery: existingProject?.gallery || [],
    outcome: existingProject?.outcome || { stats: [], quote: undefined }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.id || !formData.title) {
      alert('Please fill in required fields');
      return;
    }

    const newProject: Project = {
      id: formData.id!,
      title: formData.title!,
      category: formData.category!,
      image: formData.image!,
      description: formData.description!,
      backgroundColor: formData.backgroundColor!,
      client: formData.client!,
      tools: formData.tools!,
      overview: formData.overview!,
      goals: formData.goals!,
      gallery: formData.gallery!,
      outcome: formData.outcome!
    };

    if (isEdit) {
      setProjects(projects.map(p => p.id === projectId ? newProject : p));
    } else {
      setProjects([...projects, newProject]);
    }

    navigate('/admin/projects');
  };

  const addTool = () => {
    setFormData({
      ...formData,
      tools: [...(formData.tools || []), '']
    });
  };

  const updateTool = (index: number, value: string) => {
    const newTools = [...(formData.tools || [])];
    newTools[index] = value;
    setFormData({ ...formData, tools: newTools });
  };

  const removeTool = (index: number) => {
    setFormData({
      ...formData,
      tools: formData.tools?.filter((_, i) => i !== index)
    });
  };

  const addGoal = () => {
    setFormData({
      ...formData,
      goals: [...(formData.goals || []), '']
    });
  };

  const updateGoal = (index: number, value: string) => {
    const newGoals = [...(formData.goals || [])];
    newGoals[index] = value;
    setFormData({ ...formData, goals: newGoals });
  };

  const removeGoal = (index: number) => {
    setFormData({
      ...formData,
      goals: formData.goals?.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/admin/projects')}
            className="mr-4 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEdit ? 'Edit Project' : 'Add New Project'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project ID *
              </label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isEdit}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Creative">Creative</option>
                <option value="Design">Design</option>
                <option value="Photo">Photo</option>
                <option value="Style">Style</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client *
              </label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL *
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Color
              </label>
              <input
                type="color"
                value={formData.backgroundColor}
                onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
                className="w-full h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Overview
            </label>
            <textarea
              value={formData.overview}
              onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tools
            </label>
            {formData.tools?.map((tool, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={tool}
                  onChange={(e) => updateTool(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeTool(index)}
                  className="ml-2 text-red-600 hover:text-red-800"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTool}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              + Add Tool
            </button>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goals
            </label>
            {formData.goals?.map((goal, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => updateGoal(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeGoal(index)}
                  className="ml-2 text-red-600 hover:text-red-800"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addGoal}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              + Add Goal
            </button>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/admin/projects')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <Save size={20} />
              {isEdit ? 'Update Project' : 'Create Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProjectView = ({ projects }: { projects: Project[] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.pathname.split('/').pop();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
          <button
            onClick={() => navigate('/admin/projects')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/admin/projects')}
            className="mr-4 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">View Project</h1>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div 
            className="h-64 flex items-center justify-center"
            style={{ backgroundColor: project.backgroundColor }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-h-48 object-contain"
            />
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Goals</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {project.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600">{project.overview}</p>
            </div>
            
            {project.outcome.stats && project.outcome.stats.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.outcome.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;