import mongoose, {Schema} from 'mongoose'

const emailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  ip: String,
  origin: String,
  referer: String,
  userAgent: String,

}, {timestamps: true})

const Email = mongoose.model('Email', emailSchema)

export default Email
