import mongoose from 'mongoose'

const PositionSchema:any = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company'
  },
  title: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('position', PositionSchema)
