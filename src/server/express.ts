import * as express from 'express'
import * as dotenv from 'dotenv'
import { sequelize } from "../model/index"
import { IndexRoutes } from '../routes'
import { StatusCodes } from 'http-status-codes'
import { sendMail } from '../utils/mail'
import { log } from '../utils/logs'
dotenv.config()

const app = express()
const PORT = process.env.PORT
app.use(express.json({limit : '50mb'}))
app.use(express.urlencoded({extended: true, limit : '50mb'}))
export const ConnectionServer = async () => {
   

    app.get('/', (req: any, res: any) => {
        log('info',`Ip: ${req.ip}, Method :  ${req.method}, Url: ${req.url}, message: 'Api for Job search'`)
        return res.send(`Api for Job search`)
    })

    app.use('/api/v1', IndexRoutes, (req: any, res: any) => {
        log('info',`Ip: ${req.ip}, Method :  ${req.method}, Url: ${req.url}`)
    })
    app.all('*', (req: any, res: any) => {
        log('info',`Ip: ${req.ip}, Method :  ${req.method}, Url: ${req.url}, message: 'Make a valid request please...'`)
           return res.status(StatusCodes.NOT_FOUND).json({
                ok : false,
                status: StatusCodes.NOT_FOUND,
                ip : `Ip: ${req.ip}`,
                method: `Method :  ${req.method}`,
                url : `Url: ${req.url}`,
                message: 'Make a valid request please...'
           })
    }) 
    sequelize.authenticate().then(() => {

    log( 'info', `Able to estasblish connection`) 
    app.listen(PORT, () => {
        if(process.env.NODE_ENV === 'development') {
            log('info', `App is running on port http://localhost:${PORT}`)
        } else {
            log('info', `Server is running`)
        }
         
    })
}
    ).catch(err => log('error', `Unable to establiash ${err.message}`))
    //    sequelize.sync({alter: true}).then(() => {
    //       log('info', 'Database is conneted')
    // }).catch((error) => {
    //       log('error', `Database fails to connect ${error}`) 
    // })
} 


