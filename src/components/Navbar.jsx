import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Name */}
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
            Nitesh.Dev
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-200">
              Home
            </Link>
            
            <Link to="/about" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/services" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-200">
              Services
            </Link>

            {/* Services Dropdown (Hover Control) */}
            <div className="relative group py-2">
              <button className="text-slate-300 group-hover:text-cyan-400 font-medium flex items-center gap-1 transition-colors duration-200">
                SKILLS
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className="absolute right-0 top-full w-44 bg-slate-950 border border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link to="/projects" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-cyan-400 rounded-t-lg">Projects</Link>
                <Link to="/skills" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-cyan-400">Skills</Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-cyan-400 rounded-b-lg">Contact</Link>
              </div>
            </div>

            {/* Blog Dropdown (Hover Control) */}
            <div className="relative group py-2">
              <button className="text-slate-300 group-hover:text-purple-400 font-medium flex items-center gap-1 transition-colors duration-200">
                Blog
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>
              <div className="absolute right-0 top-full w-44 bg-slate-950 border border-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link to="/articles" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-purple-400 rounded-t-lg">Articles</Link>
                <Link to="/videos" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-900 hover:text-purple-400 rounded-b-lg">YouTube Videos</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;