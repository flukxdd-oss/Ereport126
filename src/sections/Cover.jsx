import React from 'react';

const Cover = () => {
  return (
    <section
      id="cover"
      className="min-h-[50vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-tech-50/50 to-transparent dark:from-slate-800/40 dark:to-transparent rounded-3xl p-8 sm:p-16 border border-slate-200/60 dark:border-slate-800 relative overflow-hidden shadow-sm"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f10a_1px,transparent_1px),linear-gradient(to_bottom,#6366f10a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tech-100 dark:bg-tech-900/60 text-tech-700 dark:text-indigo-300 text-sm font-semibold tracking-wide">
          <i className="fa-solid fa-graduation-cap"></i> รายงานการสัมมนาทางวิชาการ ประจำปีการศึกษา 2568
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          รายงานสรุปผลการจัดสัมมนาวิชาการภาควิชาวิทยาการคอมพิวเตอร์
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto">
          คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏเพชรบุรี
        </p>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-calendar-days text-tech-600 dark:text-indigo-400"></i>
            <span>15 มีนาคม พ.ศ. 2569</span>
          </div>
          <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-tech-600 dark:text-indigo-400"></i>
            <span>หอประชุมคณะวิทยาศาสตร์ ชั้น 4</span>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <a
            href="#abstract"
            className="bg-tech-600 hover:bg-tech-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-tech-600/30 transition flex items-center gap-2"
          >
            <span>เริ่มอ่านรายงาน</span>
            <i className="fa-solid fa-arrow-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cover;
