import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectMongo from './services/connectMongo.js'
import emailRegister from './middleware/emailRegister.js'
import sendEmail from './services/sendEmail.js'

dotenv.config()
connectMongo(process.env.MONGODB_URI)

const app = express()
app.use(cors(
  { origin: process.env.WHITELISTED_DOMAINS.split(',') }
))
app.use(express.json())

app.post('/api/email', emailRegister, (req, res) => {
  const { name, email, message } = req.body
  sendEmail({ name, email, message })
  res.send({ ok: true, msg: 'Email sent' })
})

app.use((req, res) => res.status(404).json({
  message: 'Not found'
}))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server running'))
