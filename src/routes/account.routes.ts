import { Router } from "express";
import AccountController from "../controllers/account.controller";
import AccountService from "../service/account.service";


export  const accountRoutes = Router()

// accountRoutes.post('/create', accounts.createController)