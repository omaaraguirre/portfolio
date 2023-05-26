import nodemailer from 'nodemailer'

const sendEmail = async ({ name, email, message }) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const info = await transport.sendMail({
    from: `${name} <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: 'New portfolio message',
    text: `From: ${name} (${email})\n\n${message}`,
    html: `
    <p>From: ${name} (${email})</p>
    <p>${message}</p>
    `
  })

  console.log('Email sent: %s', info.messageId)
}

export default sendEmail
