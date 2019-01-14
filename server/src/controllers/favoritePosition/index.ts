import FavoritePosition from '../../models/FavoritePosition'
import * as utils from '../../utils'

export async function facoritePosition (ctx: any):Promise<Object> {
  try {
    const userId = ctx._id
    console.log(ctx._id)
    const {_id} = ctx.request.body
    if (!_id) {
      return ctx.body = {
        ...utils.getStatusAndError({ status: -200 }),
        message: '缺少参数'
      }
    }
    const favorites = await FavoritePosition.findOne({userId})
    console.log(favorites)
    // const fav:any = await favorites.userFavoritedPosition(_id)
    return ctx.body = {
      ...utils.getStatusAndError({status: 200}),
      data: []
    }
  } catch (error) {
    throw error
  }
}