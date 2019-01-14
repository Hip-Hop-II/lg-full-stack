import mongoose from 'mongoose'

const LgCompanySchema:any = new mongoose.Schema({
  companyId: {
    unique: true,
    type: Number
  },
  companyFullName: String,
  approve: {
    type: Number,
    default: 1
  },
  city: String,
  cityScore: Number,
  companyCombineScore: Number,
  companyFeatures: String,
  companyLogo: String,
  companyShortName: String,
  companySize: String,
  countryScore: Number,
  financeStage: String,
  industryField: String,
  interviewRemarkNum: Number,
  isHasValidPosition: String,
  otherLabel: String,
  positionNum: Number,
  processRate: Number,
  updateTime: Date
})
export default mongoose.model('lgcompany', LgCompanySchema)
