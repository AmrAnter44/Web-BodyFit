import React, { useState, useEffect } from 'react';
import Coaches from './Coaches';
import { dataService } from '../data/dataService';
import { getImageUrl } from '../lib/supabase';

export default function Home() {
  const [memberships, setMemberships] = useState([]);
  const [offers, setOffers] = useState([]);
  const [ptPackages, setPtPackages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Get icon based on feature text
  function getFeatureIcon(feature) {
    const text = feature.toLowerCase();
    if (text.includes('pt') || text.includes('personal') || text.includes('training')) return 'fa-dumbbell';
    if (text.includes('inbody') || text.includes('scan')) return 'fa-weight-scale';
    if (text.includes('guest') || text.includes('invite')) return 'fa-user-plus';
    if (text.includes('freez')) return 'fa-snowflake';
    if (text.includes('class')) return 'fa-users';
    if (text.includes('vip') || text.includes('locker')) return 'fa-key';
    if (text.includes('spa') || text.includes('sauna')) return 'fa-spa';
    if (text.includes('pool') || text.includes('swim')) return 'fa-water-ladder';
    if (text.includes('nutrition') || text.includes('diet')) return 'fa-apple-whole';
    if (text.includes('24/7') || text.includes('access')) return 'fa-clock';
    if (text.includes('massage')) return 'fa-hand-sparkles';
    if (text.includes('supplement')) return 'fa-pills';
    return 'fa-check';
  }

  useEffect(() => {
    // Fetch Memberships
    dataService.getMemberships().then(({ data, error }) => {
      if (error) {
        console.error('Error loading memberships:', error);
      }
      if (data && data.length > 0) {
        console.log('📋 Memberships data:', data);
        const formattedMemberships = data.map(item => ({
          id: item.id,
          duration: item.name || 'Membership',
          price: item.price?.toString() || '0',
          price_new: item.original_price && item.original_price > item.price
            ? item.original_price?.toString()
            : null,
          features: item.metadata?.features && Array.isArray(item.metadata.features)
            ? item.metadata.features
            : []
        }));
        setMemberships(formattedMemberships);
      }
      setIsVisible(true);
    });

    // Fetch Special Offers
    dataService.getOffers().then(({ data, error }) => {
      if (error) {
        console.error('Error loading offers:', error);
      }
      if (data && data.length > 0) {
        console.log('🎁 Offers data:', data);
        const formattedOffers = data.map(item => ({
          id: item.id,
          duration: item.name || 'Offer',
          price: item.price?.toString() || '0',
          price_new: item.original_price && item.original_price > item.price
            ? item.original_price?.toString()
            : null
        }));
        setOffers(formattedOffers);
      }
    });

    // Fetch PT Packages
    dataService.getPtPackages().then(({ data, error }) => {
      if (error) {
        console.error('Error loading PT packages:', error);
      }
      if (data && data.length > 0) {
        console.log('💪 PT Packages data:', data);
        const formattedPackages = data.map(item => ({
          id: item.id,
          duration: item.name || 'PT Package',
          sessions: item.sessions_count || 0,
          price: item.price?.toString() || '0',
          price_discount: item.original_price && item.original_price > item.price
            ? item.original_price?.toString()
            : null
        }));
        setPtPackages(formattedPackages);
      }
    });
  }, []);

  function handlebook(offer) {
    const phone = "201055608765";
    const message = `Hello, I would like to book the ${offer.duration} membership.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "whatsappWindow", "width=600,height=600,top=100,left=200");
  }

  function handleOfferBook(offer) {
    const phone = "201055608765";
    const message = `Hello, I would like to book the ${offer.duration} offer.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "whatsappWindow", "width=600,height=600,top=100,left=200");
  }

  function handlePTBook(ptPackage) {
    const phone = "201055608765";
    const message = `Hello, I would like to book ${ptPackage.sessions} PT Sessions - ${ptPackage.duration}.`;
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
            {memberships.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <i className="text-5xl text-red-600 fa-solid fa-spinner fa-spin" />
              </div>
            ) : (
              memberships.map((membership, index) => (
                <div
                  key={membership.id}
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
                        {membership.duration}
                      </h3>
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
                    </div>

                    {/* Price - يختفي لو السعر = 0 */}
                    {parseFloat(membership.price) !== 0 && (
                      <div className="text-center mb-6">
                        {membership.price_new && parseFloat(membership.price_new) > parseFloat(membership.price) ? (
                          <div>
                            <span className="text-xl line-through text-gray-500 block mb-1">
                              {membership.price_new} EGP
                            </span>
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                              {membership.price} EGP
                            </div>
                          </div>
                        ) : (
                          <div className="text-4xl font-bold text-white">
                            {membership.price} EGP
                          </div>
                        )}
                      </div>
                    )}

                    {/* Custom Features */}
                    {membership.features.length > 0 ? (
                      <ul className="space-y-3 mb-8">
                        {membership.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300 group/item hover:text-white transition-colors">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center group-hover/item:bg-red-600/40 transition-colors">
                              <i className={`fa-solid ${getFeatureIcon(feature)} text-red-500 text-xs`}></i>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mb-8 text-center text-gray-500 text-sm">
                        Add features in admin panel
                      </div>
                    )}

                    <button
                      onClick={() => handlebook(membership)}
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

      {/* Special Offers Section */}
      {offers.length > 0 && (
        <>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-black px-8 py-4 rounded-full border-2 border-red-600/50 backdrop-blur-sm">
                  <i className="fa-solid fa-fire text-3xl text-red-600"></i>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Special Offers
                  </h2>
                  <i className="fa-solid fa-fire text-3xl text-red-600"></i>
                </div>
                <p className="text-gray-400 mt-4 text-lg">Limited time special deals</p>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {offers.map((offer, index) => (
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
                          <i className="fa-solid fa-gift text-3xl text-white"></i>
                        </div>
                        <h3 className="text-3xl font-bold text-red-500 mb-2">
                          {offer.duration}
                        </h3>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
                      </div>

                      {/* Price - يختفي لو السعر = 0 */}
                      {parseFloat(offer.price) !== 0 && (
                        <div className="text-center mb-6">
                          {offer.price_new && parseFloat(offer.price_new) > parseFloat(offer.price) ? (
                            <div>
                              <span className="text-xl line-through text-gray-500 block mb-1">
                                {offer.price_new} EGP
                              </span>
                              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                                {offer.price} EGP
                              </div>
                            </div>
                          ) : (
                            <div className="text-4xl font-bold text-white">
                              {offer.price} EGP
                            </div>
                          )}
                        </div>
                      )}

                      <button
                        onClick={() => handleOfferBook(offer)}
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
                ))}
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
          </div>
        </>
      )}

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
            {ptPackages.length === 0 ? (
              <div className="text-center py-16">
                <i className="text-6xl text-white fa-solid fa-spinner fa-spin" />
                <p className="text-white mt-6 text-xl">Loading PT Packages...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ptPackages.map((pkg, index) => {
                  const hasDiscount = pkg.price_discount && parseFloat(pkg.price_discount) > parseFloat(pkg.price);

                  return (
                    <div
                      key={pkg.id}
                      className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-black/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="absolute inset-0 rounded-3xl border-4 border-red-600/0 group-hover:border-red-600/50 transition-all duration-500"></div>

                      <div className="relative p-8">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center gap-3 mb-4">
                            <i className="fa-solid fa-dumbbell text-3xl text-red-600"></i>
                            <h3 className="text-2xl lg:text-3xl font-bold text-red-600">
                              {pkg.sessions} Sessions
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm">{pkg.duration}</p>
                        </div>

                        {/* Price - يختفي لو السعر = 0 */}
                        {parseFloat(pkg.price) !== 0 && (
                          <div className="text-center mb-6">
                            {hasDiscount ? (
                              <div>
                                <span className="text-xl line-through text-gray-400 block mb-1">
                                  {pkg.price_discount} EGP
                                </span>
                                <div className="text-4xl lg:text-5xl font-bold text-red-600">
                                  {pkg.price} <span className="text-2xl">EGP</span>
                                </div>
                              </div>
                            ) : (
                              <div className="text-4xl lg:text-5xl font-bold text-red-600">
                                {pkg.price} <span className="text-2xl">EGP</span>
                              </div>
                            )}
                          </div>
                        )}

                        <button
                          onClick={() => handlePTBook(pkg)}
                          className="w-full py-3 lg:py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl font-bold text-lg
                                   transform transition-all duration-300 hover:from-red-700 hover:to-red-900 hover:shadow-2xl hover:shadow-red-600/50
                                   active:scale-95 relative overflow-hidden group/btn"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            Book Now
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        </button>
                      </div>
                    </div>
                  );
                })}
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
