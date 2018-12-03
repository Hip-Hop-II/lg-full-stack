import React from 'react'
import Header from './header/Header'
import Nav from './header/Nav'
import {resetStyle, nprogressStyle} from  '../styles/global.css'

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

export default (props) => {
  return (
    <div>
    
    {props.children}
    <style jsx global>
    {resetStyle}
    </style>
    <style jsx global>{nprogressStyle}</style>
  </div>
  )
  
}
