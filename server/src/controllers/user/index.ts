import User from '../../models/User'
import {avatar_img} from '../../utils/images'

export async function signin (req: any, res: any) {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user) {
      res.json({
        code: -403,
        message: '用户名不存在'
      })
    }
    if (!user.authUser(password)) {
      res.json({
        code: -403,
        message: '密码错误'
      })
    }
    res.json({
      code: 200,
      data: user.createToken()
    })
  } catch (error) {
    throw error
  }
}

export async function signup (ctx: any) {
  try {
    console.log(ctx)
    const {username, email, password} = ctx.request.body
    const user = await User.create({username, email, password, avatar: avatar_img})

    ctx.body = {
      code: 200,
      data: user.createToken()
    }
  } catch (error) {
    throw error
  }
}
