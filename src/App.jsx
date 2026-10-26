import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import Cover from './sections/Cover';
import Toc from './sections/Toc';
import Abstract from './sections/Abstract';
import Committee from './sections/Committee';
import Schedule from './sections/Schedule';
import ContentSessions from './sections/ContentSessions';
import Downloads from './sections/Downloads';
import Gallery from './sections/Gallery';
import Evaluation from './sections/Evaluation';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('ereport_theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('ereport_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('ereport_theme', 'light');
      }
      return next;
    });
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-tech-dark text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Toast Notification Box */}
      <Toast show={toast.show} message={toast.message} type={toast.type} />

      {/* Top Navigation */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Main Container */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <Cover />
        <Toc />
        <Abstract />
        <Committee />
        <Schedule />
        <ContentSessions />
        <Downloads showToast={showToast} />
        <Gallery />
        <Evaluation showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
