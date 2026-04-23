import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="text-white bg-black p-0 m-0 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4 py-4">
          <div className="flex flex-row justify-center md:justify-start">
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

          <div className="flex flex-col items-center text-center order-first md:order-none">
            <p className="text-white font-semibold mb-3 text-sm sm:text-base tracking-wide">
              Our gym app is available on{" "}
              <span className="text-red-500">Android</span> &{" "}
              <span className="text-red-500">iPhone</span>
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.fitboost.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <i className="fa-brands fa-google-play text-green-500 text-xl group-hover:scale-110 transition-transform"></i>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] text-white/60 uppercase">Get it on</span>
                  <span className="text-white font-semibold text-sm">Google Play</span>
                </div>
              </a>
              <a
                href="https://apps.apple.com/eg/app/fit-boost/id6760668273"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
              >
                <i className="fa-brands fa-apple text-white text-xl group-hover:scale-110 transition-transform"></i>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[9px] text-white/60 uppercase">Download on</span>
                  <span className="text-white font-semibold text-sm">App Store</span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src="/pay.png" alt="" className="w-44 md:mr-4" />
          </div>
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
