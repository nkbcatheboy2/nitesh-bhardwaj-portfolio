import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  
  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error("Data load nahi hua bhai:", err));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Live Mail API Submission Logic
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending Data to Matrix...');

    // Nitesh bhai, jab Formspree account ban jaye, toh apna endpoint yahan paste kar dena:
    const formspreeEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"; 

    if (formspreeEndpoint.includes("YOUR_FORMSPREE_ENDPOINT")) {
      // Background logic code reminder if endpoint isn't set yet
      setTimeout(() => {
        setFormStatus('Bhai, upar code mein pehle apni Formspree ID daalo, fir mail aayega!');
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('Transmission Successful! Check bcatheboy2@gmail.com');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Oops! Something went wrong with the server.');
      }
    } catch (error) {
      setFormStatus('Network Error! Secure connection failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  const personal = data.personalDetails;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 flex flex-col justify-between">
      
      {/* MAIN CONTAINER CONTENT */}
      <div className="flex-grow">
        
        {/* SECTION 1: HERO & JARVIS INTERFACE */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 lg:pb-0">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 animate-fade-in w-full">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-900/50">
                  ⚡ Systems Online
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold mt-4 tracking-tight leading-none">
                  Hi, I am{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {personal.name}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 font-medium mt-3">
                  {personal.role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                {personal.bio}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 py-2 border-y border-slate-800/60">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-cyan-400">2+</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Years Exp.</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-purple-400">4+</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Live Builds</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-pink-400">100+</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Students Taught</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <a href="#projects-section" className="px-6 py-3 text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
                  Explore Projects
                </a>
                <a href="#contact-section" className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:shadow-pink-600/20 hover:scale-105 transition-all duration-300">
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Profile & Terminal */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full max-w-sm mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img 
                  src={personal.profileImage} 
                  alt={personal.name} 
                  className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-slate-800 shadow-2xl object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* J.A.R.V.I.S Terminal */}
              <div className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">jarvis_core_v4.0</span>
                </div>
                <div className="space-y-1.5 text-left text-xs text-slate-400">
                  <p><span className="text-purple-400">➜</span> <span className="text-slate-500">identity:</span> {personal.name}</p>
                  <p><span className="text-purple-400">➜</span> <span className="text-slate-500">assignment:</span> Project Coordinator @ LDA[cite: 1]</p>
                  <p><span className="text-purple-400">➜</span> <span className="text-slate-500">location:</span> Lucknow, India[cite: 1]</p>
                  <p><span className="text-purple-400">➜</span> <span className="text-slate-500">status:</span> <span className="text-emerald-400 animate-pulse">● Active_Core_Systems</span></p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: MINI ABOUT */}
        <section className="py-20 px-6 bg-slate-950/30 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My Background</h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I hold a Bachelor of Computer Applications (BCA) with an aggregate score of 79.83%[cite: 1]. Over the course of my journey, I have successfully bridged the gap between raw computer sciences and production-level corporate solutions[cite: 1]. From mentoring 100+ students at the Oxford Group of Institutions to driving data workflows inside the Lucknow Development Authority, I approach web engineering systematically[cite: 1].
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-200">Verified Credentials</h3>
              <div className="space-y-2 text-xs">
                <p className="bg-slate-950 p-2.5 border border-slate-800 rounded text-slate-400"><strong className="text-slate-200">Frontend Developer</strong> - Great Learning Academy[cite: 1]</p>
                <p className="bg-slate-950 p-2.5 border border-slate-800 rounded text-slate-400"><strong className="text-slate-200">Responsive UI</strong> - Geekster (HTML/CSS)[cite: 1]</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SKILLS */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto text-center md:text-left space-y-8">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Technical Toolkit</h2>
              <p className="text-xs text-slate-500 mt-1">Core frameworks, engineering technologies, and platforms I work with daily[cite: 1].</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {data.skills?.map((skill, idx) => (
                <span key={idx} className="text-xs sm:text-sm bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 px-4 py-2 rounded-lg font-medium text-slate-300 shadow-md">
                  🔹 {skill}[cite: 1]
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: WORKING EMAIL CONTACT FORM */}
        <section id="contact-section" className="py-20 px-6 bg-slate-950/40 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Drop a Message</h2>
              <p className="text-xs text-slate-500 mt-1">Want to collaborate? Send a ping directly to bcatheboy2@gmail.com via the dashboard below[cite: 1].</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5 bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Nitesh Bhardwaj" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="nitesh@example.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Comment / Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4" 
                  placeholder="Hey Nitesh, let's connect for a project build..." 
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 font-bold text-sm text-slate-900 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Transmitting...' : 'Secure Transmit →'}
              </button>

              {formStatus && (
                <p className="text-xs text-center font-mono mt-2 text-emerald-400 animate-pulse">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;