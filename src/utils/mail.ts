import { mailer } from '../config/email.config';

export const sendMail = async (details: { to: Array<string>, subject: string, text: string, html: string }) => {
    let { to, subject, text, html } = details;
    let readyTo = to.join(', ');
    const send = await mailer.sendMail({
        from: `"${process.env.SMTP_SENDER}" <${process.env.SMTP_USER}>`,
        to : readyTo,
        subject,
        text,
        html
    });
  console.log(send)
    try {
        return send.messageId;
    } catch (error) {
        throw error;
    }
}



