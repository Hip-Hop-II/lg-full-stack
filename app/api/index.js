import {AsyncStorage} from 'react-native'
import queryString from 'query-string'

const API_URL = 'http://192.168.1.4:4000'


function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON (response) {
  return response.json()
}

async function parseParams (params = {}) {
  const {method, body} = params
  let _options = {
    headers: {
      'Content-type': 'application/json',
      authorization: 'Bearer ' + await AsyncStorage.getItem('Authorization')
    }
  }
  if (method === 'POST') {
    return {
      ..._options,
      method,
      body
    }
  }
  return _options
} 

export const User = {
  signup (data) {
    return fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => Promise.reject(err))
  },
  signin (data) {
    return fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => Promise.reject(err))
  },
  async getUserInfo () {
    const params = await parseParams()
    return fetch(`${API_URL}/auth/userinfo`, params)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
}

export const Position = {
  async getList (options) {
    const {type, ...newOptions} = options
    const params = await parseParams({method: 'POST', body: JSON.stringify({type})})
    return fetch(`${API_URL}/position/list?${queryString.stringify(newOptions)}`, params)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
}

export const Company = {
  async geCompanytList (options) {
    const {type, city, ...newOptions} = options
    const params = await parseParams({method: 'POST', body: JSON.stringify({type})})
    return fetch(`${API_URL}/company/list?${queryString.stringify(newOptions)}`, params)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
}
