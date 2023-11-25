import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { PORT, WHITELISTED_DOMAINS } from './config.js'
import connectMongo from './services/connectMongo.js'
import emailRegister from './middleware/emailRegister.js'
import sendEmail from './services/sendEmail.js'

connectMongo()
const app = express()
app.use(cors(
  { origin: WHITELISTED_DOMAINS }
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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
