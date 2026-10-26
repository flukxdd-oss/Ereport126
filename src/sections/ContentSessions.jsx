import React from 'react';
import { sessionsData } from '../data/sessionsData';

const ContentSessions = () => {
  return (
    <section id="content" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors duration-300">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <i className="fa-solid fa-book-open"></i>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          เนื้อหาสัมมนาและเซสชัน <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Seminar Sessions</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Session 1 Card */}
        <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-tech-100 dark:bg-tech-900 text-tech-700 dark:text-indigo-300">
                {sessionsData[0].number}
              </span>
              <i className="fa-solid fa-robot text-tech-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {sessionsData[0].title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {sessionsData[0].description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-1">
              <i className="fa-solid fa-user-tie text-tech-600 dark:text-indigo-400"></i>
              <span>คณะวิทยากรผู้บรรยาย:</span>
            </div>
            {sessionsData[0].speakers.map((spk) => (
              <div key={spk.num} className="pl-5">
                วิทยากรคนที่ {spk.num}: {spk.name}
              </div>
            ))}
          </div>
        </div>

        {/* Session 2 Card */}
        <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-tech-100 dark:bg-tech-900 text-tech-700 dark:text-indigo-300">
                {sessionsData[1].number}
              </span>
              <i className="fa-solid fa-cloud text-tech-600 dark:text-indigo-400 text-xl"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {sessionsData[1].title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {sessionsData[1].description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 space-y-2">
            <div className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-1">
              <i className="fa-solid fa-user-tie text-tech-600 dark:text-indigo-400"></i>
              <span>วิทยากรและหัวข้อที่นำเสนอ:</span>
            </div>
            {sessionsData[1].speakers.map((spk) => (
              <div key={spk.num} className="pl-5 leading-snug">
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  วิทยากรคนที่ {spk.num}: {spk.name}
                </span>
                <div className="text-tech-600 dark:text-indigo-400 text-[11px] mt-0.5">
                  เรื่อง "{spk.topic}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSessions;
