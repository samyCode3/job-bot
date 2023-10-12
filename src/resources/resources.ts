import { Response } from 'express'
import * as databases from '../model'

type databases = any

export default class Resources {
      async create (payload: any, model : databases): Promise<Response>{
            const resource = await model.create({...payload})
            return resource
      }
}