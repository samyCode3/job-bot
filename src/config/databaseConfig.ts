import {Sequelize} from 'sequelize'
import * as dotenv from 'dotenv'
import * as mysql2 from 'mysql2'
import logger from './logger'
dotenv.config()
// Database connection
export const sequelize = new Sequelize({
    dialect : 'mysql',
    dialectModule: mysql2,
    host : process.env.DB_HOST,
    username : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port : Number(process.env.DB_PORT),
    logging : (msg) => console.log(msg)
});
  
