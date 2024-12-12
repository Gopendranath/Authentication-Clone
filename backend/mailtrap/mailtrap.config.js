import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'mailslurp.mx',//'YOUR_SMTP_SERVER_HOST',
    port: 2465,//YOUR_SMTP_SERVER_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USERNAME,//'YOUR_SMTP_USERNAME',
        pass: process.env.SMTP_PASSWORD,//'YOUR_SMTP_PASSWORD'
    }
})

export { transporter };