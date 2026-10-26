import React from 'react';

const Toast = ({ show, message, type = 'success' }) => {
  return (
    <div
      id="toast"
      className={`fixed bottom-5 right-5 z-50 transform transition-all duration-300 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 dark:border-slate-300 pointer-events-none ${
        show ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
      }`}
    >
      <i
        className={`fa-solid ${
          type === 'success'
            ? 'fa-circle-check text-emerald-400 dark:text-emerald-600'
            : 'fa-circle-exclamation text-amber-400 dark:text-amber-600'
        } text-lg`}
      ></i>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};

export default Toast;
