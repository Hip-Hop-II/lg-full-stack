import * as types from '../actionType'
export function user (state={city: '上海'}, action) {
  switch (action.type) {
    case types.LOCATION_CITY:
      return {
        ...state,
        city: action.city
      }
    default:
      return state
  }
}
