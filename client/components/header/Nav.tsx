import React from 'react'
import {withRouter} from 'next/router'
import colors from '../../styles/colors'
import Link from 'next/link'

const styles = {
  nav: {
    minWidth: '1200px',
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #e5e5e5',
    borderTop: '1px solid #d2d2d2',
    height: '54px'
  },
  content: {
    width: '1200px',
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
  },
  cityWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: '36px'
  },
  logo: {
    background: 'url("/static/logo.png") no-repeat 100% 100%',
    backgroundSize: 'cover',
    width: '97px',
    height: '34px'
  }
}

const navList = [
  {
    title: '首页',
    link: '/'
  },
  {
    title: '公司',
    link: '/company'
  },
  {
    title: '校园',
    link: '/schoolyard'
  },
  {
    title: '言职',
    link: '/speech'
  }
]

class Nav extends React.PureComponent {
  render () {
    const {router} = this.props
    return (
      <div style={styles.nav}>
        <div style={styles.content}>
          <div style={styles.cityWrapper}>
            <h1 style={styles.logo}></h1>
            <strong className="city-title">北京站</strong>
            <span className="city-choose">[切换城市]</span>
          </div>
          <div className="nav-content">
            {navList.map((item, index) => (
              <Link href={item.link} 
              key={index}>
                <a
                className="nav-content__item"
                style={{
                  borderBottom: router.pathname === item.link ? `1px solid ${colors.primary}` : '1px solid transparent',
                  color: router.pathname === item.link ? colors.primary : '#999'
                }}
                >{item.title}</a>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .city-title {
            margin: 10px 8px 0;
            color: #333;
            font-size: 18px;
            font-weight: 400;
          }
          .city-choose {
            margin-top: 14px;
            cursor: pointer;
            color: #999;
            font-size: 12px;
          }
          .nav-content {
            height: 100%;
            display: flex;
            align-items: center;
          }
          .nav-content__item {
            padding: 0 6px;
            font-size: 18px;
            margin: 0 16px;
            display: block;
            height: 100%;
            line-height: 53px;
          }
        `}</style>
      </div>
    )
  }
}

export default withRouter(Nav)
