import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';       
import Projects from './pages/Projects';   
import Skills from './pages/Skills';       
import Contact from './pages/Contact';     
import Articles from './pages/Articles';   
import Videos from './pages/Videos';       
import Admin from './pages/Admin';         // <-- Naya Admin Page Import

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 flex flex-col justify-between">
        
        <div>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />      
            <Route path="/contact" element={<Contact />} />    
            <Route path="/articles" element={<Articles />} />  
            <Route path="/videos" element={<Videos />} />      
            <Route path="/admin" element={<Admin />} />        {/* <-- Admin Route Add Ho Gaya */}
          </Routes>
        </div>

        {/* Global Footer */}
        <footer className="w-full backdrop-blur-md bg-slate-950 border-t border-slate-800/80 py-6 px-6 text-center text-xs text-slate-500 mt-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Nitesh Bhardwaj. Built with React & Tailwind CSS.[cite: 1]</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/bcatheboy2/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/nkbcatheboy2" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
              <a href="mailto:bcatheboy2@gmail.com" className="hover:text-pink-400 transition-colors">Email</a>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;