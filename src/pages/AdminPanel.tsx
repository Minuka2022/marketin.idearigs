import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { 
  Plus, Edit, Trash2, Eye, ArrowLeft, Save, X, Search, Filter,
  BarChart3, Users, FolderOpen, Settings, LogOut, Home,
  Calendar, TrendingUp, Activity, Grid3X3, List, Image as ImageIcon,
  ExternalLink, ChevronRight, Bell, User
} from 'lucide-react';
// Import initial projects data for fallback
import { projects as initialProjectsData } from '../data/projects';

// Define interfaces for project data
interface ProjectOutcome {
  stats: Array<{ label: string; value: string; color?: string; icon?: string }>;
  quote?: { text: string; author: string };
}

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  backgroundColor: string;
  client: string;
  tools: string[];
  overview: string;
  goals: string[];
  gallery: string[];
  outcome: ProjectOutcome;
}

// Form data interface for project creation/editing
interface ProjectFormData {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  backgroundColor: string;
  client: string;
  tools: string[];
  overview: string;
  goals: string[];
  gallery: string[];
  outcome: {
    stats: Array<{ label: string; value: string; color?: string; icon?: string }>;
    quote?: { text: string; author: string };
  };
}

// Dashboard component
const Dashboard: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold flex items-center gap-2">
            <FolderOpen size={18} /> Projects
          </h2>
          <p className="text-3xl font-bold mt-2">{projects.length}</p>
          <Link to="/admin/projects" className="text-blue-500 text-sm flex items-center mt-2">
            View all <ChevronRight size={16} />
          </Link>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold flex items-center gap-2">
            <Activity size={18} /> Activity
          </h2>
          <p className="text-sm mt-2">Recent login: {new Date().toLocaleString()}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold flex items-center gap-2">
            <TrendingUp size={18} /> Stats
          </h2>
          <p className="text-sm mt-2">Portfolio views: 1,234</p>
        </div>
      </div>
    </div>
  );
};

// ProjectsList component
const ProjectsList: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    
    try {
      setIsLoading(true);
      const token = localStorage.getItem('admin_token');
      
      const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      // Refresh the page to get updated projects list
      window.location.reload();
    } catch (error) {
      console.error('Error deleting project:', error);
      setError('Failed to delete project. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link to="/admin/projects/new" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <Plus size={16} /> Add Project
        </Link>
      </div>

      {isLoading && <p className="text-center py-4">Loading projects...</p>}
      {error && <p className="text-red-500 py-2">{error}</p>}
      
      {!isLoading && projects.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded">
          <p className="text-gray-500">No projects found.</p>
          <Link to="/admin/projects/new" className="text-blue-500 mt-2 inline-block">
            Create your first project
          </Link>
        </div>
      )}

      {!isLoading && projects.length > 0 && (
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{project.id}</td>
                  <td className="py-3 px-4">{project.title}</td>
                  <td className="py-3 px-4">{project.category}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <Link to={`/admin/projects/view/${project.id}`} className="text-blue-500 hover:text-blue-700">
                      <Eye size={18} />
                    </Link>
                    <Link to={`/admin/projects/edit/${project.id}`} className="text-green-500 hover:text-green-700">
                      <Edit size={18} />
                    </Link>
                    <button 
                      onClick={() => handleDelete(project.id)} 
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const AdminPanel: React.FC = () => {
  // Convert initialProjects to match our Project interface
  const convertedProjects = initialProjects.map(p => ({
    ...p,
    tools: Array.isArray(p.tools) ? p.tools : [],
    goals: Array.isArray(p.goals) ? p.goals : [],
    gallery: Array.isArray(p.gallery) ? p.gallery : [],
    backgroundColor: p.backgroundColor || '#f3f4f6',
    outcome: {
      stats: Array.isArray(p.outcome?.stats) ? p.outcome.stats : [],
      quote: p.outcome?.quote
    }
  })) as Project[];
  
  const [projects, setProjects] = useState<Project[]>(convertedProjects);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('admin@example.com');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication on component mount
  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      // Redirect to dashboard if on login page
      if (location.pathname === '/admin') {
        navigate('/admin/dashboard');
      }
    }
  }, [location.pathname, navigate]);

  // Fetch projects when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchProjects();
    }
  }, [isAuthenticated]);

  // Fetch projects from backend API
  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      if (!token) return;

      const response = await fetch('http://localhost:5000/api/projects', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }

      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Save token and authentication state
      localStorage.setItem('admin_auth', 'true');
      localStorage.setItem('admin_token', data.token);
      
      setIsAuthenticated(true);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };


const AdminPanel = () => {
  // Convert initialProjects to match our Project interface
  const convertedProjects = initialProjects.map(p => ({
    ...p,
    tools: Array.isArray(p.tools) ? p.tools : [],
    goals: Array.isArray(p.goals) ? p.goals : [],
    gallery: Array.isArray(p.gallery) ? p.gallery : [],
    backgroundColor: p.backgroundColor || '#f3f4f6',
    outcome: {
      stats: Array.isArray(p.outcome?.stats) ? p.outcome.stats : [],
      quote: p.outcome?.quote
    }
  }));

  const [projects, setProjects] = useState<Project[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('admin@example.com');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Save token and authentication state
      localStorage.setItem('admin_auth', 'true');
      localStorage.setItem('admin_token', data.token);
      
      setIsAuthenticated(true);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('admin_token');
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
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
            
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
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </>
              ) : 'Sign In'}
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
  };

  // ...

  const navigate = useNavigate();
  const { id: projectId } = useParams<{ id?: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [project, setProject] = useState<Project | undefined>(projects.find(p => p.id === projectId));

  useEffect(() => {
    // ...
  }, [projectId, project]);

  // ...

    );
  }

  if (!project) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/admin/projects')}
          className="bg-gray-900 text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft size={20} />
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