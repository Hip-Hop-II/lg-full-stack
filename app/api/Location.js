import {CITYLIST} from '../data/cityList'
import {Location, Permissions} from 'expo'

export const getLocationAsync = async() => {
  try {
    const {status} = await Permissions.askAsync(Permissions.LOCATION)
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({})
      let city = '北京'
      let c = await Location.reverseGeocodeAsync(location)
      CITYLIST.forEach(item => {
        if (item.children && item.children.length > 0) {
          item.children.forEach(e => {
            if (c.indexOf(e.city) !== -1) {
               city = e.city
               return false
            }
          })
        }
      })
      return Promise.resolve({city})
    } else {
      return Promise.resolve({city: '北京'})
    }
  } catch (error) {
    return Promise.reject('No success!!')
  }
}
