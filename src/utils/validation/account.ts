import * as joi from 'joi'
import { AccountAttributeInterface } from '../../types/index.interface'
import { validator } from '../validator'


export const AccountValidator = async (body: any): Promise<AccountAttributeInterface | null> => {
         const schema: joi.ObjectSchema = joi.object({
               fullname: joi.string().required(),
               email: joi.string().required().trim(),
               username: joi.string().required(),
               password: joi.string().required(),
               confirm_password : joi.ref('ref')
         })

         return validator(schema, body)
}