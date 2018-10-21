import React from 'react'
import colors from '../../styles/colors'
import Link from 'next/link'

const styles = {
  header: {
    backgroundColor: '#333'
  },
  content: {
    minWidth: '1200px',
    maxWidth: '1308px',
    margin: '0 auto',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLeft: {
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  },
  headerLeftItem: {
    display: 'flex',
  },
  headline: {
    width: '1px',
    height: '24px',
    backgroundColor: '#5d5d5d',
    margin: '0 12px'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center'
  }
}

class Header extends React.PureComponent {
  render () {
    return (
      <header style={styles.header}>
        <div style={styles.content}>
          <div style={styles.headerLeft}>
            <div style={styles.headerLeftItem}>
              <a href="#" style={{color: colors.primary}}>拉勾APP</a>
            </div>
            <div style={styles.headline}></div>
            <div>
              <a href="#" style={{color: '#c4c3c3'}}>进入企业版</a>
            </div>
          </div>
          <div style={styles.headerRight}>
            <Link href="/signup">
              <a>注册</a>
            </Link>
            <div style={styles.headline}></div>
            <Link href="/signin">
              <a>登录</a>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}
export default Header
