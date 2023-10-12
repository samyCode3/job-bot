import * as winston from 'winston';
const { combine, timestamp, label, printf, prettyPrint } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });
const logger = winston.createLogger({
  format: combine(
    label({ label: 'info' }),
    timestamp(),
    prettyPrint(),
    myFormat
  ),

  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log', level: 'info' }),
  ],
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export default logger