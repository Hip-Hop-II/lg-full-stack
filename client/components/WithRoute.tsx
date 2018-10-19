import React from 'react'
import Router from 'next/router'

import * as NProgress  from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}


export default (BaseComponent) => {
  class WithRoute extends React.PureComponent {
    render () {
      return (
        <BaseComponent {...this.props} />
      )
    }
  }
  return WithRoute
}
