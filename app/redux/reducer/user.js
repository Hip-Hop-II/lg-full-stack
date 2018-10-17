import * as types from '../actionType'
export function user (state={city: '上海', user: {}}, action) {
  switch (action.type) {
    case types.LOCATION_CITY:
      return {
        ...state,
        city: action.city
      }
    case types.RECEIVE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
