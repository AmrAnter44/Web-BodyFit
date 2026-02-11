import React, { useState, useEffect } from 'react';
import { dataService } from '../data/dataService';

export default function Classes() {
  const [classes, setClasses] = useState([]);

  // Fetch classes from Supabase
  useEffect(() => {
    dataService.getClasses().then(({ data, error }) => {
      if (error) {
        console.error('Error loading classes:', error);
      }
      if (data && data.length > 0) {
        console.log('📅 Classes data:', data);
        const formattedClasses = data.map(classItem => ({
          id: classItem.id,
          classname: classItem.name || 'Class',
          day: classItem.day_of_week || 'N/A',
          coachname: classItem.coach_name || 'Coach',
          time1: classItem.time || 'N/A',
          mix: classItem.class_type || 'Mixed', // 'Ladies Only', 'Mixed', 'Men Only'
          mem: classItem.booking_required || false // true if booking required (out of membership)
        }));
        setClasses(formattedClasses);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">
          <span className="text-red-600">GYM</span> CLASSES
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <i className="text-5xl text-red-600 fa-solid fa-spinner fa-spin" />
              <p className="text-white mt-4 text-xl">Loading Classes...</p>
            </div>
          ) : (
            classes.map((classItem) => (
              <div
                key={classItem.id}
                className={`
                  relative overflow-hidden rounded-2xl p-6
                  transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  bg-black
                `}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/20 rounded-bl-full" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
                    {classItem.classname}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                        <i className="fas fa-calendar-day text-white text-sm" />
                      </div>
                      <p className="text-gray-300 font-medium">{classItem.day}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                        <i className="fas fa-user text-white text-sm" />
                      </div>
                      <p className="text-gray-300 font-medium">{classItem.coachname}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                        <i className="fa-regular fa-clock text-white text-sm" />
                      </div>
                      <p className="text-gray-300 font-medium">
                        <span className="text-xl text-red-400">{classItem.time1}</span>
                      </p>
                    </div>

                    <div className={`
                      inline-block px-4 py-2 rounded-full font-semibold text-sm
                      ${classItem.mix === "Ladies Only"
                        ? "bg-pink-600 text-white"
                        : "bg-white text-black"
                      }
                    `}>
                      {classItem.mix}
                    </div>
                  </div>

                  {classItem.mem && (
                    <div className="mt-4 flex items-center gap-2 bg-red-600/80 text-white px-3 py-2 rounded-lg">
                      <i className="fas fa-exclamation-triangle" />
                      <span className="text-sm font-semibold">Out of Membership</span>
                    </div>
                  )}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
