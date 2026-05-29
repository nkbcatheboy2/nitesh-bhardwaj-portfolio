import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => setSkills(jsonData.skills))
      .catch((err) => console.error("Skills load nahi hue bhai:", err));
  }, []);

  // Category wise split karne ke liye dummy classification logic (Aapke resume ke mutabik)
  const frontendSkills = ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"];
  const backendSkills = ["Node.js", "Express JS", "PHP", "MySQLi", "Firebase (Auth & Firestore)"];
  const toolsSkills = ["WordPress", "Git", "GitHub", "Redux Toolkit", "Advanced Excel", "Canva"];

  const SkillCard = ({ title, items, colorClass }) => (
    <div className="bg-slate-950/40 border border-slate-800/80 p-6 rounded-xl backdrop-blur-md">
      <h3 className={`text-lg font-bold ${colorClass} mb-4 border-b border-slate-900 pb-2`}>{title}</h3>
      <div className="flex flex-wrap gap-2.5">
        {items.map((skill, idx) => (
          <span key={idx} className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg hover:border-cyan-500/40 transition-colors">
            🔹 {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-[80vh] bg-slate-900 text-slate-100 pt-24 px-6 pb-12">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xs text-slate-400 mt-1">Detailed breakdown of my development stack and workspace tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard title="Frontend Architecture" items={frontendSkills} colorClass="text-cyan-400" />
          <SkillCard title="Backend & Databases" items={backendSkills} colorClass="text-purple-400" />
          <SkillCard title="CMS, Tools & Platforms" items={toolsSkills} colorClass="text-pink-400" />
        </div>
      </div>
    </div>
  );
};

export default Skills;