import React, { useState, useEffect } from 'react';

const Evaluation = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    status: 'นักศึกษาวิทยาการคอมพิวเตอร์',
    rating: 5,
    feedback: ''
  });

  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);
  const [dbConnected, setDbConnected] = useState(true);

  // Fetch live stats from database
  const fetchStats = async () => {
    try {
      const res = await fetch('/api/evaluations/stats');
      const data = await res.json();
      if (data.success && data.stats) {
        setStats(data.stats);
        setDbConnected(true);
      }
    } catch {
      setDbConnected(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      showToast('กรุณากรอกชื่อ-นามสกุลของผู้ประเมิน', 'warning');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/evaluations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok && result.success) {
        showToast('บันทึกแบบประเมินความพึงพอใจลงฐานข้อมูลเรียบร้อยแล้ว ขอบคุณครับ!');
        setFormData({
          name: '',
          status: 'นักศึกษาวิทยาการคอมพิวเตอร์',
          rating: 5,
          feedback: ''
        });
        // Refresh live stats
        fetchStats();
      } else {
        showToast(result.message || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล', 'warning');
      }
    } catch {
      // Offline fallback: save to localStorage if backend is unreachable
      try {
        const local = JSON.parse(localStorage.getItem('ereport_evaluations') || '[]');
        local.unshift({
          ...formData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('ereport_evaluations', JSON.stringify(local));
        showToast('บันทึกแบบประเมินในเครื่องเรียบร้อยแล้ว ขอบคุณครับ!');
        setFormData({
          name: '',
          status: 'นักศึกษาวิทยาการคอมพิวเตอร์',
          rating: 5,
          feedback: ''
        });
      } catch {
        showToast('ไม่สามารถบันทึกข้อมูลได้ โปรดลองอีกครั้ง', 'warning');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="evaluation" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
            <i className="fa-solid fa-star"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              แบบประเมินความพึงพอใจ <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Satisfaction Evaluation</span>
            </h2>
          </div>
        </div>

        {/* Database Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
          <span className={`w-2 h-2 rounded-full ${dbConnected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
          <span className="font-mono text-[11px]">
            {dbConnected ? 'Database: Connected (บันทึกลงฐานข้อมูลจริง)' : 'Database: Local Mode'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  ชื่อ-นามสกุล (ผู้ประเมิน) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="ระบุชื่อของคุณ"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-tech-600 text-sm text-slate-900 dark:text-white transition"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  สถานะผู้เข้าร่วม
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-tech-600 text-sm text-slate-900 dark:text-white transition"
                >
                  <option value="นักศึกษาวิทยาการคอมพิวเตอร์">นักศึกษาวิทยาการคอมพิวเตอร์</option>
                  <option value="นักศึกษาภาควิชาอื่น">นักศึกษาภาควิชาอื่น</option>
                  <option value="คณาจารย์ / บุคลากร">คณาจารย์ / บุคลากร</option>
                  <option value="บุคคลภายนอก / ผู้สนใจทั่วไป">บุคคลภายนอก / ผู้สนใจทั่วไป</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                ความพึงพอใจต่อเนื้อหาการบรรยายโดยรวม
              </label>
              <div className="flex flex-wrap items-center gap-4 py-2">
                {[
                  { val: 5, label: "ดีมาก (5)" },
                  { val: 4, label: "ดี (4)" },
                  { val: 3, label: "ปานกลาง (3)" },
                  { val: 2, label: "พอใช้ (2)" },
                  { val: 1, label: "ควรปรับปรุง (1)" }
                ].map((item) => (
                  <label key={item.val} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={item.val}
                      checked={formData.rating === item.val}
                      onChange={handleChange}
                      className="text-tech-600 focus:ring-tech-600 w-4 h-4"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                ข้อเสนอแนะเพิ่มเติม (Optional)
              </label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows="4"
                placeholder="พิมพ์ข้อเสนอแนะเพื่อการพัฒนาในครั้งถัดไป..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-tech-600 text-sm text-slate-900 dark:text-white transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-tech-600 hover:bg-tech-700 disabled:opacity-50 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-tech-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  <span>กำลังบันทึกข้อมูลลงฐานข้อมูล...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>ส่งแบบประเมินความพึงพอใจ</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Live Database Stats Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <i className="fa-solid fa-chart-pie text-tech-600 dark:text-indigo-400"></i>
                สถิติผลประเมินในระบบ (Database Stats)
              </h3>
              <button
                onClick={fetchStats}
                className="text-xs text-tech-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                title="รีเฟรชข้อมูล"
              >
                <i className="fa-solid fa-rotate-right"></i>
                <span>รีเฟรช</span>
              </button>
            </div>

            {stats ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">ผู้ประเมินทั้งหมด</span>
                    <span className="text-2xl font-extrabold text-tech-600 dark:text-indigo-400 mt-1 block">
                      {stats.total} <span className="text-xs font-normal text-slate-500">คน</span>
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">คะแนนเฉลี่ย</span>
                    <span className="text-2xl font-extrabold text-amber-500 mt-1 flex items-center justify-center gap-1">
                      {stats.averageRating} <i className="fa-solid fa-star text-sm"></i>
                    </span>
                  </div>
                </div>

                {/* Rating Distribution Bar */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                    การกระจายตัวของระดับความพึงพอใจ:
                  </span>
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = stats.ratingCounts?.[star] || 0;
                    const pct = stats.total > 0 ? ((count / stats.total) * 100).toFixed(0) : 0;
                    return (
                      <div key={star} className="flex items-center gap-2 text-xs">
                        <span className="w-12 text-slate-500 dark:text-slate-400">{star} ดาว</span>
                        <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          <div
                            className="h-full bg-tech-600 dark:bg-indigo-400 rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          ></div>
                        </div>
                        <span className="w-10 text-right text-slate-500 font-mono">{count} ({pct}%)</span>
                      </div>
                    );
                  })}
                </div>

                {/* Recent Feedbacks */}
                {stats.recent && stats.recent.length > 0 && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700 space-y-2">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                      ความคิดเห็นล่าสุด:
                    </span>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {stats.recent.map((rec) => (
                        <div
                          key={rec.id}
                          className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                              {rec.name}
                            </span>
                            <span className="text-amber-500 font-bold">
                              {'★'.repeat(rec.rating || 5)}
                            </span>
                          </div>
                          {rec.feedback && (
                            <p className="text-slate-600 dark:text-slate-300 text-[11px] italic">
                              "{rec.feedback}"
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-slate-400">
                <i className="fa-solid fa-spinner fa-spin text-lg mb-2 block text-tech-500"></i>
                กำลังโหลดข้อมูลสถิติจากฐานข้อมูล...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
