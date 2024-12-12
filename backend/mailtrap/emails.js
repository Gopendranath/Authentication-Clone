import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
    WELCOME_EMAIL_TEMPLATE
} from "./emailTemplates.js";

import { transporter } from "./mailtrap.config.js";

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sender = String(process.env.SMTP_EMAIL);

// sendVerificationEmail();
async function sendVerificationEmail(email, verificationToken) {
    try {
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: "Test Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Test Email",
        });
        console.log("Email sent:", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}


// sendPasswordResetEmail();
async function sendPasswordResetEmail(email, resetURL) {
    try {
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });
        console.log("Password reset email sent:", info.response);
    } catch (error) {
        console.error("Error sending password reset email:", error);
    }
}

// sendResetSuccessEmail();
async function sendResetSuccessEmail(email) {
    try {
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });
        console.log("Password reset success email sent:", info.response);
    } catch (error) {
        console.error("Error sending password reset success email:", error);
    }
}

// sendResetSuccessEmail();
async function sendWelcomeEmail(email, name) {
    try {
        const info = await transporter.sendMail({
            from: sender,
            to: email,
            subject: "Welcome to our app",
            html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
            category: "Welcome",
        });
        console.log("Welcome email sent:", info.response);
    } catch (error) {
        console.error("Error sending welcome email:", error);
    }
}



export { sendVerificationEmail, sendPasswordResetEmail, sendResetSuccessEmail, sendWelcomeEmail };