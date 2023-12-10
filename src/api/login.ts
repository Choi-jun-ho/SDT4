import express, { Express, Response, Request, NextFunction } from "express";
import {conn} from "./../db/dbConnction";
import { RowDataPacket } from "mysql2";

const app = express();
app.use(express.json());
export const loginRouter = (req:Request, res:Response) => {
    const {userID, userPW} = req.body;
    if (!userID || !userPW) {
        res.status(400).send('Bad Request');
        return;
    }

    const findSQL = `SELECT COUNT(*) AS count FROM user_table WHERE userID = "${userID}" AND userPW = "${userPW}";`;
    
    conn.query(findSQL, (err, rows: RowDataPacket[]) => {
      if (err) {
        res.status(400).send('Bad Request');
        return;
      }
      if (parseInt(rows[0].count) > 0) {
        res.status(200).send('Login OK');
        return;
      }      
      else {
        res.status(409).send('Conflict');
        return;
      }
    });
  };
