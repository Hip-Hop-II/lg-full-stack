import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import reducer from './reducer'
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {navigationMiddleware} from '../navigations'

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})

export const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware, navigationMiddleware))
)
