import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors duration-300">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <i className="fa-solid fa-images"></i>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          ภาพกิจกรรมและวิดีโอ <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Gallery & Video</span>
        </h2>
      </div>

      {/* Video Player */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <i className="fa-solid fa-circle-play text-tech-600 dark:text-indigo-400"></i>
            วิดีโอบันทึกงานสัมมนา
          </h3>
          <span className="text-xs text-slate-400">1015 (1).mp4</span>
        </div>

        <div className="w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700">
          <video
            controls
            className="w-full max-h-[500px] object-contain mx-auto"
            preload="metadata"
            poster="/assets/1.jpg"
          >
            <source src="/assets/seminar-video.mp4" type="video/mp4" />
            <source src="/assets/1015 (1).mp4" type="video/mp4" />
            เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ HTML5
          </video>
        </div>
        <p className="text-xs text-slate-400 text-center">
          *บันทึกวิดีโองานสัมมนาวิชาการสาขาวิทยาการคอมพิวเตอร์ ประจำปีการศึกษา 2568 - 2569
        </p>
      </div>

      {/* Highlights & Photo Showcase */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
          <i className="fa-solid fa-camera text-tech-600 dark:text-indigo-400"></i>
          ภาพบรรยากาศและคณะทำงาน
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { img: '/assets/1.jpg', name: 'อมินตา รุ่งเรือง' },
            { img: '/assets/5.png', name: 'ธนพจน์ โพธิ์เกตุ' },
            { img: '/assets/4.png', name: 'ณัฐวุฒิ อิ่มจิตร' },
            { img: '/assets/2.png', name: 'ปรเมษฐ์ ใจห้าว' },
            { img: '/assets/3.png', name: 'เจตนิพัทธ์ รักทอง' },
          ].map((item, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden shadow-sm aspect-square bg-slate-100 dark:bg-slate-800">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-[11px] text-white font-medium">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
