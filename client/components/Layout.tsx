import React from 'react'
import Header from './header/Header'
import Nav from './header/Nav'
import {resetStyle, nprogressStyle} from  '../styles/global.css'

import Router, {withRouter} from 'next/router'

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

const Layout = (props) => {
  console.log(props)
  return (
    <div>
    {props.router.pathname !== '/signin' && <Header /> }
    {props.router.pathname !== '/signin' && <Nav />}
    {props.children}
    <style jsx global>
    {resetStyle}
    </style>
    <style jsx global>{nprogressStyle}</style>
  </div>
  )
}

export default withRouter(Layout)