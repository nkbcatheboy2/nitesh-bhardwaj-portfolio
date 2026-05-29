import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => {
        // Sirf YouTube Videos filter karne ke liye logic
        const filtered = jsonData.blogs.filter(blog => blog.type === 'YouTube Video');
        setVideos(filtered);
      })
      .catch((err) => console.error("Videos load nahi hue bhai:", err));
  }, []);

  return (
    <div className="min-h-[80vh] bg-slate-900 text-slate-100 pt-24 px-6 pb-12">
      <div className="max-w-5xl mx-auto animate-fade-in">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase bg-red-950/40 px-2.5 py-1 rounded border border-red-950">
            🎬 Visual Learning
          </span>
          <h2 className="text-3xl font-extrabold mt-3 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
            YouTube & Video Guides
          </h2>
          <p className="text-xs text-slate-400 mt-1">Video lectures, project walk-throughs, and technical live screen recordings.</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-slate-950/40 border border-slate-800/80 rounded-xl overflow-hidden group hover:border-red-500/40 transition-all duration-300 backdrop-blur-md">
              
              {/* Dummy High-Tech Video Thumbnail Placeholder */}
              <div className="relative w-full h-44 bg-slate-900 overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                />
                {/* Play Button Icon */}
                <div className="absolute w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-lg transition-transform duration-300 transform group-hover:scale-110">
                  <span className="text-white text-xs pl-0.5">▶</span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-red-400 bg-red-950/30 px-2 py-0.5 rounded">
                  {video.type}
                </span>
                <h3 className="text-base font-bold text-slate-200 pt-1">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500">Mentorship evaluation series & full layout debugging.</p>
                
                <div className="pt-2">
                  <a 
                    href={video.link} 
                    className="text-xs font-semibold text-cyan-400 hover:underline inline-block"
                  >
                    Watch Broadcast Stream →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Videos;