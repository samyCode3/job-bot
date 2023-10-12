import * as express from 'express'
import * as dotenv from 'dotenv'
import { sequelize } from "../model/index"
import logger from '../utils/logger'
import { IndexRoutes } from '../routes'
import { StatusCodes } from 'http-status-codes'
dotenv.config()

const app = express()
const PORT = process.env.SERVER_PORT
app.use(express.json({limit : '50mb'}))
app.use(express.urlencoded({extended: true, limit : '50mb'}))
export const ConnectionServer = async () => {
//    sequelize.sync({alter: true, force: true}).then(() => {
//           logger.info('Database is conneted')
//     }).catch((error) => {
//           logger.error(`Database fails to connect ${error}`) 
//     })
    app.get('/', (req: any, res: any) => {
        logger.warn(`Ip: ${req.ip}, Method :  ${req.method}, Url: ${req.url}, message: 'Api for Job search'`)
        return res.send(`Api for Job search`)
    })

    app.use('/api/v1', IndexRoutes, (req: any, res: any) => {
        logger.warn(`Ip: ${req.ip}, Method :  ${req.method}, Url: ${req.url}`)
    })
    app.all('*', (req: any, res: any) => {
        logger.warn(`Ip: ${req.ip}, Method :  ${req.method}, Url: ${req.url}, message: 'Make a valid request please...'`)
           return res.status(StatusCodes.NOT_FOUND).json({
                ok : false,
                status: StatusCodes.NOT_FOUND,
                ip : `Ip: ${req.ip}`,
                method: `Method :  ${req.method}`,
                url : `Url: ${req.url}`,
                message: 'Make a valid request please...'
           })
    })
     app.listen(PORT, () => {
        if(process.env.NODE_ENV === 'development') {
            logger.info(`App is running on port http://localhost:${PORT}`)
        } else {
            logger.info(`Server is running`)
        }
         
    })
} 


