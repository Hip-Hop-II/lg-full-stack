import {AsyncStorage} from 'react-native'

const API_URL = 'http://10.3.170.113:4000'


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
      ...options,
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
  async getList (data) {
    const params = await parseParams()
    return fetch(`${API_URL}/position/list`, params)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(err => Promise.reject(err))
  }
}
