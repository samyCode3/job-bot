import { accountRoutes } from "./account.routes";
import { ErrorHandlerMiddleware } from "../middleware/error";
import { Router } from "express";

export const IndexRoutes =  Router()

IndexRoutes.use('/account', accountRoutes)
IndexRoutes.use(ErrorHandlerMiddleware)