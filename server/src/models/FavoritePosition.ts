import mongoose, { Schema } from 'mongoose'
import LgPosition from './LgPosition'

const FavoritePositionSchema:any = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  positioies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LgPosition'
  }]
})

// FavoritePositionSchema.methods = {
//   async userFavoritedPosition (positionId) {
//     try {
//       if (this.positioies.some(position => position.equals(positionId))) {
//         this.positioies.pull(positionId)
//         await this.save()
//         const lgposition:any = await LgPosition.decreaseFavorite(positionId)
//         const lgP = lgposition.toJSON()
//         return {
//           isFavorited: false,
//           ...lgP
//         }
//       }
//       const position:any = await LgPosition.increaseFavorite(positionId)
//       const p = position.toJSON()
//       this.positioies.push(positionId)
//       await this.save()
//       return {
//         isFavorited: true,
//         ...p
//       }
//     } catch (error) {
//       throw error
//     }
//   }
// }
// FavoritePositionSchema.index({userId: 1}, {unique: true})

export default mongoose.model('favoritePosition', FavoritePositionSchema)
