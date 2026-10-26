import React from 'react';

const Toc = () => {
  const items = [
    { num: "01", title: "บทคัดย่อ (Abstract)", href: "#abstract" },
    { num: "02", title: "คณะผู้จัดทำและหน้าที่รับผิดชอบ", href: "#committee" },
    { num: "03", title: "กำหนดการจัดสัมมนา", href: "#schedule" },
    { num: "04", title: "เนื้อหาสัมมนาและเซสชันเชิงวิชาการ", href: "#content" },
    { num: "05", title: "เอกสารประกอบและสไลด์ดาวน์โหลด", href: "#downloads" },
    { num: "06", title: "ภาพกิจกรรมและวิดีโอบันทึกงาน", href: "#gallery" },
  ];

  return (
    <section id="toc" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <i className="fa-solid fa-list-ul"></i>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          สารบัญรายงาน <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Table of Contents</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <a
            key={item.num}
            href={item.href}
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-tech-50 dark:hover:bg-slate-800 transition border border-slate-200/60 dark:border-slate-700/60 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-tech-100 dark:bg-slate-700 text-tech-700 dark:text-indigo-300 text-sm font-semibold flex items-center justify-center">
                {item.num}
              </span>
              <span className="font-medium text-slate-700 dark:text-slate-200 group-hover:text-tech-600 dark:group-hover:text-indigo-400 transition">
                {item.title}
              </span>
            </div>
            <i className="fa-solid fa-chevron-right text-xs text-slate-400 group-hover:translate-x-1 transition"></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Toc;
