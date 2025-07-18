import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Plus, Edit, Trash2, Eye, ArrowLeft, Save, X, Search, Filter,
  BarChart3, Users, FolderOpen, Settings, LogOut, Home,
  Calendar, TrendingUp, Activity, Grid3X3, List, Image,
  ExternalLink, ChevronRight, Bell, User
} from 'lucide-react';
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your admin account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm inline-flex items-center gap-1">
              <ArrowLeft size={16} />
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-30">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Admin</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link
              to="/admin/dashboard"
              className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                location.pathname === '/admin/dashboard'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <BarChart3 size={20} className="mr-3" />
              Dashboard
            </Link>
            
            <Link
              to="/admin/projects"
              className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                location.pathname.includes('/admin/projects')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <FolderOpen size={20} className="mr-3" />
              Projects
            </Link>
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              <Link
                to="/"
                className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <ExternalLink size={20} className="mr-3" />
                View Website
              </Link>
            </div>
          </nav>

          {/* User Menu */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {location.pathname.includes('/projects') ? 'Projects' : 'Dashboard'}
              </h1>
              <p className="text-gray-600 mt-1">
                {location.pathname.includes('/projects') 
                  ? 'Manage your portfolio projects' 
                  : 'Welcome back, here\'s what\'s happening'
                }
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell size={20} />
              </button>
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard projects={projects} />} />
            <Route path="/dashboard" element={<Dashboard projects={projects} />} />
            <Route path="/projects" element={<ProjectsList projects={projects} setProjects={setProjects} />} />
            <Route path="/projects/new" element={<ProjectForm projects={projects} setProjects={setProjects} />} />
            <Route path="/projects/edit/:id" element={<ProjectForm projects={projects} setProjects={setProjects} />} />
            <Route path="/projects/view/:id" element={<ProjectView projects={projects} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const Dashboard = ({ projects }: { projects: Project[] }) => {
  const stats = {
    totalProjects: projects.length,
    categories: [...new Set(projects.map(p => p.category))].length,
    recentProjects: projects.slice(-3)
  };

  const statCards = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      change: '+12%',
      icon: FolderOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Categories',
      value: stats.categories,
      change: '+2',
      icon: Grid3X3,
      color: 'bg-green-500'
    },
    {
      title: 'This Month',
      value: '8',
      change: '+25%',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Active',
      value: stats.totalProjects,
      change: '100%',
      icon: Activity,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/projects/new"
            className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
              <Plus size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 group-hover:text-gray-700">Add New Project</h4>
              <p className="text-sm text-gray-600">Create a new portfolio item</p>
            </div>
            <ChevronRight size={20} className="text-gray-400 ml-auto" />
          </Link>
          
          <Link
            to="/admin/projects"
            className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
              <List size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 group-hover:text-gray-700">Manage Projects</h4>
              <p className="text-sm text-gray-600">Edit existing projects</p>
            </div>
            <ChevronRight size={20} className="text-gray-400 ml-auto" />
          </Link>
          
          <Link
            to="/"
            className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
              <ExternalLink size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 group-hover:text-gray-700">View Website</h4>
              <p className="text-sm text-gray-600">See live portfolio</p>
            </div>
            <ChevronRight size={20} className="text-gray-400 ml-auto" />
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
          <Link to="/admin/projects" className="text-sm text-gray-600 hover:text-gray-900">
            View all
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.recentProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div 
                className="w-full h-48 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.backgroundColor }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h4 className="font-medium text-gray-900 group-hover:text-gray-700">{project.title}</h4>
              <p className="text-sm text-gray-600">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsList = ({ projects, setProjects }: { projects: Project[], setProjects: (projects: Project[]) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-600 mt-1">{filteredProjects.length} projects found</p>
        </div>
        
        <Link
          to="/admin/projects/new"
          className="bg-gray-900 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
        >
          <Plus size={20} />
          Add Project
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Project</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Category</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Client</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Tools</th>
                <th className="text-right py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: project.backgroundColor }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-600 truncate max-w-xs">{project.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {project.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{project.client}</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 2).map((tool, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                          +{project.tools.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end space-x-2">
                      <Link
                        to={`/admin/projects/view/${project.id}`}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye size={16} />
                      </Link>
                      <Link
                        to={`/admin/projects/edit/${project.id}`}
                        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-4">Get started by creating your first project.</p>
            <Link
              to="/admin/projects/new"
              className="bg-gray-900 text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              <Plus size={20} />
              Add Project
            </Link>
          </div>
        )}
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/admin/projects')}
          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isEdit ? 'Edit Project' : 'Create New Project'}
          </h2>
          <p className="text-gray-600 mt-1">
            {isEdit ? 'Update project information' : 'Add a new project to your portfolio'}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project ID *
              </label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
                disabled={isEdit}
                placeholder="unique-project-id"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
                placeholder="PROJECT NAME"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
                placeholder="Client Name"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Background Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.backgroundColor}
                  onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
                  className="w-12 h-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <input
                  type="text"
                  value={formData.backgroundColor}
                  onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="#f3f4f6"
                />
              </div>
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
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Brief project description..."
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Overview
            </label>
            <textarea
              value={formData.overview}
              onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Detailed project overview..."
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Tools & Technologies</h3>
            <button
              type="button"
              onClick={addTool}
              className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
            >
              <Plus size={16} />
              Add Tool
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.tools?.map((tool, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="text"
                  value={tool}
                  onChange={(e) => updateTool(index, e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Tool name"
                />
                <button
                  type="button"
                  onClick={() => removeTool(index)}
                  className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            
            {(!formData.tools || formData.tools.length === 0) && (
              <p className="text-gray-500 text-center py-4">No tools added yet. Click "Add Tool" to get started.</p>
            )}
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Project Goals</h3>
            <button
              type="button"
              onClick={addGoal}
              className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
            >
              <Plus size={16} />
              Add Goal
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.goals?.map((goal, index) => (
              <div key={index} className="flex items-center gap-3">
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => updateGoal(index, e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Project goal"
                />
                <button
                  type="button"
                  onClick={() => removeGoal(index)}
                  className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            
            {(!formData.goals || formData.goals.length === 0) && (
              <p className="text-gray-500 text-center py-4">No goals added yet. Click "Add Goal" to get started.</p>
            )}
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end gap-4 pt-6">
          <button
            type="button"
            onClick={() => navigate('/admin/projects')}
            className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            <Save size={20} />
            {isEdit ? 'Update Project' : 'Create Project'}
          </button>
        </div>
      </form>
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
      <div className="text-center py-12">
        <FolderOpen size={48} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Project not found</h3>
        <button
          onClick={() => navigate('/admin/projects')}
          className="text-gray-600 hover:text-gray-900"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/admin/projects')}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-gray-600 mt-1">{project.category} • {project.client}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Link
            to={`/admin/projects/edit/${project.id}`}
            className="bg-gray-900 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            <Edit size={16} />
            Edit Project
          </Link>
        </div>
      </div>

      {/* Project Preview */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div 
          className="h-80 flex items-center justify-center"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="max-h-64 object-contain"
          />
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Description</h4>
                  <p className="text-gray-600">{project.description || 'No description provided'}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Overview</h4>
                  <p className="text-gray-600">{project.overview || 'No overview provided'}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Info</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Project Goals</h4>
                  <ul className="space-y-1">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {project.outcome.stats && project.outcome.stats.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.outcome.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;