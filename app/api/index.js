const API_URL = 'http://localhost:4000'

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

export const User = {
  signup (data) {
    return fetch(`${API_URL}/signup`, {
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
    return fetch(`${API_URL}/signin`, {
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
}
