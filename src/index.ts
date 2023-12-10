import express, { Express, Response, Request, NextFunction } from "express";
import {conn} from "./db/dbConnction";
import { RowDataPacket } from "mysql2";
import {registerRouter} from './api/register';
import {loginRouter} from './api/login';

const app = express();
app.use(express.json());


app.listen(8080, () => {console.log("포트 8080으로 서버 대기중...");});

app.post('/api/register', registerRouter);
app.post('/api/login', loginRouter);


// app.get('/getQA/:id/:title', (req:Request, res:Response) => {
//     let params = req.params;
//     let result: string = '';
//     let user: string = '';
//     let title: string = '';
//     if (params['id'] != undefined && params['title'] != undefined) {
//         user = params['id'].toString();
//         title = params['title'].toString();
//         result = result + title + `(@${user}))\n`;
//     }
//     if (user in QAlist && title in QAlist.user) {
//         for (let i = 0; i < QAlist.user.title.length; i++) {
//             result = result + `Q${i}: ${QAlist.user.title[i][0]} \n A${i} : ${QAlist.user.title[i][1]}\n`;
//         }
//     }

//     console.log(params['id']);
//     res.send(result);
// });


// app.get('/getQA', (req:Request, res:Response) => {
//     let query = req.query;
//     let result: string = '';
//     let user: string = '';
//     let title: string = '';
//     if (query['id'] != undefined && query['title'] != undefined) {
//         user = query['id'].toString();
//         title = query['title'].toString();
//         result = result + title + `(@${user}))\n`;
//     }
//     if (user in QAlist && title in QAlist.user) {
//         for (let i = 0; i < QAlist.user.title.length; i++) {
//             result = result + `Q${i}: ${QAlist.user.title[i][0]} \n A${i} : ${QAlist.user.title[i][1]}\n`;
//         }
//     }

//     console.log(query['id']);
//     res.send(result);
// });