import User from '../models/User'
import jwt from 'jsonwebtoken'
import constants from '../config/constants'
import * as utils from '../utils'

export async function checkAuth (ctx: any, next: Function): Promise<void> {
  try {
    const authorization = ctx.header.authorization
    if (authorization) {
      const [_, ...token] = authorization.split(' ')
      const decoded = jwt.verify(token[0], constants.JWT_SECRET)
      const user = await User.findById({_id: decoded.id})
      if (user) {
        ctx._id = user._id
        return await next()
      } else {
        ctx.status = 403
        ctx.body = utils.getStatusAndError({status: 403})
      }
    } else {
      ctx.status = 403
      ctx.body = utils.getStatusAndError({status: 403})
    }
  } catch (error) {
    throw error
    ctx.status = 403
    ctx.body = utils.getStatusAndError({status: 403})
  }
}
