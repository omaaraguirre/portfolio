import Email from '../models/Email.js'

const emailRegister = async (req, res, next) => {
  const { name, email, message } = req.body
  const ip = req.ip.substr(0, 7) === '::ffff:' ? req.ip.substr(7) : req.ip
  const origin = req.headers.origin
  const referer = req.headers.referer
  const useragent = req.headers['user-agent']

  if (validateEmail({ name, email, message })) {
    return res.status(400).json({ ok: false, msg: 'Invalid information' })
  }

  const newEmail = new Email({
    name, email, message, ip, origin, referer, useragent
  })

  try {
    const email = await newEmail.save()
    if (!email) throw new Error('Error saving email')
    next()
  } catch (error) {
    res.status(500).json({ ok: false, msg: error.message })
  }
}

const validateEmail = ({ name, email, message }) => {
  let errors = false
  const nameRegex = /^[a-zA-Z\s]+$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name.trim()) {
    errors = true
  } else if (!nameRegex.test(name)) {
    errors = true
  }

  if (!email.trim()) {
    errors = true
  } else if (!emailRegex.test(email)) {
    errors = true
  }

  if (!message.trim()) {
    errors = true
  }

  return errors
}

export default emailRegister
