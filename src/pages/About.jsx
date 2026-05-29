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
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-6 pb-12">
      <div className="max-w-5xl mx-auto animate-fade-in">
        
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me & My Professional Journey
          </h2>
          <p className="text-sm text-slate-400 mt-1">A brief look into my academic background, corporate experience, and skill milestones.</p>
        </div>

        {/* Top Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/30 transition-all">
            <h3 className="text-lg font-bold text-cyan-400 mb-1">Education</h3>
            <p className="font-semibold text-slate-200 text-sm">BCA Graduate</p>
            <p className="text-xs text-slate-400">Score: 79.83% GPA</p>
            <p className="text-[11px] text-slate-500 mt-1">Makhanlal Chaturvedi University</p>
          </div>

          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-purple-500/30 transition-all">
            <h3 className="text-lg font-bold text-purple-400 mb-1">Corporate Role</h3>
            <p className="font-semibold text-slate-200 text-sm">Project Coordinator</p>
            <p className="text-xs text-slate-400">Lucknow Development Authority</p>
          </div>

          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-pink-500/30 transition-all">
            <h3 className="text-lg font-bold text-pink-400 mb-1">Core Focus</h3>
            <p className="font-semibold text-slate-200 text-sm">Frontend Engineering</p>
            <p className="text-xs text-slate-400">React.js, JS (ES6+), Tailwind</p>
          </div>

          <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/30 transition-all">
            <h3 className="text-lg font-bold text-emerald-400 mb-1">Vision</h3>
            <p className="font-semibold text-slate-200 text-sm">AI Integration</p>
            <p className="text-xs text-slate-400">Building Smart Assistants</p>
          </div>
        </div>

        {/* Grid Structure for Experience & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Columns: Professional Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-2 mb-6 flex items-center gap-2">
              💼 Work Experience
            </h3>
            
            <div className="border-l-2 border-slate-800 pl-6 space-y-8">
              {/* Experience 1 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900"></div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h4 className="text-lg font-bold text-cyan-400">Project Coordinator</h4>
                  <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-medium">March 2026 - Present</span>
                </div>
                <p className="text-xs font-semibold text-slate-300 mt-0.5">Lucknow Development Authority (LDA) | Lucknow, UP</p>
                
                <ul className="text-xs sm:text-sm text-slate-400 mt-3 list-disc pl-4 space-y-1.5 leading-relaxed">
                  <li>Coordinating multi-tier project activities at the client site, ensuring seamless alignment between tech solutions and organizational workflows.</li>
                  <li>Managing end-to-end documentation, daily reporting, and cross-functional stakeholder communication for compliance.</li>
                  <li>Maintaining and optimizing core internal databases, tracking system logs, and enforcing strict data accuracy standards.</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h4 className="text-lg font-bold text-purple-400">Web Development Teacher</h4>
                  <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-medium">June 2023 - April 2024</span>
                </div>
                <p className="text-xs font-semibold text-slate-300 mt-0.5">Oxford Group of Institutions | Farrukhabad, UP</p>
                
                <ul className="text-xs sm:text-sm text-slate-400 mt-3 list-disc pl-4 space-y-1.5 leading-relaxed">
                  <li>Mentored and instructed 100+ students in fundamental and advanced web technologies (HTML5, CSS3, JavaScript, Bootstrap).</li>
                  <li>Designed hands-on practical curriculums and guided students through live portfolio-building projects.</li>
                  <li>Conducted technical evaluations and practical lab sessions to track student performance.</li>
                </ul>
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
              <div className="bg-slate-950/30 border border-slate-800 rounded-xl p-4 space-y-3.5 backdrop-blur-sm">
                <div className="border-l-2 border-cyan-500 pl-3">
                  <p className="text-xs font-bold text-slate-200">Frontend Developer Certification</p>
                  <p className="text-[11px] text-slate-500">Great Learning Academy</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-3">
                  <p className="text-xs font-bold text-slate-200">Building Responsive Landing Pages</p>
                  <p className="text-[11px] text-slate-500">Geekster (HTML/CSS)</p>
                </div>
                <div className="border-l-2 border-pink-500 pl-3">
                  <p className="text-xs font-bold text-slate-200">Python Language Essentials</p>
                  <p className="text-[11px] text-slate-500">Geekster</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3">
                  <p className="text-xs font-bold text-slate-200">Digital Graphic & UI Elements</p>
                  <p className="text-[11px] text-slate-500">Canva Certificate</p>
                </div>
              </div>
            </div>

            {/* Strengths Card */}
            <div>
              <h3 className="text-xl font-bold text-slate-200 border-b border-slate-800 pb-2 mb-4">
                🎯 Core Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Project Lifecycle Coordination", "Agile Practices", "Technical Instruction", "Client-Site Management", "Responsive UI/UX Trends", "Database Management"].map((strength, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] font-medium bg-slate-950 text-slate-400 border border-slate-800 px-2.5 py-1 rounded-full shadow-sm"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;