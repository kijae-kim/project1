import express from 'express'
import morgan from 'morgan'
// import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'
import counselorRouter from './router/counselor.js'
import { config } from './config.js'
import { connectDB } from './db/database.js'
import bodyParser from 'body-parser';
import pathRouter from './router/path.js'

const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(morgan('dev'))
// app.use(express.static('project')); // 정적 파일 제공 설정

app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/project_img", express.static("./project_img"));
app.use('/CenterDB', express.static('./CenterDB'))

// app.use('/tweets', tweetsRouter)
app.use('/client', authRouter)
app.use('/counselor', counselorRouter)
app.use('/path', pathRouter)

app.use((err,req,res,next) => {
    res.sendStatus(404)
})

// -------------------------심리테스트---------------------------
import depressionRouter from './router/depression.js';
import suicideRouter from './router/suicide.js';
import stressRouter from './router/stress.js';
import social_anxiety_disorderRouter from './router/social_anxiety_disorder.js';
import anxiety_disorderRouter from './router/anxiety_disorder.js';
import panic_disorderRouter from './router/panic_disorder.js';
import ADHDRouter from './router/ADHD.js';

app.set('testTypes', ['depression', 'suicide', 'stress', 'social_anxiety_disorder', 'anxiety_disorder', 'panic_disorder', 'ADHD'])

app.use(express.json());

const routers = {
    "depression": depressionRouter,
    "suicide": suicideRouter,
    "stress": stressRouter,
    "social_anxiety_disorder": social_anxiety_disorderRouter ,
    "anxiety_disorder": anxiety_disorderRouter,
    "panic_disorder": panic_disorderRouter,
    "ADHD": ADHDRouter
}

for (const [testType, router] of Object.entries(routers)) {
    app.use(`/test/${testType}`, router);
}
// -----------------------------------------------------------

// DB 연결 테스트!
connectDB().then((db) => {
    console.log('몽구스 사용하여 몽고디비 접속 성공')
    app.listen(config.host.port, () => {
        console.log(`서버가 포트 ${config.host.port}에서 실행 중입니다.`);
    });
}).catch(console.error);

