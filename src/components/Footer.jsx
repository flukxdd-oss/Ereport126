import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-16 no-print transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div>
          <p>© 2569 Computer Science Academic Seminar E-Report. All rights reserved.</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
            ภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏเพชรบุรี
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#cover" className="hover:text-tech-600 dark:hover:text-indigo-400 transition">
            กลับสู่ด้านบน
          </a>
          <span>•</span>
          <button
            onClick={() => window.print()}
            className="hover:text-tech-600 dark:hover:text-indigo-400 transition"
          >
            พิมพ์รายงานเป็น PDF
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
