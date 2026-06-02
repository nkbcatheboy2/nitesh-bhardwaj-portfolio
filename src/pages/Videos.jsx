import React, { useState, useEffect } from 'react';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  // Tumhara apna YouTube Channel Link
  const myChannelLink = "https://www.youtube.com/@bcatheboy2_nk";

  // Tumhari videos ki list (Yahan tum aur bhi videos add kar sakte ho aage chalkar)
  const myVideos = [
    {
      id: "vid_1",
      type: "YouTube Video",
      title: "My Latest YouTube Broadcast", // Yahan apni video ka asli title likh lena
      desc: "Watch my latest updates and technical walkthroughs directly on YouTube.",
      // YouTube video ID 'jegdY-Woz6s' use karke auto-thumbnail nikal liya
      thumbnail: "https://img.youtube.com/vi/jegdY-Woz6s/maxresdefault.jpg", 
      link: "https://youtu.be/jegdY-Woz6s?si=2f-BHgFtbS7JoSDe"
    }
  ];

  useEffect(() => {
    // Agar data.json mein bhi kuch videos hain toh unhe yahan load karenge
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => {
        const filtered = jsonData.blogs ? jsonData.blogs.filter(blog => blog.type === 'YouTube Video') : [];
        // Apni hardcoded video aur JSON ki videos ko mila diya
        setVideos([...myVideos, ...filtered]);
      })
      .catch((err) => {
        console.error("JSON load nahi hua, par apni video dikhegi:", err);
        setVideos(myVideos); // Error aane par bhi kam se kam apni video dikhegi
      });
  }, []);

  return (
    <div className="min-h-[80vh] bg-slate-900 text-slate-100 pt-24 px-4 sm:px-6 pb-12">
      <div className="max-w-5xl mx-auto animate-fade-in">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase bg-red-950/40 px-2.5 py-1 rounded border border-red-950">
              🎬 Visual Learning
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              YouTube & Video Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Video lectures, project walk-throughs, and technical live screen recordings.
            </p>
          </div>

          {/* YouTube Channel Button */}
          <div>
            <a 
              href={myChannelLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Visit My Channel
            </a>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <a 
              key={video.id || index} 
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-950/40 border border-slate-800/80 rounded-xl overflow-hidden group hover:border-red-500/40 transition-all duration-300 backdrop-blur-md block shadow-lg hover:shadow-red-500/10"
            >
              
              {/* YouTube Thumbnail */}
              <div className="relative w-full h-48 sm:h-56 bg-slate-900 overflow-hidden flex items-center justify-center">
                <img 
                  src={video.thumbnail || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"} 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                />
                {/* Play Button Icon */}
                <div className="absolute w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.6)] transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-white text-lg pl-1">▶</span>
                </div>
              </div>

              {/* Content Description */}
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-red-400 bg-red-950/30 px-2 py-0.5 rounded">
                  {video.type || 'YouTube Video'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-200 pt-1 group-hover:text-red-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {video.desc || "Mentorship evaluation series & full layout debugging."}
                </p>
                
                <div className="pt-3">
                  <span className="text-xs font-bold text-cyan-400 group-hover:underline inline-block">
                    Watch on YouTube →
                  </span>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Videos;
