import * as bcrypt from 'bcryptjs'


export const  hash_data =  (data: string) => {
     const salt = bcrypt.genSaltSync(10)
     const hash =  bcrypt.hashSync(data, salt)
     return hash
}

