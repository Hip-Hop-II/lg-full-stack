import * as types from '../actionType'

export function getUserLocation ({city}) {
  return {
    type: types.LOCATION_CITY,
    city
  }
}
