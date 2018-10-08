import mongoose from 'mongoose'
import {hashSync, compareSync} from 'bcrypt'
import jwt from 'jsonwebtoken'
import constants from '../config/constants'

const UserSchema = new mongoose.Schema({
  username: {
    unique: true,
    type: String
  },
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
  _hashPassword (password: string) {
    return hashSync(password, 10)
  },
  authUser (password: string) {
    return compareSync(password, this._hashPassword(this.password))
  },
  createToken () {
    return jwt.sign({
      id: this._id
    }, constants.JWT_SECRET)
  }
}

export default mongoose.model('user', UserSchema)
