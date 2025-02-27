import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-accent' : 'text-gray-300 hover:text-white';
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 bg-primary/80 rounded-full backdrop-blur-sm md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition duration-300 ease-in-out z-40 w-64 bg-primary/95 backdrop-blur-sm md:bg-primary/80 border-r border-gray-800`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mb-10">
            <Link to="/" onClick={closeMenu} className="text-2xl font-bold tracking-tight">
              anthime
            </Link>
          </div>
          
          <nav className="flex-1">
            <ul className="space-y-4 text-lg">
              <li>
                <Link 
                  to="/lumiere" 
                  onClick={closeMenu}
                  className={`block transition-colors duration-200 ${isActive('/lumiere')}`}
                >
                  lumière
                </Link>
              </li>
              <li>
                <Link 
                  to="/installation" 
                  onClick={closeMenu}
                  className={`block transition-colors duration-200 ${isActive('/installation')}`}
                >
                  installation
                </Link>
              </li>
              <li>
                <Link 
                  to="/video" 
                  onClick={closeMenu}
                  className={`block transition-colors duration-200 ${isActive('/video')}`}
                >
                  video
                </Link>
              </li>
              <li>
                <Link 
                  to="/image" 
                  onClick={closeMenu}
                  className={`block transition-colors duration-200 ${isActive('/image')}`}
                >
                  image
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="mt-auto pt-6 border-t border-gray-800">
            <div className="flex space-x-4">
              <a href="mailto:anthimedesboispro@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              © {new Date().getFullYear()} anthime
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;