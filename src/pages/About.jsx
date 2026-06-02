import React, { useState, useEffect } from 'react';

const About = () => {
  const [personal, setPersonal] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => setPersonal(jsonData.personalDetails))
      .catch((err) => console.error("About data load nahi hua bhai:", err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-4 sm:px-6 pb-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto animate-fade-in space-y-16">
        
        {/* ================= 1. HEADER, PROFILE & SOCIAL LINKS ================= */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Glowing Profile Image */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border-2 border-slate-800 overflow-hidden shadow-2xl">
              <img 
                /* Bhai, yahan apni photo ka path daal dena (jaise /my-photo.jpg ya URL) */
                src="..\public\web-dev (3).jpg" 
                alt="Nitesh Bhardwaj" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Small floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-slate-950 border border-slate-800 p-2 rounded-lg shadow-xl">
              <span className="text-xl">💻</span>
            </div>
          </div>

          {/* Heading, Social Links & Top Overview Cards */}
          <div className="flex-1 w-full text-center md:text-left space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me & My Professional Journey
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-2xl mx-auto md:mx-0">
                A brief look into my academic background, corporate experience, and skill milestones. I believe in writing clean code and managing projects with absolute precision.
              </p>

              {/* === ATTRACTIVE SOCIAL MEDIA LINKS === */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/bcatheboy2/" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-slate-300 border border-slate-700 rounded-lg shadow-md hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/nkbcatheboy2" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-slate-300 border border-slate-700 rounded-lg shadow-md hover:-translate-y-1 hover:border-slate-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.96-1.38-.09-.225-.48-1.38-1.035-1.65-.45-.21-1.095-.78-.015-.795 1.02-.015 1.74.93 1.98 1.32 1.155 1.965 3.015 1.41 3.75 1.08.12-.84.45-1.41.825-1.74-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.465.39.87 1.17.87 2.355 0 1.71-.015 3.09-.015 3.51 0 .33.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/917897130368" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-slate-300 border border-slate-700 rounded-lg shadow-md hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M11.996 0C5.372 0 0 5.373 0 11.999c0 2.12.551 4.148 1.597 5.952L.116 23.885l6.104-1.6c1.761.968 3.738 1.478 5.776 1.478 6.623 0 11.998-5.375 11.998-12.001C24 5.373 18.619 0 11.996 0zM12 21.727c-1.785 0-3.535-.48-5.07-1.388l-.364-.214-3.766.988.999-3.673-.235-.374A9.972 9.972 0 012.031 12C2.031 6.502 6.504 2.032 12 2.032 17.495 2.032 21.969 6.502 21.969 12c0 5.497-4.473 9.969-9.969 9.969zm5.485-7.493c-.301-.151-1.781-.881-2.057-.981-.277-.101-.48-.151-.68.151-.202.302-.78 .982-.956 1.183-.176.202-.353.226-.654.075-1.322-.656-2.457-1.631-3.308-2.825-.232-.323-.026-.5.123-.65.135-.135.301-.352.451-.527.152-.176.202-.302.303-.503.1-.202.05-.378-.025-.529-.076-.151-.681-1.642-.932-2.248-.246-.593-.496-.512-.68-.521h-.58c-.201 0-.528.075-.805.376-.276.302-1.055 1.031-1.055 2.515s1.08 2.917 1.23 3.118c.151.201 2.127 3.245 5.15 4.547 2.009.866 2.802.935 3.328.789.605-.168 1.781-.728 2.032-1.432.251-.703.251-1.306.176-1.432-.075-.126-.277-.201-.579-.352z"/></svg>
                  WhatsApp
                </a>

                {/* Instagram (Placeholder link replace karna apna) */}
                <a 
                  href="https://www.instagram.com/bca_the_boy2?" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-slate-300 border border-slate-700 rounded-lg shadow-md hover:-translate-y-1 hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>

                {/* Facebook (Placeholder link replace karna apna) */}
                <a 
                  href="https://facebook.com/bcatheboy2" 
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-slate-300 border border-slate-700 rounded-lg shadow-md hover:-translate-y-1 hover:border-blue-600 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 text-sm font-semibold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                  Facebook
                </a>

              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/50 transition-all hover:-translate-y-1">
                <h3 className="text-sm font-bold text-cyan-400 mb-1">Education</h3>
                <p className="font-semibold text-slate-200 text-xs sm:text-sm">BCA Graduate</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Score: 79.83% GPA</p>
              </div>

              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-purple-500/50 transition-all hover:-translate-y-1">
                <h3 className="text-sm font-bold text-purple-400 mb-1">Corporate</h3>
                <p className="font-semibold text-slate-200 text-xs sm:text-sm">Project Coordinator</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">LDA / E-Connect</p>
              </div>

              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-pink-500/50 transition-all hover:-translate-y-1">
                <h3 className="text-sm font-bold text-pink-400 mb-1">Core Focus</h3>
                <p className="font-semibold text-slate-200 text-xs sm:text-sm">Frontend Eng.</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">React, JS, Tailwind</p>
              </div>

              <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/50 transition-all hover:-translate-y-1">
                <h3 className="text-sm font-bold text-emerald-400 mb-1">Vision</h3>
                <p className="font-semibold text-slate-200 text-xs sm:text-sm">AI Integration</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Smart Assistants</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. GRID STRUCTURE (EXPERIENCE & CERTS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Columns: Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-2 mb-6 flex items-center gap-2">
              💼 Work Experience
            </h3>
            
            <div className="border-l-2 border-slate-800 pl-6 space-y-8 relative">
              
              {/* Experience 1 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0a0f1c] group-hover:scale-125 transition-transform"></div>
                <div className="bg-slate-950/30 border border-slate-800/50 p-5 rounded-xl hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <h4 className="text-lg font-bold text-cyan-400">Project Coordinator</h4>
                    <span className="text-xs bg-slate-800 border border-slate-700 px-2 py-1 rounded text-cyan-300 font-medium">March 2026 - Present</span>
                  </div>
                  <p className="text-xs font-bold text-slate-300">Lucknow Development Authority (LDA) | Lucknow, UP</p>
                  
                  <ul className="text-xs sm:text-sm text-slate-400 mt-3 list-disc pl-4 space-y-1.5 leading-relaxed">
                    <li>Coordinating multi-tier project activities at the client site, ensuring seamless alignment between tech solutions and organizational workflows.</li>
                    <li>Managing end-to-end documentation, daily reporting, and cross-functional stakeholder communication for compliance.</li>
                    <li>Maintaining and optimizing core internal databases, tracking system logs, and enforcing strict data accuracy standards.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0f1c] group-hover:scale-125 transition-transform"></div>
                <div className="bg-slate-950/30 border border-slate-800/50 p-5 rounded-xl hover:border-purple-500/30 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <h4 className="text-lg font-bold text-purple-400">Web Development Teacher</h4>
                    <span className="text-xs bg-slate-800 border border-slate-700 px-2 py-1 rounded text-purple-300 font-medium">June 2023 - April 2024</span>
                  </div>
                  <p className="text-xs font-bold text-slate-300">Oxford Group of Institutions | Farrukhabad, UP</p>
                  
                  <ul className="text-xs sm:text-sm text-slate-400 mt-3 list-disc pl-4 space-y-1.5 leading-relaxed">
                    <li>Mentored and instructed 100+ students in fundamental and advanced web technologies (HTML5, CSS3, JavaScript, Bootstrap).</li>
                    <li>Designed hands-on practical curriculums and guided students through live portfolio-building projects.</li>
                    <li>Conducted technical evaluations and practical lab sessions to track student performance.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Right 1 Column: Certifications & Strengths */}
          <div className="space-y-8">
            {/* Certifications Card */}
            <div>
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-2 mb-4 flex items-center gap-2">
                📜 Certifications
              </h3>
              <div className="bg-slate-950/30 border border-slate-800 rounded-xl p-5 space-y-4 backdrop-blur-sm">
                <div className="border-l-2 border-cyan-500 pl-3 hover:translate-x-1 transition-transform">
                  <p className="text-sm font-bold text-slate-200">Frontend Developer Certification</p>
                  <p className="text-xs text-slate-500">Great Learning Academy</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-3 hover:translate-x-1 transition-transform">
                  <p className="text-sm font-bold text-slate-200">Building Responsive Landing Pages</p>
                  <p className="text-xs text-slate-500">Geekster (HTML/CSS)</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-3 hover:translate-x-1 transition-transform">
                  <p className="text-sm font-bold text-slate-200">Python Language Essentials</p>
                  <p className="text-xs text-slate-500">Geekster</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3 hover:translate-x-1 transition-transform">
                  <p className="text-sm font-bold text-slate-200">Digital Graphic & UI Elements</p>
                  <p className="text-xs text-slate-500">Canva Certificate</p>
                </div>
              </div>
            </div>

            {/* Strengths Card */}
            <div>
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-2 mb-4 flex items-center gap-2">
                🎯 Core Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Project Lifecycle Coordination", "Agile Practices", "Technical Instruction", "Client-Site Management", "Responsive UI/UX Trends", "Database Management"].map((strength, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] font-bold bg-slate-900 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-full hover:border-cyan-500 hover:text-cyan-400 transition-colors shadow-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. PHOTO GALLERY ================= */}
        <div className="pt-10 border-t border-slate-800/50">
          <div className="mb-8 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Moments & Setup
            </h3>
            <p className="text-sm text-slate-400 mt-1">A glimpse into my workspace, events, and coding setup.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Gallery Image 1 */}
            <div className="group overflow-hidden rounded-xl border border-slate-800 aspect-square relative cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Workspace" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-sm">Workspace</span>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="group overflow-hidden rounded-xl border border-slate-800 aspect-square relative cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Team Collab" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-purple-400 font-bold text-sm">Team Work</span>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="group overflow-hidden rounded-xl border border-slate-800 aspect-square relative cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                alt="Coding" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-sm">Late Night Code</span>
              </div>
            </div>

            {/* Gallery Image 4 */}
            <div className="group overflow-hidden rounded-xl border border-slate-800 aspect-square relative cursor-pointer">
              <img 
                src="..\public\web-dev (4).jpg" 
                alt="Setup" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-pink-400 font-bold text-sm">System Setup</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;