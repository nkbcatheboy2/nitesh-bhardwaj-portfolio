import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', type: 'Article', link: '#' });
  const [logStatus, setLogStatus] = useState('System Idle');

  // Pehle se maujood data load karne ke liye
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => setBlogs(jsonData.blogs))
      .catch((err) => console.error("Admin logs load nahi hue:", err));
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Naya post status state mein push karne ka logic
  const handlePostSubmit = (e) => {
    e.preventDefault();
    setLogStatus('Processing New Data Matrix...');

    const newPost = {
      id: blogs.length + 1,
      title: form.title,
      type: form.type,
      link: form.link
    };

    setTimeout(() => {
      // Local Array state mein data turant update ho jayega
      setBlogs([newPost, ...blogs]);
      setLogStatus(`Success: Deployed [${form.type}] - "${form.title}"`);
      setForm({ title: '', type: 'Article', link: '#' });
    }, 1200);
  };

  return (
    <div className="min-h-[85vh] bg-slate-900 text-slate-100 pt-24 px-6 pb-12">
      <div className="max-w-6xl mx-auto animate-fade-in space-y-8">
        
        {/* Header Panel */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900/30">
              🔒 Admin Access Locked
            </span>
            <h2 className="text-3xl font-extrabold mt-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Content Management Terminal
            </h2>
          </div>
          <div className="font-mono text-xs bg-slate-950 p-3 rounded-lg border border-slate-800 w-full md:w-auto text-left">
            <span className="text-slate-500">Live_Console:</span> <span className="text-cyan-400 animate-pulse">{logStatus}</span>
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1 & 2: Creation Form Box */}
          <div className="lg:col-span-1 bg-slate-950/40 border border-slate-800 p-6 rounded-2xl shadow-2xl backdrop-blur-md h-fit">
            <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
              🚀 Deploy New Asset
            </h3>
            
            <form onSubmit={handlePostSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Asset Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={form.title}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Mastering React Hooks Architecture" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Content Classification</label>
                <select 
                  name="type"
                  value={form.type}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="Article">Article / Technical Blog</option>
                  <option value="YouTube Video">YouTube Video Tutorial</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Resource URL Redirect</label>
                <input 
                  type="text" 
                  name="link"
                  value={form.link}
                  onChange={handleInputChange}
                  required
                  placeholder="https://youtube.com/... or github link" 
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 mt-2 font-bold text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
              >
                Inject into Feed Matrix
              </button>
            </form>
          </div>

          {/* Column 3: Live Feed Activity Monitor */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
              📊 Active Content Logs ({blogs.length})
            </h3>
            
            <div className="bg-slate-950/20 border border-slate-800/80 rounded-2xl p-4 h-[400px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
              {blogs.map((blog) => (
                <div 
                  key={blog.id} 
                  className="bg-slate-950/60 border border-slate-900 p-3.5 rounded-xl flex items-center justify-between gap-4 group hover:border-slate-800 transition-colors"
                >
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{blog.title}</p>
                    <p className="text-[10px] font-mono text-slate-500">ID: {blog.id} | Target: {blog.link}</p>
                  </div>
                  
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded shrink-0 ${
                    blog.type === 'Article' 
                      ? 'bg-purple-950/40 text-purple-400 border border-purple-900/40' 
                      : 'bg-red-950/40 text-red-400 border border-red-900/40'
                  }`}>
                    {blog.type === 'Article' ? '✍️ Blog' : '🎬 Video'}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Admin;