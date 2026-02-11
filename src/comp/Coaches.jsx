import React, { useState, useEffect } from 'react';
import Trans from './Trans';
import { dataService } from '../data/dataService';
import { getImageUrl } from '../lib/supabase';

export default function Coaches() {
  const [coachesData, setCoachesData] = useState([]);
  const [current, setCurrent] = useState(0);

  // Fetch coaches from Supabase
  useEffect(() => {
    dataService.getCoaches().then(({ data, error }) => {
      if (error) {
        console.error('Error loading coaches:', error);
      }
      if (data && data.length > 0) {
        console.log('👥 Coaches data:', data);
        const formattedCoaches = data.map(coach => ({
          id: coach.id,
          name: coach.name || 'Coach',
          title: coach.role || 'Personal Trainer',
          img: getImageUrl(coach.image_url) || '/assets/default-coach.jpg',
          link: coach.metadata?.link || coach.metadata?.instagram || '/'
        }));
        setCoachesData(formattedCoaches);
      }
    });
  }, []);

  // Auto slide كل 3.5 ثانية
  useEffect(() => {
    if (coachesData.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % coachesData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [coachesData.length]);

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-center">

          {/* قسم الكوتشيز */}
          <div className="w-full lg:w-1/2">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                Our <span className="text-red-600">Coaches</span>
              </h2>
              <div className="w-16 h-1 bg-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="bg-black rounded-2xl p-4">
                {coachesData.length === 0 ? (
                  <div className="text-center py-8">
                    <i className="text-3xl text-red-600 fa-solid fa-spinner fa-spin" />
                  </div>
                ) : (
                  <a href={coachesData[current].link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-black rounded-xl p-4 text-center">
                      <div className="mb-4">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                          {coachesData[current].name}
                        </h3>
                        <p className="text-red-600 text-sm md:text-base font-semibold">
                          {coachesData[current].title}
                        </p>
                      </div>

                      <div className="relative mb-4">
                        <div className="w-48 mx-auto rounded-lg overflow-hidden">
                          <img
                            className="w-48 object-cover"
                            src={coachesData[current].img}
                            alt={`Coach ${coachesData[current].name}`}
                          />
                        </div>
                      </div>

                      {/* Dots للتنقل */}
                      <div className="flex justify-center gap-2 mt-4">
                        {coachesData.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`transition-all rounded-full ${
                              index === current
                                ? 'bg-red-600 w-4 h-2'
                                : 'bg-gray-600 w-2 h-2'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* قسم التحولات */}
          <div className="w-full lg:w-1/2">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white mb-4">
                <Trans></Trans>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
