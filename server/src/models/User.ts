import mongoose, {Schema} from 'mongoose'
import {hashSync, compareSync} from 'bcrypt'

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

UserSchema.pre('save', function (next: any) : any {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password)
    return next()
  }
})

UserSchema.methods = {
  // 密码加密
  _hashPassword (password) {
    return hashSync(password)
  },
  authUser (password) {
    return compareSync(password, this.password)
  }
}

export default mongoose.model('user', UserSchema)
