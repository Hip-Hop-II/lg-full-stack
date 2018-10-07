import constants from './constants'

import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.set('debug', true)

try {
  mongoose.connect(constants.DB_URL)
} catch (error) {
  mongoose.createConnection(constants.DB_URL)
}

mongoose.connection.once('open', () => {
  console.log('running on mongodb!')
}).on('error', err => {
  throw err
})
