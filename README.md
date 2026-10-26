# 🎓 E-Report สัมมนาวิชาการ วิทยาการคอมพิวเตอร์ 2569 (Academic Seminar E-Report)
> ระบบรายงานสรุปผลการจัดสัมมนาวิชาการภาควิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏเพชรบุรี (PBRU)  
> พร้อมสถาปัตยกรรมระดับ Production, ระบบฐานข้อมูล Database ในตัว, และรองรับการขึ้น Cloud Hosting ได้ทันที

---

## 🌟 ฟีเจอร์หลักของระบบ (System Features)

1. **สถาปัตยกรรมระดับโมเดิร์น (Modern Component Architecture)**
   - พัฒนาด้วย **React 19 + Vite + Tailwind CSS** ตามแพทเทิร์นโครงสร้างแบบ `thanapojResume`
   - แบ่งหมวดหมู่คอมโพเนนต์ชัดเจน (`src/components/`, `src/sections/`, `src/data/`)
   - คงเอกลักษณ์ดีไซน์ อัตลักษณ์สีสัน (`tech` palette) และฟอนต์ Sarabun & Inter เหมือนต้นฉบับ 100%

2. **ระบบฐานข้อมูล (Database Integration - Fully Hosting Ready)**
   - มีระบบฐานข้อมูลในตัว (`data/database.json` พร้อม auto-seeding และ ACID atomic sync)
   - **Evaluation Form & DB Storage**: แบบประเมินความพึงพอใจบันทึกข้อมูลลงฐานข้อมูลจริงผ่าน REST API (`POST /api/evaluations`)
   - **Live Statistics**: วิดเจ็ตสรุปสถิติคะแนนเฉลี่ย, จำนวนผู้ประเมิน, และความคิดเห็นล่าสุดแบบ Real-time (`GET /api/evaluations/stats`)
   - **Committee Database**: โครงสร้างจัดเก็บรายชื่อคณะผู้จัดทำและหน้าที่รับผิดชอบ (`GET /api/committee`)

3. **เพิ่มหน้าที่ของผู้จัดแต่ละคนครบถ้วน (Organizing Committee & Duties)**
   - **อาจารย์ ชนิษฎานาถ วิเชียรประดิษฐ์** : อาจารย์ที่ปรึกษาหลักโครงการสัมมนา
   - **นางสาว อมินตา รุ่งเรือง (664244104)** : ประธานโครงการ & ฝ่ายบริหารจัดการ (Project Director)
   - **นาย ธนพจน์ โพธิ์เกตุ (664244115)** : ฝ่ายออกแบบสื่อ & พัฒนาระบบ E-Report (Media & Web Lead)
   - **นาย ณัฐวุฒิ อิ่มจิตร (664244114)** : ฝ่ายโสตทัศนูปกรณ์และบันทึกมีเดีย (AV & Media Recording)
   - **นาย ปรเมษฐ์ ใจห้าว (664244119)** : ฝ่ายทะเบียนและประเมินผล (Registration & Evaluation Lead)
   - **นาย เจตนิพัทธ์ รักทอง (664244112)** : พิธีกรดำเนินรายการ & สันทนาการ (MC & Stage Moderator)
   - *มี Modal แสดงรายละเอียดภาระหน้าที่เชิงลึกเมื่อคลิกการ์ด*

4. **พร้อมขึ้นโฮสต์ทุกแพลตฟอร์ม (Production Deployment Ready)**
   - รองรับ Render (`render.yaml`), Vercel (`vercel.json`), Heroku/Railway (`Procfile`), Docker, และ Node.js VPS
   - Express Server ในตัว (`server.js`) รองรับ `process.env.PORT` ให้บริการทั้ง Frontend Build และ RESTful API

---

## 🚀 วิธีการติดตั้งและรันในเครื่อง (Local Setup)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันในโหมด Development (Vite HMR)
```bash
npm run dev
```
เปิดบราวเซอร์ที่: `http://localhost:5173`

### 3. รันในโหมด Full Production Server (Express + Database)
```bash
npm run build
npm start
```
เปิดบราวเซอร์ที่: `http://localhost:3000`

---

## 🌐 คำแนะนำการขึ้นโฮสต์ (Deployment Guide)

### วิธีที่ 1: Deploy บน Render (แนะนำ - ง่ายและฟรี)
1. นำโฟลเดอร์โปรเจกต์นี้ Push ขึ้น GitHub Repository
2. เข้าไปที่ [Render.com](https://render.com) แล้วเลือก **New > Web Service**
3. เลือก Repository ที่ Push ไว้
4. Render จะตรวจพบไฟล์ `render.yaml` อัตโนมัติ:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node server.js`
5. กด **Deploy** แล้วรอประมาณ 1-2 นาที เว็บไซต์จะออนไลน์ทันที

### วิธีที่ 2: Deploy บน Vercel
1. ติดตั้ง Vercel CLI หรือ Import Git Repo บน [Vercel.com](https://vercel.com)
2. โปรเจกต์มีไฟล์ `vercel.json` รองรับ Serverless function และ Static assets ไว้เรียบร้อยแล้ว
3. สั่งคำสั่ง:
   ```bash
   vercel --prod
   ```

### วิธีที่ 3: Deploy บน Railway / Heroku
- โปรเจกต์มีไฟล์ `Procfile` กำหนด `web: node server.js` ไว้เรียบร้อยแล้ว สามารถเชื่อมต่อ GitHub และ Deploy ได้ทันที

---

## 📡 REST API Endpoints

| Method | Endpoint | รายละเอียด |
|---|---|---|
| `GET` | `/api/health` | ตรวจสอบสถานะ Server และจำนวนผู้เข้าชม |
| `GET` | `/api/committee` | ดึงข้อมูลคณะผู้จัดทำและหน้าที่จากฐานข้อมูล |
| `GET` | `/api/evaluations/stats` | สถิติคะแนนประเมินเฉลี่ยและกราฟความพึงพอใจ |
| `GET` | `/api/evaluations` | รายการแบบประเมินทั้งหมดที่บันทึกไว้ |
| `POST` | `/api/evaluations` | บันทึกแบบประเมินความพึงพอใจใหม่ลงฐานข้อมูล |
| `POST` | `/api/stats/download` | บันทึกจำนวนครั้งที่มีการดาวน์โหลดเอกสาร |
