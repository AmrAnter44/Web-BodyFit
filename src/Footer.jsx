import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="text-white flex flex-row justify-between bg-black p-0 m-0 mt-auto">
        <div className="flex flex-row">
          <a
            href="https://www.instagram.com/body_fitgymm?igsh=MWN5MThpczI5dzFmaw=="
            className="text-white p-2 lg:p-4"
          >
            <i className="p-1 fa-brands fa-instagram text-2xl text-red-500 mt-1"></i>
          </a>
          <a href="https://wa.me/201055608765" className="text-white p-2 lg:p-4">
            <i className="p-1 fa-brands fa-whatsapp text-2xl text-red-500 mt-1"></i>
          </a>
          <a href="https://www.facebook.com/share/14LFAiyDU2N/?mibextid=wwXIfr" className="text-white p-2 lg:p-4">
            <i className="p-1 fa-brands fa-facebook text-2xl text-red-500 mt-1"></i>
          </a>
          <a href="https://www.google.com/maps?q=30.0123844146729,31.1850566864014" className="text-white p-2 lg:p-4">
            <i className="fa-solid fa-location-dot text-2xl text-red-500 mt-1 p-1"></i>
          </a>
        </div>
        <div>
          <img src="/pay.png" alt="" className="w-44 mr-8 mt-4" />
        </div>
       
      </footer>
               <p className="text-white/70 text-sm">
          Powered by{" "}
          <a 
            href="https://fitboost.website/" 
            className="text-red-600 font-bold hover:text-red-500 transition-colors my-6"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 10px rgba(220, 38, 38, 0.8)"
            }}
          >
            FitBoost
          </a>
          {" "}© {new Date().getFullYear()}
        </p>

 





    </>
  );
}
