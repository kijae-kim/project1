import express from 'express';
import path, {dirname} from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();

router.get('/alarm', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/1_알람.html"))
})
router.get('/introduce', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/1_서비스소개.html"))
})

router.get('/1', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/1_홈.html"))
})

router.get('/2', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/1_2_자가진단.html"))
})
router.get('/2/1', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/2_우울증.html"))
})
router.get('/2/2', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/2_공황장애.html"))
})
router.get('/2/3', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/2_스트레스.html"))
})
router.get('/2/4', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/2_ADHD.html"))
})
router.get('/2/5', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/2_대인불안증.html"))
})
router.get('/2/6', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/2_불안장애.html"))
})
router.get('/2/7', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/2_자살생각척도.html"))
})

router.get('/3', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/1_3_map.html"))
})

router.get('/4', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/1_4_상담관리.html"))
})

router.get('/5', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/1_5_마이페이지.html"))
})
router.get('/5/1', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/5_내정보수정.html"))
})
router.get('/5/2', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/5_예약현황.html"))
})
router.get('/5/3', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/5_일기.html"))
})
router.get('/5/4', (req,res,next) => {
    res.sendFile(path.join(__dirname, "../project/5_공지사항.html"))
})

export default router;