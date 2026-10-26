import React from 'react';
import { scheduleData } from '../data/scheduleData';

const Schedule = () => {
  return (
    <section id="schedule" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors duration-300">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <i className="fa-regular fa-clock"></i>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          กำหนดการจัดสัมมนา <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Event Schedule</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
        {scheduleData.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full ${
                item.active ? 'bg-tech-600' : 'bg-slate-400'
              } border-4 border-white dark:border-tech-card shadow`}
            ></div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                  item.active
                    ? 'bg-tech-100 dark:bg-slate-700 text-tech-700 dark:text-indigo-300'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {item.time}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
