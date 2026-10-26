import React, { useState, useEffect } from 'react';
import { advisorData, studentCommitteeData } from '../data/committeeData';

const Committee = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [students, setStudents] = useState(studentCommitteeData);
  const [advisor, setAdvisor] = useState(advisorData);

  useEffect(() => {
    // Attempt to fetch fresh data from database API
    fetch('/api/committee')
      .then(res => res.json())
      .then(res => {
        if (res.success && Array.isArray(res.data)) {
          const adv = res.data.find(m => m.type === 'advisor');
          const stus = res.data.filter(m => m.type === 'student');
          if (adv) setAdvisor(prev => ({ ...prev, ...adv }));
          if (stus && stus.length > 0) setStudents(stus);
        }
      })
      .catch(() => {
        // Fallback to static data
      });
  }, []);

  return (
    <section id="committee" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <i className="fa-solid fa-users"></i>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          คณะผู้จัดทำและหน้าที่รับผิดชอบ <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Organizing Committee & Duties</span>
        </h2>
      </div>

      {/* Advisor Group */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-tech-600 dark:text-indigo-400">
          อาจารย์ที่ปรึกษาโครงการ
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              src={advisor.image || "/assets/unnamed.png"}
              alt={advisor.name}
              className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-tech-500/30 flex-shrink-0"
              onError={(e) => { e.target.src = 'https://placehold.co/100x100/e2e8f0/475569?text=Advisor'; }}
            />
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                {advisor.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {advisor.title}
              </p>
              <div className="pt-2">
                <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 mb-2">
                  หน้าที่รับผิดชอบ:
                </span>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                  {advisor.duties && advisor.duties.map((duty, idx) => (
                    <li key={idx} className="leading-relaxed">{duty}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Committee Group with Detailed Duties */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-tech-600 dark:text-indigo-400">
            คณะนักศึกษาผู้จัดทำ (ชั้นปีที่ 4) และหน้าที่ของแต่ละคน
          </h3>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            *คลิกที่การ์ดเพื่อดูหน้าที่ฉบับเต็ม
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {students.map((student) => (
            <div
              key={student.id || student.studentId}
              onClick={() => setSelectedMember(student)}
              className="cursor-pointer group p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 hover:border-tech-500 dark:hover:border-indigo-400 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md"
            >
              <div className="text-center space-y-3">
                <div className="relative inline-block mx-auto">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto shadow-md border-2 border-slate-200 dark:border-slate-700 group-hover:border-tech-500 transition-colors"
                    onError={(e) => { e.target.src = 'https://placehold.co/100x100/6366f1/ffffff?text=CS'; }}
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full" title="Organizing Team"></span>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {student.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    รหัสนักศึกษา: {student.studentId}
                  </p>
                </div>

                {/* Role Badge */}
                <div className="inline-block">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tech-100 dark:bg-tech-900/60 text-tech-700 dark:text-indigo-300 text-xs font-semibold">
                    <i className="fa-solid fa-id-badge text-[10px]"></i>
                    {student.badge || student.role}
                  </span>
                </div>
              </div>

              {/* Duties Preview Box */}
              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 text-left space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
                  <i className="fa-solid fa-list-check text-tech-600 dark:text-indigo-400 mr-1.5"></i>
                  หน้าที่หลักในงานสัมมนา:
                </span>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  {student.duties && student.duties.slice(0, 2).map((duty, idx) => (
                    <li key={idx} className="line-clamp-1 flex items-start gap-1.5">
                      <span className="text-tech-500 text-[10px] mt-0.5">•</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-1 text-center">
                <span className="text-xs text-tech-600 dark:text-indigo-400 font-medium group-hover:underline inline-flex items-center gap-1">
                  <span>ดูรายละเอียดหน้าที่ทั้งหมด</span>
                  <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Selected Member */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-700 shadow-2xl space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition"
              aria-label="ปิด"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex items-center gap-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-tech-500"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {selectedMember.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  รหัสนักศึกษา: {selectedMember.studentId}
                </p>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-tech-100 dark:bg-tech-900 text-tech-700 dark:text-indigo-300 text-xs font-semibold">
                  {selectedMember.role}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <i className="fa-solid fa-clipboard-check text-tech-600 dark:text-indigo-400"></i>
                รายละเอียดหน้าที่และภาระงานที่รับผิดชอบ:
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                  {selectedMember.duties && selectedMember.duties.map((duty, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-circle-check text-emerald-500 text-xs mt-1"></i>
                      <span className="leading-relaxed">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-right">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2.5 bg-tech-600 hover:bg-tech-700 text-white text-sm font-medium rounded-xl transition shadow"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Committee;
