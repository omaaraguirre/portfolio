import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import sendEmail from './services/sendEmail.js'
import connectMongo from './services/connectMongo.js'
import emailRegister from './middleware/emailRegister.js'
import { PORT, WHITELISTED_DOMAINS } from './config.js'

connectMongo()
const app = express()
app.use(cors(
  { origin: WHITELISTED_DOMAINS }
))
app.use(express.json())

app.post('/api/email', emailRegister, async (req, res) => {
  const { name, email, message } = req.body
  try {
    const emailResponse = await sendEmail({ name, email, message })
    if (emailResponse.success) {
      res.send({
        ok: true,
        msg: 'Email sent',
        messageId: emailResponse.messageId
      })
    } else throw new Error(emailResponse.error)
  } catch (error) {
    res.status(500).send({
      ok: false,
      msg: 'Error sending email',
      error: error.message
    })
  }
})

app.use((req, res) => res.status(404).json({ message: 'Not found' }))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
