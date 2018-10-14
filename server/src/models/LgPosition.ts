import mongoose from 'mongoose'

const LgPositionSchema = new mongoose.Schema({
  adWord: {
    type: Number,
    default: 0
  },
  appShow: {
    type: Number,
    default: 0
  },
  approve: {
    type: Number,
    default: 0
  },
  businessZones: [String],
  city: String,
  companyFullName: String,
  companyId: Number,
  companyLabelList: [String],
  companyLogo: String,
  companyShortName: String,
  companySize: String,
  createTime: Date,
  deliver: {
    type: Number,
    default: 0
  },
  district: String,
  education: String,
  explain: String,
  financeStage: String,
  firstType: String,
  formatCreateTime: String,
  gradeDescription: String,
  hitags: String,
  imState: String,
  industryField: String,
  industryLables: [String],
  isSchoolJob: {
    type: Number,
    default: 0
  },
  jobNature: String,
  latitude: String,
  linestaion: String,
  longitude: String,
  pcShow: {
    type: Number,
    default: 0
  },
  plus: String,
  positionAdvantage: String,
  positionId: {
    unique: true,
    type: Number
  },
  positionLables: [String],
  positionName: String,
  promotionScoreExplain: String,
  publisherId: Number,
  resumeProcessDay: Number,
  resumeProcessRate: Number,
  salary: String,
  score: Number,
  secondType: String,
  skillLables: [String],
  stationname: String,
  subwayline: String,
  thirdType: String,
  workYear: String
})

export default mongoose.model('lgPosition', LgPositionSchema)
