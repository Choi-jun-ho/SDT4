import * as dotenv from "dotenv";
dotenv.config();
let env = process.env;

import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
  host: env.DB_HOST,
  user: env.DB_USERNAME,
  database: env.DB_DBNAME,
  password: env.DB_PASSWORD,
  port: Number(env.DB_PORT),
};

export const conn = mysql.createConnection(access);