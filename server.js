import express from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import {
  initDB,
  getCommittee,
  getEvaluations,
  addEvaluation,
  getEvaluationStats,
  recordVisit,
  recordDownload
} from './server/db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Database on server start
initDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Serve assets from public/ directory
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d',
  etag: true
}));

// Serve production build from dist/ if it exists
const DIST_DIR = path.join(__dirname, 'dist');
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR, {
    maxAge: '1d',
    etag: true
  }));
}

// --------------------------------------------------------------------------
// API ENDPOINTS
// --------------------------------------------------------------------------

// Health check endpoint
app.get('/api/health', (req, res) => {
  const views = recordVisit();
  res.status(200).json({
    status: 'online',
    appName: 'E-Report สัมมนาวิชาการ วิทยาการคอมพิวเตอร์ 2569',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    views
  });
});

// Get committee members & duties from Database
app.get('/api/committee', (req, res) => {
  try {
    const committee = getCommittee();
    res.status(200).json({
      success: true,
      data: committee
    });
  } catch (error) {
    console.error('API Committee Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Get evaluation stats & recent entries
app.get('/api/evaluations/stats', (req, res) => {
  try {
    const stats = getEvaluationStats();
    res.status(200).json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('API Evaluation Stats Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Get all evaluations (with pagination)
app.get('/api/evaluations', (req, res) => {
  try {
    const evals = getEvaluations();
    res.status(200).json({
      success: true,
      total: evals.length,
      data: evals
    });
  } catch (error) {
    console.error('API Evaluations Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Submit new evaluation form
app.post('/api/evaluations', (req, res) => {
  try {
    const { name, status, rating, feedback } = req.body;

    if (!name || name.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'กรุณากรอกชื่อ-นามสกุลของผู้ประเมิน'
      });
    }

    const ratingNum = parseInt(rating, 10);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return res.status(400).json({
        success: false,
        message: 'ระดับความพึงพอใจต้องอยู่ระหว่าง 1 ถึง 5'
      });
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const saved = addEvaluation({
      name: name.trim(),
      status: (status || 'ผู้เข้าร่วมสัมมนา').trim(),
      rating: ratingNum,
      feedback: (feedback || '').trim(),
      ip
    });

    console.log(`[Evaluation Received] from: ${saved.name} (${saved.status}) - Rating: ${saved.rating}/5`);

    res.status(201).json({
      success: true,
      message: 'บันทึกแบบประเมินความพึงพอใจลงฐานข้อมูลเรียบร้อยแล้ว ขอบคุณครับ!',
      data: saved
    });
  } catch (error) {
    console.error('API Submit Evaluation Error:', error);
    res.status(500).json({
      success: false,
      message: 'เกิดข้อผิดพลาดในการบันทึกข้อมูล โปรดลองอีกครั้ง'
    });
  }
});

// Download log counter
app.post('/api/stats/download', (req, res) => {
  try {
    const count = recordDownload();
    res.status(200).json({ success: true, downloads: count });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

// SPA Fallback: send built index.html if exists, otherwise index.html at root
app.get('*', (req, res) => {
  const distIndex = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(distIndex)) {
    return res.sendFile(distIndex);
  }
  return res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Express Server
app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 E-Report Seminar Server is running on port ${PORT}`);
  console.log(`🔗 Local URL: http://localhost:${PORT}`);
  console.log(`💾 Database: Active & Connected (data/database.json)`);
  console.log('====================================================');
});

export default app;
