import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Crown } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">leo9</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Work
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center">
                Services
                <span className="ml-1 text-lg leading-none">•</span>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Clients
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center">
                About
                <span className="ml-1 text-lg leading-none">•</span>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Knowledge
            </a>
          </div>

          {/* Right side - Theme toggle and Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-gray-900">Work</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">Services</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">Clients</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">Knowledge</a>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;