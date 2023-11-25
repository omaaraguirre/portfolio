import { Schema, model } from 'mongoose'

const emailSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
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
    trim: true
  },
  ip: String,
  origin: String,
  referer: String,
  userAgent: String

}, { timestamps: true })

const Email = model('Email', emailSchema)

export default Email
