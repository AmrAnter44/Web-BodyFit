import React, { useState, useEffect } from 'react';
import Coaches from './Coaches';

const mockOffers = [
  { id: 1, duration: '1 Month', price: '450', price_new: '400', private: '1',invite: '1' },
  { id: 2, duration: '3 Months', price: '1350', price_new: '800', private: '2',  invite: '2' },
  { id: 3, duration: '6 Months', price: '2400', price_new: '1000', private: '4',  invite: '4' },
  { id: 4, duration: '12 Months', price: '3600', price_new: '2500', private: '8',  invite: '8' },
];

const mockClasses = [
  { id: 1, duration: '1 Month', price: '300', price_new: '0'},
  { id: 2, duration: '3 Months', price: '600', price_new: '0' },
];

const mockPTPackage = {
  id: 1,
  duration: '1 Month',
  price: '1500',
  price_discount: '1000'
};

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [ptPackage, setPtPackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOffers(mockOffers);
      setClasses(mockClasses);
      setPtPackage(mockPTPackage);
      setIsVisible(true);
    }, 300);
  }, []);

  function handlebook(offer) {
    const phone = "201055608765";  
    const message = `Hello, I would like to book the ${offer.duration} offer.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "whatsappWindow", "width=600,height=600,top=100,left=200");
  }

  function handleClassBook(classItem) {
    const phone = "201055608765";  
    const message = `Hello, I would like to book the ${classItem.duration} classes subscription.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "whatsappWindow", "width=600,height=600,top=100,left=200");
  }

  function handlePTBook(ptPackage) {
    const phone = "201055608765";  
    const message = `Hello, I would like to book ${ptPackage.sessions} PT Sessions for ${ptPackage.duration}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "whatsappWindow", "width=600,height=600,top=100,left=200");
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Membership Offers Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-black px-8 py-4 rounded-full border-2 border-red-600/50 backdrop-blur-sm">
              <i className="fa-solid fa-star text-3xl text-red-600"></i>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Membership Offers
              </h2>
              <i className="fa-solid fa-star text-3xl text-red-600"></i>
            </div>
            <p className="text-gray-400 mt-4 text-lg">Choose the perfect plan for your fitness journey</p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {offers.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <i className="text-5xl text-red-600 fa-solid fa-spinner fa-spin" />
              </div>
            ) : (
              offers.map((offer, index) => (
                <div 
                  key={offer.id}
                  className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-red-600/30 group-hover:border-red-600/60 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                        <i className="fa-solid fa-calendar-days text-3xl text-white"></i>
                      </div>
                      <h3 className="text-3xl font-bold text-red-500 mb-2">
                        {offer.duration}
                      </h3>
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
                    </div>

                    <div className="text-center mb-6">
                      {offer.price_new && offer.price_new !== "0" ? (
                        <div>
                          <span className="text-xl line-through text-gray-500 block mb-1">
                            {offer.price} EGP
                          </span>
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                            {offer.price_new} EGP
                          </div>
                        </div>
                      ) : (
                        <div className="text-4xl font-bold text-white">
                          {offer.price} EGP
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>{offer.private} Sessions Personal Training</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>{offer.invite} Guest Invitations</span>
                      </li>
                    </ul>

                    <button
                      onClick={() => handlebook(offer)}
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-lg 
                               transform transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/50
                               active:scale-95 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        Book Now
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      </div>

      {/* Classes Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-black px-8 py-4 rounded-full border-2 border-red-600/50 backdrop-blur-sm">
              <i className="fa-solid fa-people-group text-3xl text-red-600"></i>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Group Classes
              </h2>
              <i className="fa-solid fa-people-group text-3xl text-red-600"></i>
            </div>
            <p className="text-gray-400 mt-4 text-lg">Join our group fitness classes and connect with others</p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {classes.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <i className="text-5xl text-red-600 fa-solid fa-spinner fa-spin" />
              </div>
            ) : (
              classes.map((classItem, index) => (
                <div 
                  key={classItem.id}
                  className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-red-600/30 group-hover:border-red-600/60 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 mb-4 transform group-hover:rotate-12 transition-transform duration-500">
                        <i className="fa-solid fa-users text-3xl text-white"></i>
                      </div>
                      <h3 className="text-3xl font-bold text-red-500 mb-2">
                        {classItem.duration}
                      </h3>
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
                    </div>

                    <div className="text-center mb-6">
                      {classItem.price_new && classItem.price_new !== "0" ? (
                        <div>
                          <span className="text-xl line-through text-gray-500 block mb-1">
                            {classItem.price} EGP
                          </span>
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                            {classItem.price_new} EGP
                          </div>
                        </div>
                      ) : (
                        <div className="text-4xl font-bold text-white">
                          {classItem.price} EGP
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>Unlimited Classes Access</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                          <i className="fa-solid fa-check text-red-500 text-xs"></i>
                        </div>
                        <span>Professional Instructors</span>
                      </li>
                    </ul>

                    <button
                      onClick={() => handleClassBook(classItem)}
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold text-lg 
                               transform transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-600/50
                               active:scale-95 relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <i className="fa-brands fa-whatsapp text-xl"></i>
                        Book Now
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      </div>

      {/* Personal Training Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
              <i className="fa-solid fa-fire text-4xl text-white"></i>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Personal Training Package
              </h2>
              <i className="fa-solid fa-fire text-4xl text-white"></i>
            </div>
            <p className="text-white/90 mt-4 text-lg font-semibold">
              Exclusive one-on-one training with professional coaches
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto">
            {ptPackage ? (
              <div 
                className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-black/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 rounded-3xl border-4 border-red-600/0 group-hover:border-red-600/50 transition-all duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <i className="fa-solid fa-dumbbell text-3xl text-red-600"></i>
                      <h3 className="text-xl lg:text-3xl font-bold text-red-600">
                        {ptPackage.duration}
                      </h3>
                    </div>

                    <div className="text-center flex-shrink-0">
                      {ptPackage.price_discount && parseFloat(ptPackage.price_discount) > 0 ? (
                        <div>
                          <span className="text-l line-through text-gray-400 block">
                            {ptPackage.price} EGP
                          </span>
                          <div className="lg:text-5xl text-2xl font-bold text-red-600">
                            {ptPackage.price_discount} <span className="text-2xl">EGP</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-l font-bold text-red-600">
                          {ptPackage.price} <span className="text-2xl">EGP</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handlePTBook(ptPackage)}
                    className="py-2 px-4 mt-4 lg:py-4 lg:px-8 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl font-bold text-xl 
                             transform transition-all duration-300 hover:from-red-700 hover:to-red-900 hover:shadow-2xl hover:shadow-red-600/50
                             active:scale-95 relative overflow-hidden group/btn flex-shrink-0"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap">
                      <i className="fa-brands fa-whatsapp text-2xl"></i>
                      Book Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <i className="text-6xl text-white fa-solid fa-spinner fa-spin" />
                <p className="text-white mt-6 text-xl">Loading PT Package...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      </div>

      {/* Coaches Section */}
      <Coaches />
    </div>
  );
}
