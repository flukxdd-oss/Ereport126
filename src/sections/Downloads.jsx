import React from 'react';
import { downloadsData } from '../data/downloadsData';

const Downloads = ({ showToast }) => {
  const handleDownload = (item) => {
    showToast(item.toastMessage);
    // Log download event to database API
    fetch('/api/stats/download', { method: 'POST' }).catch(() => {});
  };

  return (
    <section id="downloads" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors duration-300">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          เอกสารดาวน์โหลดและสไลด์ <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Downloads & Resources</span>
        </h2>
      </div>

      <div className="space-y-3">
        {downloadsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:border-tech-500 transition gap-4"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                <i className={item.iconClass}></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.meta}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDownload(item)}
              className="bg-tech-600 hover:bg-tech-700 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-medium shadow transition flex items-center justify-center gap-2 flex-shrink-0"
            >
              <i className="fa-solid fa-download"></i>
              <span>ดาวน์โหลด</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Downloads;
