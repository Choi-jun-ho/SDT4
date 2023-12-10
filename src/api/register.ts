import express, { Express, Response, Request, NextFunction } from "express";
import {conn} from "./../db/dbConnction";
import { RowDataPacket } from "mysql2";


const app = express();
app.use(express.json());
export const registerRouter = (req:Request, res:Response) => {
    const {userID, userPW, userName} = req.body;
    if (!userID || !userPW || !userName) {
        res.status(400).send('Bad Request');
        return;
    }

    const findSQL = `SELECT COUNT(*) AS count FROM user_table WHERE userID = "${userID}";`;
    
    conn.query(findSQL, (err, rows: RowDataPacket[]) => {
      if (err) {
        res.status(400).send('Bad Request');
        return;
      }
      if (parseInt(rows[0].count) > 0) {
        res.status(409).send('Conflict');
        console.log(rows[0].count);
        return;
      }
      else {
        const insertSql = `INSERT INTO user_table (userID, userPW, userName) VALUES ("${userID}", "${userPW}", "${userName}");`;
        conn.query(insertSql, (err, result) => {
            if (err) {
                res.status(400).send('Bad Request');
                return;
            }
        });
        res.status(200).send('INSERT OK');
        return;
      }
      
    });
  };