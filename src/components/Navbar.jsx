import React, { useState } from 'react';

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(prev => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 no-print transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#cover" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-tech-600 to-indigo-400 flex items-center justify-center text-white shadow-lg shadow-tech-500/30 group-hover:scale-105 transition-transform">
            <i className="fa-solid fa-microchip text-xl"></i>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-tech-600 dark:text-indigo-400 font-semibold block">
              Computer Science E-Report
            </span>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              สัมมนาวิชาการ 2569
            </h1>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-1">
          <a href="#cover" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">หน้าปก</a>
          <a href="#toc" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">สารบัญ</a>
          <a href="#abstract" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">บทคัดย่อ</a>
          <a href="#committee" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">คณะผู้จัดทำ</a>
          <a href="#schedule" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">กำหนดการ</a>
          <a href="#content" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">เนื้อหาสัมมนา</a>
          <a href="#downloads" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">เอกสารดาวน์โหลด</a>
          <a href="#gallery" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">ภาพกิจกรรม</a>
          <a href="#evaluation" className="px-2.5 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition">แบบประเมิน</a>
        </nav>

        {/* Actions (Theme Toggle & Print Button) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="สลับโหมด"
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            {isDark ? (
              <i className="fa-solid fa-sun text-amber-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-slate-600"></i>
            )}
          </button>

          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-2 bg-tech-600 hover:bg-tech-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-tech-600/20 transition"
          >
            <i className="fa-solid fa-print"></i>
            <span>พิมพ์ PDF</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobile}
            className="xl:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300"
            aria-label="เมนู"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-1">
          <a href="#cover" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">หน้าปก</a>
          <a href="#toc" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">สารบัญ</a>
          <a href="#abstract" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">บทคัดย่อ</a>
          <a href="#committee" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">คณะผู้จัดทำและหน้าที่</a>
          <a href="#schedule" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">กำหนดการ</a>
          <a href="#content" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">เนื้อหาสัมมนา</a>
          <a href="#downloads" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">เอกสารดาวน์โหลด</a>
          <a href="#gallery" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">ภาพกิจกรรมและวิดีโอ</a>
          <a href="#evaluation" onClick={closeMobile} className="block px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800">แบบประเมินความพึงพอใจ</a>
          <div className="pt-2">
            <button
              onClick={() => { closeMobile(); window.print(); }}
              className="w-full flex items-center justify-center gap-2 bg-tech-600 hover:bg-tech-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium"
            >
              <i className="fa-solid fa-print"></i>
              <span>พิมพ์รายงาน / PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
