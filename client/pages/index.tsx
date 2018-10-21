import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import CateList from '../components/CateList'

const fireList = [
  {
    title: '前端开发',
    query: 'web'
  },
  {
    title: 'Java',
    query: 'java'
  },
  {
    title: '移动产品经理',
    query: 'mobile'
  },
  {
    title: '数据运营',
    query: 's'
  },
  {
    title: '产品经理',
    query: 'c'
  },
  {
    title: 'C++',
    query: 'c++'
  },
  {
    title: 'PHP',
    query: 'php'
  }
]

class App extends React.PureComponent {
  render () {
    return (
      <Layout>
        <div className="container">
          <div className="search-wrapper">
            <div className="search-box">
              <Input className="search-box__input" placeholder="搜索职位、公司或地点" width={762} />
              <Button>
                搜索
              </Button>
            </div>
            <div className="search-fields">
              <span>热门搜索：</span>
              <div className="search-fields__content">
                {fireList.map((item, index) => (
                  <Link href={item.query} key={index}>
                   <a>{item.title}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <section className="main">
              <div className="cate-wrapper">
                <CateList />
              </div>
            </section>
          <style jsx>{`
            .search-wrapper {
              min-width: 1200px;
              background-color: #F2F5F4;
              padding: 30px 0 28px;
            }
            .search-box,
            .search-fields
            {
              width: 938px;
              margin: 0 auto;
              display: flex;
              align-items: center;
            }
            .search-box__input {
              border-right: 1px soild transparent;
            }
            .search-fields {
              padding-top: 10px;
            }
            .search-fields>span {
              margin: 0 6px;
              color: #777;
            }
            .search-fields__content>a {
              margin-right: 20px;
              cursor: pointer;
              color: #00b38a;
            }
            .main {
              min-width: 1200px;
              padding: 30px 0;
            }
            .cate-wrapper {
              width: 1200px;
              margin: 0 auto;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}

export default App
