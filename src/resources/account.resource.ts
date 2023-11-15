import { Account } from "../model";
import { AccountAttributeInterface } from "../types/index.interface";
import Resources from "./resources";
const resource = new Resources

export default class AccountBase extends Resources {
     readonly model : Account
     async create (payload: AccountAttributeInterface): Promise<any> {
           const user = await resource.create({...payload}, this.model)
           return user
     }
}