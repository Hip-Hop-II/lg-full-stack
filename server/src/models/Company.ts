import mongoose from 'mongoose'

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  recruitment_position: {
    type: Number,
    required: true,
    default: 0
  },
  appraisal: {
    type: Number,
    required: true,
    default: 0
  },
  city: {
    type: String,
    required: true
  },
  financing: {
    type: String,
    required: true
  },
  peoples: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.model('company', CompanySchema)
