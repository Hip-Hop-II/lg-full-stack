import User from '../models/User'
import jwt from 'jsonwebtoken'
import constants from '../config/constants'

export async function checkAuth (ctx: any, next: Function): Promise<void> {
  const authorization = ctx.header.authorization
  if (authorization) {
    const [_, ...token] = authorization.split(' ')
    console.log(token)
    const decoded = jwt.verify(token[0], constants.JWT_SECRET)
    console.log(decoded)
    await next()
  }
}
