import mongoose, { Schema } from 'mongoose'

const mobileSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  brand: {
    type: String,
    trim: true,
  },
  codeName: {
    type: String,
    trim: true,
  },
  availability: {
    type: Boolean,
  },
  technology: {
    type: String,
    trim: true,
  },
  bands2g: {
    type: String,
    trim: true,
  },
  bands3g: {
    type: String,
    trim: true,
  },
  bands4g: {
    type: String,
    trim: true,
  },
  bookedBy: {
    type: String,
    trim: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now(),
  },
})

mobileSchema.index(
  {
    name: 1,
    codeName: 1,
    created: 1,
  }, {
    name: 'csvFieldIndex',
  },
)

mongoose.model('mobiles', mobileSchema)
