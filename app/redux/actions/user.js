import * as types from '../actionType'
import {User} from '../../api'

export function getUserLocation ({city}) {
  return {
    type: types.LOCATION_CITY,
    city
  }
}

export function getUserInfo () {
  return async (dispatch) => {
    try {
      const result = await User.getUserInfo()
      if (result.status === 200) {
        dispatch({
          type: types.RECEIVE_USER,
          user: result.data
        })
        return Promise.resolve({status: 200})
      }
    } catch (error) {
      throw error
    }
  }
}
