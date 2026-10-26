import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'database.json');

// Initial default seed data
const DEFAULT_DATA = {
  committee: [
    {
      id: "adv-1",
      name: "Chanitnart Wichianpradist",
      title: "อาจารย์ที่ปรึกษาหลักภาควิชาวิทยาการคอมพิวเตอร์",
      type: "advisor",
      image: "/assets/unnamed.png",
      role: "อาจารย์ที่ปรึกษาโครงการสัมมนา",
      duties: [
        "ให้คำปรึกษาและข้อเสนอแนะเชิงวิชาการตลอดการดำเนินโครงการ",
        "กลั่นกรองและตรวจสอบความถูกต้องของหัวข้อการสัมมนาและเนื้อหาทางวิชาการ",
        "ติดตามและประเมินผลสัมฤทธิ์ของการจัดงานสัมมนา"
      ]
    },
    {
      id: "stu-1",
      name: "นางสาว อมินตา รุ่งเรือง",
      studentId: "664244104",
      type: "student",
      image: "/assets/1.jpg",
      role: "ประธานโครงการ & ฝ่ายบริหารจัดการ (Project Director)",
      duties: [
        "วางแผนและควบคุมภาพรวมการจัดงานสัมมนาวิชาการทั้งหมด",
        "ประสานงานระหว่างอาจารย์ที่ปรึกษา วิทยากร และคณะผู้จัดทำ",
        "กำกับดูแลการดำเนินงานตามกำหนดการ และแก้ไขปัญหาเฉพาะหน้าในวันงาน",
        "บริหารจัดการงบประมาณและทรัพยากรของโครงการ"
      ]
    },
    {
      id: "stu-2",
      name: "นาย ธนพจน์ โพธิ์เกตุ",
      studentId: "664244115",
      type: "student",
      image: "/assets/5.png",
      role: "ฝ่ายออกแบบสื่อ & พัฒนาระบบ E-Report (Media & Web Lead)",
      duties: [
        "ออกแบบสื่อประชาสัมพันธ์ โปสเตอร์ และอัตลักษณ์กราฟิกของงาน",
        "ออกแบบและพัฒนาเว็บไซต์ระบบ E-Report สัมมนาวิชาการ",
        "บริหารจัดการระบบฐานข้อมูลและการขึ้นระบบ Cloud Hosting",
        "จัดเตรียมสไลด์ Keynote Presentation สำหรับเซสชันสัมมนา"
      ]
    },
    {
      id: "stu-3",
      name: "นาย ณัฐวุฒิ อิ่มจิตร",
      studentId: "664244114",
      type: "student",
      image: "/assets/4.png",
      role: "ฝ่ายโสตทัศนูปกรณ์และบันทึกมีเดีย (AV & Media Recording)",
      duties: [
        "ควบคุมดูแลระบบเครื่องเสียง ไมโครโฟน และระบบฉายภาพโปรเจกเตอร์",
        "บันทึกภาพนิ่งบรรยากาศและกิจกรรมสำคัญตลอดงานสัมมนา",
        "บันทึกวิดีโอและตัดต่อประมวลผลคลิปวิดีโอบันทึกงานฉบับสมบูรณ์",
        "ดูแลความพร้อมของอุปกรณ์คอมพิวเตอร์และสัญญาณเครือข่ายอินเทอร์เน็ต"
      ]
    },
    {
      id: "stu-4",
      name: "นาย ปรเมษฐ์ ใจห้าว",
      studentId: "664244119",
      type: "student",
      image: "/assets/2.png",
      role: "ฝ่ายทะเบียนและประเมินผล (Registration & Evaluation)",
      duties: [
        "จัดเตรียมระบบลงทะเบียนผู้เข้าร่วมงานสัมมนาและแจกจ่ายเอกสาร",
        "ออกแบบ จัดเก็บ และประมวลผลข้อมูลแบบประเมินความพึงพอใจ",
        "จัดทำรูปเล่มรายงานสรุปผลและสถิติข้อมูลวิชาการ",
        "สรุปยอดจำนวนผู้เข้าร่วมสัมมนาและผลการวิเคราะห์ระดับความพึงพอใจ"
      ]
    },
    {
      id: "stu-5",
      name: "นาย เจตนิพัทธ์ รักทอง",
      studentId: "664244112",
      type: "student",
      image: "/assets/3.png",
      role: "พิธีกรดำเนินรายการ & สันทนาการ (MC & Stage Moderator)",
      duties: [
        "ทำหน้าที่พิธีกรหลักดำเนินรายการตามกำหนดการสัมมนาวิชาการ",
        "แนะนำวิทยากร แขกผู้มีเกียรติ และนำเข้าสู่แต่ละช่วงการบรรยาย",
        "ออกแบบและนำกิจกรรมเล่นเกมสันทนาการเพื่อสร้างการมีส่วนร่วม",
        "อำนวยความสะดวกในช่วงถาม-ตอบ (Q&A) ร่วมกับผู้เข้าร่วมงาน"
      ]
    }
  ],
  evaluations: [
    {
      id: "eval-init-1",
      name: "อาจารย์ประจำภาควิชาวิทยาการคอมพิวเตอร์",
      status: "คณาจารย์ / บุคลากร",
      rating: 5,
      feedback: "การจัดงานมีระบบที่ดีมาก ทั้งหัวข้อสัมมนาและการนำเสนอโปรเจกต์ของนักศึกษาน่าประทับใจ",
      createdAt: "2026-03-15T11:45:00.000Z",
      ip: "127.0.0.1"
    },
    {
      id: "eval-init-2",
      name: "นักศึกษารุ่นน้อง CS ปี 2",
      status: "นักศึกษาวิทยาการคอมพิวเตอร์",
      rating: 5,
      feedback: "ได้ความรู้เรื่อง Productivity OS และได้เห็นแนวทางการทำโปรเจกต์จบที่มีประโยชน์มากครับ",
      createdAt: "2026-03-15T12:15:00.000Z",
      ip: "127.0.0.1"
    }
  ],
  stats: {
    views: 1,
    downloadsCount: 0
  }
};

// Initialize DB
export function initDB() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_DATA, null, 2), 'utf-8');
    console.log('✅ Initialized new Database at:', DB_FILE);
  }
}

// Read whole DB
export function readDB() {
  initDB();
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading DB, restoring default:', err);
    return DEFAULT_DATA;
  }
}

// Write DB
export function writeDB(data) {
  initDB();
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// Committee Queries
export function getCommittee() {
  const db = readDB();
  return db.committee || DEFAULT_DATA.committee;
}

// Evaluation Queries
export function getEvaluations() {
  const db = readDB();
  return db.evaluations || [];
}

export function addEvaluation({ name, status, rating, feedback, ip }) {
  const db = readDB();
  const newEval = {
    id: 'eval-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    name: (name || 'ไม่ประสงค์ออกนาม').trim(),
    status: (status || 'ผู้เข้าร่วมสัมมนา').trim(),
    rating: Number(rating) || 5,
    feedback: (feedback || '').trim(),
    createdAt: new Date().toISOString(),
    ip: ip || 'unknown'
  };

  if (!db.evaluations) db.evaluations = [];
  db.evaluations.unshift(newEval);

  // Keep max 500 recent
  if (db.evaluations.length > 500) {
    db.evaluations = db.evaluations.slice(0, 500);
  }

  writeDB(db);
  return newEval;
}

export function getEvaluationStats() {
  const evals = getEvaluations();
  const total = evals.length;
  if (total === 0) {
    return {
      total: 0,
      averageRating: 5.0,
      ratingCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      byStatus: {}
    };
  }

  let sum = 0;
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  const byStatus = {};

  evals.forEach(e => {
    const r = Math.min(5, Math.max(1, Math.round(e.rating || 5)));
    sum += r;
    ratingCounts[r] = (ratingCounts[r] || 0) + 1;
    byStatus[e.status] = (byStatus[e.status] || 0) + 1;
  });

  return {
    total,
    averageRating: parseFloat((sum / total).toFixed(2)),
    ratingCounts,
    byStatus,
    recent: evals.slice(0, 5)
  };
}

export function recordVisit() {
  const db = readDB();
  if (!db.stats) db.stats = { views: 0, downloadsCount: 0 };
  db.stats.views = (db.stats.views || 0) + 1;
  writeDB(db);
  return db.stats.views;
}

export function recordDownload() {
  const db = readDB();
  if (!db.stats) db.stats = { views: 0, downloadsCount: 0 };
  db.stats.downloadsCount = (db.stats.downloadsCount || 0) + 1;
  writeDB(db);
  return db.stats.downloadsCount;
}
