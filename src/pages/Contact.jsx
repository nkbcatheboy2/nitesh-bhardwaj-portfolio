import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[80vh] bg-slate-900 text-slate-100 pt-24 px-6 pb-12 flex items-center justify-center">
      <div className="max-w-xl w-full bg-slate-950/50 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Let's Build Something Grand
          </h2>
          <p className="text-sm text-slate-400">
            Whether it's a corporate automation layout or a React stack architecture, my inbox is always open.
          </p>
        </div>

        <div className="border-t border-slate-900 pt-4 text-left space-y-4 font-mono text-xs sm:text-sm">
          <p className="text-slate-400"><span className="text-cyan-400">✉️ Direct Email:</span> niteshbhardwaj971@gmail.com</p>
          <p className="text-slate-400"><span className="text-purple-400">📱 Mobile Direct:</span> +91 7897130368</p>
          <p className="text-slate-400"><span className="text-pink-400">📍 Present Hub:</span> Noida / Lucknow, UP, India</p>
        </div>

        <div className="pt-2">
          <a 
            href="mailto:niteshbhardwaj971@gmail.com"
            className="inline-block w-full py-3 font-bold text-sm text-slate-900 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg shadow-lg hover:scale-[1.02] transition-transform text-center"
          >
            Launch Default Mail Client →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;