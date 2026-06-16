import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const socialImages = [
    { 
      id: 1, 
      url: "/web-dev (4).jpg", 
      link: "https://www.instagram.com/p/CugRDo_IWwf/" 
    },
    { 
      id: 2, 
      url: "/web-dev (3).jpg",
      link: "https://www.facebook.com/share/17YaHky8H4/" 
    },
    { 
      id: 3, 
      url: "/web-dev (1).jpg", 
      link: "https://www.instagram.com/bca_the_boy2" 
    },
    { 
      id: 4, 
      url: "/web-dev (2).jpg ", 
      link: "https://www.facebook.com/share/17YaHky8H4/" 
    },
    { 
      id: 5, 
      url: "/web-dev (5).jpg", 
      link: "https://www.instagram.com/bca_the_boy2" 
    },
    { 
      id: 6, 
      url: "/web-dev (6).jpg", 
      link: "https://www.facebook.com/share/17YaHky8H4/" 
    },
    { 
      id: 7, 
      url: "/web-dev (7).jpg", 
      link: "https://www.instagram.com/bca_the_boy2" 
    }
  ];

    useEffect(() => {
    setTimeout(() => {
      setData({
        personalDetails: {
          name: "Nitesh Bhardwaj",
          role: "Software Engineer & Frontend Developer",
          profileImage: "https://images.unsplash.com/photo-1531297172867-4f505dbce15a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        }
      });
    }, 500);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending Data to Matrix...');

    const formspreeEndpoint = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"; 

    if (formspreeEndpoint.includes("YOUR_FORMSPREE_ENDPOINT")) {
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
        setFormStatus('Transmission Successful! Check niteshbhardwaj971@gmail.com');
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
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 flex flex-col justify-between overflow-x-hidden">
      
  
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: scroll-left 35s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="flex-grow">
        
        {/* ================= SECTION 1: HERO ================= */}
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

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Detail-oriented developer with a strong track record of building scalable web applications and managing project lifecycles. Proficient in React JS, Node.js, PHP, and creating intelligent AI solutions inspired by J.A.R.V.I.S.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 py-2 border-y border-slate-800/60">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-cyan-400">Frontend</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">React & Vite</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-purple-400">Backend</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">PHP & MySQLi</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-pink-400">CMS</p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">WordPress</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <a 
                  href="/Nitesh Bhardwaj CV 2027.pdf" 
                  download="Nitesh_Bhardwaj_CV.pdf"
                  className="px-6 py-3 text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
                >
                  Download CV 📄
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 text-sm font-bold text-white bg-slate-800 border border-slate-700 rounded-lg shadow-lg hover:bg-slate-700 hover:scale-105 transition-all duration-300"
                >
                  Explore Projects 🚀
                </a>
              </div>
            </div>

            {/* Right Profile & Terminal */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full max-w-sm mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img 
                  src="./src/assets/profile.jpg" 
                  alt={personal.name} 
                  className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-slate-800 shadow-2xl object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

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
                  <p><span className="text-purple-400">➜</span> <span className="text-slate-500">assignment:</span> Project Coordinator @ E-Connect Solutions / LDA</p>
                  <p><span className="text-purple-400">➜</span> <span className="text-slate-500">location:</span> Lucknow, India</p>
                  <p><span className="text-purple-400">➜</span> <span className="text-slate-500">status:</span> <span className="text-emerald-400 animate-pulse">● Active_Systems</span></p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 2: MINI ABOUT ================= */}
        <section className="py-20 px-6 bg-slate-950/30 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Professional Journey</h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I hold a Bachelor of Computer Applications (BCA) with an aggregate score of 79.83%. Throughout my career, I have successfully bridged the gap between front-end aesthetics and backend data management. I actively work on full-scale production projects integrating React, WordPress, PHP, and MySQLi.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                As a Project Coordinator at LDA, I manage multi-tier project activities, documentation, and system databases. Previously, as a Web Development Teacher at Oxford Group of Institutions, I mentored over 100+ students in HTML5, CSS3, JavaScript, and Bootstrap.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-200">Verified Credentials</h3>
              <div className="space-y-2 text-xs">
                <p className="bg-slate-950 p-2.5 border border-slate-800 rounded text-slate-400"><strong className="text-slate-200">Frontend Developer</strong> - Great Learning</p>
                <p className="bg-slate-950 p-2.5 border border-slate-800 rounded text-slate-400"><strong className="text-slate-200">Responsive UI</strong> - Geekster</p>
                <p className="bg-slate-950 p-2.5 border border-slate-800 rounded text-slate-400"><strong className="text-slate-200">Python Essentials</strong> - Geekster</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: SKILLS ================= */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto text-center md:text-left space-y-8">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Technical Toolkit</h2>
              <p className="text-xs text-slate-500 mt-1">Core frameworks, engineering technologies, and platforms I work with daily.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "React JS", "Vite", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", 
                "Node.js", "Express JS", "PHP", "MySQLi", "Firebase", 
                "WordPress", "GitHub", "Redux Toolkit"
              ].map((skill, idx) => (
                <span key={idx} className="text-xs sm:text-sm bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 px-4 py-2 rounded-lg font-medium text-slate-300 shadow-md">
                  🔹 {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: PROJECTS ================= */}
        <section id="projects" className="py-20 px-6 bg-slate-950/30 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Key Projects</h2>
              <p className="text-xs text-slate-500 mt-1">Production-level applications and platforms I have built.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-200">Enterprise EMS</h3>
                <p className="text-sm text-slate-400 mt-2 mb-4">Automated core HR functions, lifecycle tracking, and data handling utilizing a cloud database with role-based access.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">React JS</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">Node.js</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">Firebase</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-200">TransGlobal Express Pvt. Ltd.</h3>
                <p className="text-sm text-slate-400 mt-2 mb-4">Engineered a highly responsive corporate web platform for an import-export firm. Customized backend templates and optimized SEO.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-purple-400 border border-slate-800">WordPress</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-purple-400 border border-slate-800">PHP</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-purple-400 border border-slate-800">MySQLi</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-pink-500/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-200">Hotel Management System</h3>
                <p className="text-sm text-slate-400 mt-2 mb-4">Comprehensive web application to streamline front-desk operations, room allocations, and real-time client booking logs.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-pink-400 border border-slate-800">HTML/CSS</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-pink-400 border border-slate-800">PHP</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-pink-400 border border-slate-800">MySQLi</span>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-200">Engineering Portfolio</h3>
                <p className="text-sm text-slate-400 mt-2 mb-4">Clean, dark-themed personal portfolio showcasing core competencies, credentials, and live project architectures.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">JavaScript</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">PHP</span>
                  <span className="text-[10px] bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: VISION & CLIENTS ================= */}
        <section className="py-20 px-6 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Our Vision</h2>
              <div className="bg-slate-950 p-6 sm:p-8 border border-slate-800 rounded-xl shadow-lg inline-block">
                <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed max-w-2xl mx-auto">
                  "To engineer intelligent, high-performance web solutions that seamlessly integrate modern UI/UX with AI-driven capabilities. We believe in bridging the gap between raw data and exceptional user experiences, ensuring every project is scalable, secure, and futuristic."
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">Trusted By</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "TransGlobal Express", tag: "Corporate" },
                  { name: "Lucknow Dev Authority", tag: "Govt. Ops" },
                  { name: "E-Connect Solutions", tag: "Tech Firm" },
                  { name: "Oxford Group", tag: "Education" }
                ].map((client, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-xl hover:border-cyan-500/50 transition-all">
                    <p className="font-bold text-slate-200 text-sm">{client.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{client.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: TEAM & TESTIMONIALS ================= */}
        <section className="py-20 px-6 bg-slate-950/30 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Core Team</h2>
                <p className="text-xs text-slate-500 mt-1">The minds behind the code and coordination.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto md:mx-0">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center gap-4 hover:border-cyan-500/50 transition-all">
                  <img src="./src/assets/profile.jpg" alt="Nitesh" className="w-16 h-16 rounded-full border-2 border-slate-700 object-cover" />
                  <div>
                    <h3 className="text-slate-100 font-bold">Nitesh Bhardwaj</h3>
                    <p className="text-xs text-cyan-400">Lead Frontend Developer</p>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center gap-4 hover:border-purple-500/50 transition-all">
                  <img src="./public/anubhav.jpg" alt="Anubhav" className="w-16 h-16 rounded-full border-2 border-slate-700 object-cover" />
                  <div>
                    <h3 className="text-slate-100 font-bold">Anubhav Sharma</h3>
                    <p className="text-xs text-purple-400">Project Collaborator</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">Testimonials</h2>
                <p className="text-xs text-slate-500 mt-1">What our clients and partners say.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative">
                  <span className="absolute top-4 right-6 text-4xl text-slate-800 font-serif">"</span>
                  <p className="text-sm text-slate-300 italic relative z-10 mb-4">"Nitesh transformed our corporate platform. The WordPress and PHP integration was flawless and greatly improved our SEO rankings."</p>
                  <p className="text-xs font-bold text-slate-100">- TransGlobal Express</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl relative">
                  <span className="absolute top-4 right-6 text-4xl text-slate-800 font-serif">"</span>
                  <p className="text-sm text-slate-300 italic relative z-10 mb-4">"His work as a Project Coordinator has streamlined our databases securely. A highly reliable tech professional."</p>
                  <p className="text-xs font-bold text-slate-100">- System Admin, LDA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: CONTACT FORM ================= */}
        <section id="contact-section" className="py-20 px-6 border-t border-slate-800/50">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Drop a Message</h2>
              <p className="text-xs text-slate-500 mt-1">Want to collaborate? Send a ping directly to my inbox via the dashboard below.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5 bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    placeholder="Nitesh Bhardwaj" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    placeholder="nitesh@example.com" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Comment / Message</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleInputChange} required rows="4" 
                  placeholder="Hey Nitesh, let's connect for a project build..." 
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" disabled={isSubmitting}
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

        {/* ================= SECTION 8: SOCIAL FEED / PHOTO SLIDER ================= */}
        <section className="py-12 bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 mb-8 text-center md:text-left">
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Social Feed & Highlights</h2>
            <p className="text-xs text-slate-500 mt-1">Connect with me on Instagram & Facebook.</p>
          </div>

          <div className="relative w-full flex items-center">
            {/* Left & Right Fade Effect (Gradient Mask) */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Container */}
            <div className="animate-marquee gap-5 px-5">
              {/* Duplicate array twice for seamless infinite loop */}
              {[...Array(2)].map((_, arrayIndex) => (
                <React.Fragment key={arrayIndex}>
                  {socialImages.map((img, idx) => (
                    <a 
                      key={idx} 
                      href={img.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-64 h-64 sm:w-72 sm:h-72 shrink-0 rounded-2xl overflow-hidden border-2 border-slate-800 hover:border-pink-500/60 shadow-lg hover:shadow-pink-500/20 transition-all cursor-pointer relative group block"
                    >
                      <img 
                        src={img.url} 
                        alt={`Social Feed ${idx}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <p className="font-bold text-white tracking-wider flex items-center gap-2">
                          {img.link.includes('instagram') ? '📸 Instagram' : '📘 Facebook'}
                        </p>
                      </div>
                    </a>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
