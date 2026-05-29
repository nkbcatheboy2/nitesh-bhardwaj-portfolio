import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  
  // Pop-up Modal ke liye local states
  const [isOpen, setIsOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => {
        const filtered = jsonData.blogs.filter(blog => blog.type === 'Article');
        setArticles(filtered);
      })
      .catch((err) => console.error("Articles load nahi hue bhai:", err));
  }, []);

  // Pop-up kholne ka function
  const openModal = (article) => {
    setActiveArticle(article);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Niche ka background scroll na ho
  };

  // Pop-up band karne ka function
  const closeModal = () => {
    setIsOpen(false);
    setActiveArticle(null);
    document.body.style.overflow = 'unset'; // Scroll wapas normal karein
  };

  return (
    <div className="min-h-[80vh] bg-slate-900 text-slate-100 pt-24 px-6 pb-12 relative">
      <div className="max-w-5xl mx-auto animate-fade-in">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase bg-purple-950/40 px-2.5 py-1 rounded border border-purple-950">
            ✍️ Tech Publications
          </span>
          <h2 className="text-3xl font-extrabold mt-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Articles & Insights
          </h2>
          <p className="text-xs text-slate-400 mt-1">Deep dives into web ecosystems, React optimization, and full-stack architectures.</p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => {
            // Agar file mein dummy content na ho toh defaults add kar rahe hain
            const shortDesc = "Explore how to effectively scale architectures using optimized state engines and streamlined token data streaming paths.";
            
            return (
              <div 
                key={article.id} 
                className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-3">
                    <span>Category: Tech Architecture</span>
                    <span className="text-purple-400">5 Min Read</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-purple-400 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {shortDesc}
                  </p>
                </div>

                {/* Ab ye link ki jagah pop-up trigger karega */}
                <button 
                  onClick={() => openModal(article)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 mt-2 transition-colors cursor-pointer text-left self-start"
                >
                  Read Full Publication ➜
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* DYNAMIC HIGH-TECH MODAL POP-UP */}
      {isOpen && activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-slate-950/60 animate-fade-in">
          
          {/* Modal Outer Shell Box */}
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
            
            {/* Close Cross Button Top Right */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 hover:border-red-500 hover:text-red-400 flex items-center justify-center text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Heading Meta */}
            <div className="space-y-2 border-b border-slate-900 pb-4">
              <div className="flex gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                <span>Category: AI Core & Web Systems</span>
                <span>•</span>
                <span className="text-purple-400">Systems Operational</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-100 pr-6 leading-tight">
                {activeArticle.title}
              </h3>
            </div>

            {/* Full Expanded Content Text Layer */}
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
              <p className="font-semibold text-cyan-400 text-xs sm:text-sm uppercase tracking-wider">
                ⚡ [Console Log Initialization: Core Content Payload]
              </p>
              <p>
                The development of intelligent digital systems requires building scalable UI layers that can respond to intense server data transfers. Modern architectures leverage optimized state machines to minimize unneeded rendering overhead[cite: 1].
              </p>
              <p>
                By building dedicated hooks, applications isolate streaming interface states from standard presentation cycles. This maintains steady browser execution metrics even during multi-token text rendering.
              </p>
              <p className="bg-slate-900/60 border border-slate-850 p-3 rounded font-mono text-xs text-slate-400">
                // System Architectural Blueprint Overview<br/>
                - Isolation of core stream buffering states.<br/>
                - Continuous tracking across active network endpoints.<br/>
                - Optimized DOM thread mapping layout designs.[cite: 1]
              </p>
              <p>
                As tech platforms transition into intelligent computing workspaces, frontends change from raw informational sites into interactive tools designed to bridge complex local logic with human workflows.
              </p>
            </div>

            {/* Modal Footer Control Options */}
            <div className="border-t border-slate-900 pt-4 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-4 py-2 text-xs font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-cyan-500/10"
              >
                Close Terminal Window
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Articles;