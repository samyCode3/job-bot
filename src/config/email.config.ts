import { createTransport } from 'nodemailer'

export const mailer = createTransport({
    host: '',
    port: 587,
    secure: false,
    auth: {
        user: '',
        pass: ''
    }
})
