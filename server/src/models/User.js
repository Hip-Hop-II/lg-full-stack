import mongoose, {Schema} from 'mongoose'

const UserSchema = new Schema({
  email: {
    unique: true,
    type: String
  },
  avatar: String,
  password: String
}, {
  timestamps: true
})

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password)
    return next()
  }
})

UserSchema.methods = {
  // 密码加密
  _hashPassword (password) {
    
  }
}

export default mongoose.model('user', UserSchema)

