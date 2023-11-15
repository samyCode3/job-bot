import * as  winston from 'winston';


export const logger = winston.createLogger({
    transports : []
});

logger.add(new winston.transports.File({ filename:  'error.log', level: 'error' }),);
logger.add(new winston.transports.File({ filename:  'info.log', level: 'info' }),);

if(process.env.NODE_ENV != 'production'){
    logger.add(new winston.transports.Console());   
}