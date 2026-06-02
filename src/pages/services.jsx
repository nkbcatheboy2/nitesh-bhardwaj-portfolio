import React, { useState } from 'react';

const Services = () => {
  const [aadharInput, setAadharInput] = useState('');
  const [systemStatus, setSystemStatus] = useState('Idle');

  // Dummy function to simulate a check
  const handleVerify = (e) => {
    e.preventDefault();
    if (!aadharInput) {
      setSystemStatus('Error: Please enter a valid ID.');
      return;
    }
    setSystemStatus('Authenticating securely... [Aadhaar Redacted]');
    setTimeout(() => {
      setSystemStatus('Identity Verified. Access Granted.');
    }, 2000);
  };

  const aadharServicesList = [
    { 
      id: 1, 
      title: "Download e-Aadhaar", 
      desc: "Securely fetch your digital identity document directly from UIDAI servers.",
      icon: "📥",
      theme: "from-cyan-400 to-blue-500",
      border: "hover:border-cyan-500/50"
    },
    { 
      id: 2, 
      title: "Update Demographics", 
      desc: "Initiate requests to update Name, DOB, Gender, or Address online.",
      icon: "🔄",
      theme: "from-purple-400 to-pink-500",
      border: "hover:border-purple-500/50"
    },
    { 
      id: 3, 
      title: "Order PVC Card", 
      desc: "Request a highly secure physical PVC card delivered to your address.",
      icon: "💳",
      theme: "from-pink-500 to-red-500",
      border: "hover:border-pink-500/50"
    },
    { 
      id: 4, 
      title: "Check Update Status", 
      desc: "Track the real-time status of your recent Aadhaar update requests.",
      icon: "📡",
      theme: "from-emerald-400 to-cyan-500",
      border: "hover:border-emerald-500/50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 pt-24 px-6 pb-12">
      <div className="max-w-5xl mx-auto animate-fade-in space-y-16">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center md:text-left space-y-4">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-900/50">
            🛡️ Identity Protocol
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
            Digital Identity &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Aadhaar Services
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Access, verify, and update your identity parameters through our secure portal interface. Designed for seamless interactions with UIDAI systems.
          </p>
        </div>

        {/* ================= TERMINAL / VERIFICATION UI ================= */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 shadow-2xl backdrop-blur-md max-w-3xl mx-auto md:mx-0">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">
              UIDAI_Gateway_Link
            </span>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Enter 12-Digit Identity Number
              </label>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <input 
                  type="text" 
                  maxLength="14"
                  placeholder="XXXX XXXX XXXX" 
                  value={aadharInput}
                  onChange={(e) => setAadharInput(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-cyan-400 font-mono tracking-widest focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 font-bold text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Verify Data
                </button>
              </div>
            </div>
            
            <div className="bg-slate-900 p-3 rounded border border-slate-800 font-mono text-xs">
              <span className="text-purple-400">root@jarvis:~$</span>{' '}
              <span className={systemStatus.includes('Error') ? 'text-red-400' : 'text-emerald-400'}>
                {systemStatus}
              </span>
              {systemStatus !== 'Idle' && <span className="animate-pulse">_</span>}
            </div>
          </form>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div>
          <h2 className="text-xl font-bold text-slate-200 mb-6">Available Quick Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aadharServicesList.map((service) => (
              <div 
                key={service.id} 
                className={`bg-slate-900 border border-slate-800 p-6 rounded-xl transition-all duration-300 cursor-pointer group hover:shadow-lg ${service.border}`}
              >
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-lg font-bold bg-gradient-to-r ${service.theme} bg-clip-text text-transparent group-hover:text-white transition-colors`}>
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                  Initiate Request <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;