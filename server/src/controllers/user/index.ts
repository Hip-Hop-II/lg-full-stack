import User from '../../models/User'
import FavoritePosition from '../../models/FavoritePosition'
import {avatar_img} from '../../utils/images'

export async function signin (ctx: any):Promise<Object> {
  try {
    const {username, password} = ctx.request.body
    const user = await User.findOne({
      $or: [
        {username},
        {email: username}
      ]
    })
    if (!user) {
      return ctx.body = {
        status: -403,
        message: '用户名不存在'
      }
    }
    if (!user.authUser(password)) {
      return ctx.body = {
        status: -403,
        message: '密码错误'
      }
    }
    return ctx.body = {
      status: 200,
      data: user.createToken()
    }
  } catch (error) {
    throw error
  }
}

export async function signup (ctx: any) {
  try {
    const {username, email, password} = ctx.request.body
    const user = await User.create({username, email, password, avatar: avatar_img})
    await FavoritePosition.create({
      userId: user._id
    })
    ctx.body = {
      status: 200,
      data: user.createToken()
    }
  } catch (error) {
    throw error
  }
}

export async function getUserInfo (ctx: any):Promise <Object> {
  const user = await User.findById({_id: ctx._id})
  if (user) {
    return ctx.body = {
      status: 200,
      data: {
        username: user.username,
        email: user.email,
        avatar: user.avatar
      }
    }
  }
}

