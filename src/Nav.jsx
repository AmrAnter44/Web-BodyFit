import React, { useState, useEffect } from "react";

export default function Nav() {
  const logo = "/assets/logo.png";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: "fa-house" },
    { name: "Classes", path: "/classes", icon: "fa-dumbbell" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-red-600/20' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a 
            href="/"
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            <img 
              src= {logo} 
              alt="logo" 
              className="h-12 relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="relative group px-6 py-3 text-white font-semibold transition-all duration-300"
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-lg border-2 border-red-600/0 group-hover:border-red-600/50 transition-all duration-300"></div>
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  <i className={`fas ${link.icon} text-red-500 group-hover:text-white transition-colors duration-300`}></i>
                  <span className="group-hover:tracking-wider transition-all duration-300">{link.name}</span>
                </span>

                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-500"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-600/50 transform transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gradient-to-b from-gray-900 to-black border-t border-red-600/30 px-4 py-6 space-y-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              onClick={() => setOpen(false)}
              className="group relative block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-red-600/20 
                            transform transition-all duration-300 hover:scale-105 hover:border-red-600/60 hover:shadow-lg hover:shadow-red-600/30">
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative px-6 py-4 flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center
                                transform group-hover:rotate-12 transition-transform duration-300">
                    <i className={`fas ${link.icon} text-white`}></i>
                  </div>
                  
                  <span className="text-white font-semibold text-lg group-hover:text-red-500 transition-colors duration-300">
                    {link.name}
                  </span>

                  <i className="fas fa-chevron-right text-red-600 ml-auto transform group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .lg\\:hidden > div > a {
          animation: slideIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .lg\\:hidden > div > a:nth-child(1) {
          animation-delay: 0.1s;
        }

        .lg\\:hidden > div > a:nth-child(2) {
          animation-delay: 0.2s;
        }

        .lg\\:hidden > div > a:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </nav>
  );
}