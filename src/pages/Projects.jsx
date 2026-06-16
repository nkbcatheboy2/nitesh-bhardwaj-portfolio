import React, { useState, useEffect } from 'react';

const ProjectSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-lg mb-4 group">
      {/* Images Wrapper */}
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${title} screenshot ${idx + 1}`} 
            className="w-full h-full object-cover shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        ))}
      </div>

      <button 
        onClick={(e) => { e.preventDefault(); setCurrentIndex((currentIndex - 1 + images.length) % images.length); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-950/70 border border-slate-800 rounded-full flex items-center justify-center text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cyan-500 hover:text-slate-900"
      >
        ◀
      </button>
      <button 
        onClick={(e) => { e.preventDefault(); setCurrentIndex((currentIndex + 1) % images.length); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-950/70 border border-slate-800 rounded-full flex items-center justify-center text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cyan-500 hover:text-slate-900"
      >
        ▶
      </button>

      {/* Bottom Dots Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-cyan-400 w-4' : 'bg-slate-600'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => setProjects(jsonData.projects))
      .catch((err) => console.error("Projects load nahi hue bhai:", err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-6">
      <div className="max-w-5xl mx-auto animate-fade-in">
        
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Key Projects
          </h2>
          <p className="text-sm text-slate-400 mt-1">Here is a showcase of my technical architectures and live builds.</p>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            // Agar backend/data.json mein images nahi hain, toh ye default 3 dummy premium images set kar dega
            const projectImages = project.images || [
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
            ];

            return (
              <div 
                key={project.id} 
                className="bg-slate-950/40 border border-slate-800 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  {/* Image Carousel Component */}
                  <ProjectSlider images={projectImages} title={project.title} />

                  {/* Badges and Text */}
                  <span className="text-[11px] font-bold text-purple-400 tracking-wider uppercase bg-purple-950/30 px-2 py-0.5 rounded border border-purple-900/40">
                    {project.tech}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 mt-2.5 mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">{project.description}</p>
                </div>
                
                {/* Action Links */}
                <div className="flex gap-5 border-t border-slate-900 pt-3 mt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                      📁 GitHub Repo
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-xs font-semibold text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors">
                      🌐 Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Projects;
