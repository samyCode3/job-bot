import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";


export const ErrorHandlerMiddleware = (err: any, req: Request | any, res: Response | any, next: NextFunction) => {
    if(err.ok === false) {
        return res.status(err.status).json({ok : err.ok, status : err.status, message: err.message})
    }
    if(err.status || 500) {
        return res.status(500).json({ok : false, status : StatusCodes.INTERNAL_SERVER_ERROR, message: err.message})
    }
    
}