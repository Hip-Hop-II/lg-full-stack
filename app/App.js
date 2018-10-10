import React from 'react'
import {AppNavigator} from './navigations'
import {store} from './redux/store'
import {Provider} from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
