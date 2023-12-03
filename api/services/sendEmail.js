import nodemailer from 'nodemailer'
import { EMAIL_CONFIG } from '../config.js'

const sendEmail = async ({ name, email, message }) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_CONFIG.HOST,
    auth: {
      user: EMAIL_CONFIG.USER,
      pass: EMAIL_CONFIG.PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  try {
    const info = await transport.sendMail({
      from: `${name} <${EMAIL_CONFIG.USER}>`,
      to: EMAIL_CONFIG.USER,
      replyTo: email,
      subject: 'New portfolio message',
      text: `From: ${name} (${email})\n\n${message}`,
      html: `
      <p>From: ${name} (${email})</p>
      <p>${message}</p>
      `
    })

    return { success: true, messageId: info.messageId }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export default sendEmail
