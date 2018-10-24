import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import CateList from '../components/CateList'
import Tabs from '../components/Tabs'
import PositionItem from '../components/PositionItem'
import CompanyItem from '../components/CompanyItem'
import positionList from '../mock/position'
import companyList from '../mock/company'
import LoadMoreButton from '../components/LoadMoreButton'

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

const positionTabs = [
  {
    title: '热门职位',
    value: 'hot'
  },
  {
    title: '最新职位',
    value: 'createTime'
  }
]

const companyTabs = [
  {
    title: '热门公司',
    value: 'hot'
  }
]
const linkTabs = [
  {
    title: '友情链接',
    value: 'hot'
  }
]

class App extends React.PureComponent {
  state = {
    currentPositionIndex: 0,
    currentCompanyIndex: 0,
    inputValue: ''
  }
  private positionTabClick = (item, index) => {
    this.setState({
      currentPositionIndex: index
    })
  }
  private companyTabClick = (item, index) => {
    this.setState({
      currentPositionIndex: index
    })
  }
  get _getOutputValue () {
    return (Number(this.state.inputValue)/2/23.4375).toFixed(3)
  }
  render () {
    const {currentPositionIndex, currentCompanyIndex} = this.state
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
              <div className="slide">
                <CateList />
              </div>
              <main className="cate-content">
                <Link href="/company">
                  <a style={{display: 'inline-block', width: '840px', height: '346px'}}>
                  <img style={{maxWidth: '100%'}} src="/static/banner1.png" alt="banner" />
                  </a>
                </Link>
              </main>
            </div>
            <div className="pxRem">
              <div className="pxRem-input">
                  <span>输入值：</span>
                  <Input placeholder="输入值...." value={this.state.inputValue} onChange={value => this.setState({inputValue: value})} />
              </div>
              <div className="pxRem-output" style={{marginTop: 20}}>
                  <span>输出值：{this._getOutputValue}rem</span>
              </div>
            </div>
            <section className="position-wrapper">
              <div className="position-heading">
                <Tabs tabs={positionTabs} currentIndex={currentPositionIndex}
                tabClick={this.positionTabClick}
                />
              </div>
              <div className="position-body">
                <ul className="position-body__list">
                  {positionList.map((item, index) => (
                    <PositionItem {...item} key={index} />
                  ))}
                </ul>
              </div>
              <div className="position-footer">
                <LoadMoreButton />
              </div>
            </section>
            <section className="company-wrapper">
              <div className="company-heading">
                <Tabs tabs={companyTabs} currentIndex={currentCompanyIndex}
                tabClick={this.companyTabClick}
                />
              </div>
              <div className="company-body">
                <ul className="company-body__list">
                  {companyList.map((item, index) => (
                    <CompanyItem {...item} key={index} />
                  ))}
                </ul>
              </div>
              <div className="company-footer">
                <LoadMoreButton />
              </div>
            </section>
            <section className="links-wrapper">
              <div className="links-heading">
                <Tabs tabs={linkTabs}
                />
              </div>
            </section>
          </section>
          <style jsx>{`
            .pxRem {
              width: 1200px;
              margin: 0 auto;
            }
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
              display: flex;
              width: 1200px;
              alignItems: center;
              margin: 0 auto;
            }
            .cate-content {
              margin-left: 60px;
              margin-top: 11px;
            }
            .links-wrapper,
            .company-wrapper,
            .position-wrapper {
              width: 1200px;
              margin: 53px auto 20px;
            }
            .links-heading,
            .company-heading,
            .position-heading {
              border-bottom: 1px solid #e8e8e8;
            }
            .company-body__list,
            .position-body__list {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .company-footer,
            .position-footer {
              margin: 16px auto 0;
              text-align: center;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}

export default App
