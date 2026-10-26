import React from 'react';

const Abstract = () => {
  return (
    <section id="abstract" className="bg-white dark:bg-tech-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors duration-300">
      <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-tech-50 dark:bg-slate-800 text-tech-600 dark:text-indigo-400 flex items-center justify-center font-bold">
          <i className="fa-solid fa-file-lines"></i>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          บทคัดย่อ <span className="text-sm font-normal text-slate-500 dark:text-slate-400 block sm:inline">Abstract</span>
        </h2>
      </div>

      <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base">
        <p>
          การจัดสัมมนาวิชาการทางวิทยาการคอมพิวเตอร์ ประจำปีการศึกษา 2568 มีวัตถุประสงค์เพื่อให้คณาจารย์ นักศึกษา และผู้สนใจ ได้รับทราบถึงแนวโน้มความก้าวหน้าทางเทคโนโลยีปัญญาประดิษฐ์ (AI), ระบบบริหารจัดการชีวิตและการทำงาน (Productivity OS) และสถาปัตยกรรมคลาวด์คอมพิวติ้งสมัยใหม่ โดยงานสัมมนาครั้งนี้ได้รวบรวมตัวแทนนักศึกษาชั้นปีที่ 4 มาร่วมบรรยายพิเศษ ถ่ายทอดองค์ความรู้ และแบ่งปันประสบการณ์การประยุกต์ใช้เทคโนโลยีเชิงปฏิบัติ
        </p>
        <p>
          ผลจากการจัดสัมมนาพบว่า ผู้เข้าร่วมงานกว่า 250 คน ได้รับองค์ความรู้เชิงลึกทั้งในด้านการพัฒนาระบบซอฟต์แวร์ประยุกต์, โครงสร้างระบบฐานข้อมูล, การรักษาความปลอดภัย และการจัดแสดงผลงานโครงงานนวัตกรรม (Project Showcase) 5 โครงการเด่น ซึ่งสามารถนำไปต่อยอดในการเรียนการสอน การทำโครงงานวิจัยระดับปริญญาตรี และการเตรียมความพร้อมสู่วิชาชีพในอุตสาหกรรมเทคโนโลยีดิจิทัลต่อไป
        </p>
      </div>
    </section>
  );
};

export default Abstract;
