import React, { PureComponent } from 'react'
import Layout from '../components/Layout'
import MultipleSelector from '../components/MultipleSelector'
import CompanyItem from '../components/CompanyItem'
import companyList from '../mock/company'

const FinancingOptions = [
  {
    title: '不限'
  },
  {
    title: '未融资'
  },
  {
    title: '天使轮'
  },
  {
    title: 'A轮'
  },
  {
    title: 'B轮'
  },
  {
    title: 'C轮'
  },
  {
    title: 'D轮及以上'
  },
  {
    title: '上市公司'
  },
  {
    title: '不需要融资'
  }
]
const companySizeOptions = [
  {
    title: '不限'
  },
  {
    title: '少于15人'
  },
  {
    title: '15-50人'
  },
  {
    title: '50-150人'
  },
  {
    title: '150-500人'
  },
  {
    title: '500-2000人'
  },
  {
    title: '2000人以上'
  }
]
const industryOptions = [
  {
    title: '不限'
  },
  {
    title: '移动互联网'
  },
  {
    title: '电子商务'
  },
  {
    title: '金融'
  },
  {
    title: '企业服务'
  },
  {
    title: '教育'
  },
  {
    title: '文化娱乐'
  },
  {
    title: '游戏'
  },
]
const workcityOptions = [
  {
    title: '全国'
  },
  {
    title: '北京'
  },
  {
    title: '上海'
  },
  {
    title: '深圳'
  },
  {
    title: '广州'
  },
  {
    title: '杭州'
  },
  {
    title: '成都'
  },
  {
    title: '南京'
  },
  {
    title: '武汉'
  }
]
const orderOptions = [
  {
    title: '默认排序'
  },
  {
    title: '职位数量'
  },
  {
    title: '面试评价数'
  },
  {
    title: '简历处理率'
  }
]
type State = {
  financingSelectList: Array<any>;
  companySizeSelectList: Array<any>;
  industrySelectList: Array<any>;
  workcityTitle: String;
}
class Company extends PureComponent<State> {
  state = {
    financingSelectList: [{title: '不限'}],
    companySizeSelectList: [{title: '不限'}],
    industrySelectList: [{title: '不限'}],
    workcitySelectedIndex: 0,
    orderSelectedIndex: 0
  }
  // 判断当前的标签 是否在数组里面
  private isInclude (list:Array<any>, current:{title: String}) {
    if (list.findIndex(item => item.title === current.title) === -1) {
      return false
    }
    return true
  }
  // 移除数组中的某一个
  removeItem = (list, removeItem) =>{
    const idx = list.findIndex(item => item.title === removeItem.title)
    if (idx === -1) {
      return list
    }
    return [...list.slice(0, idx), ...list.slice(idx + 1)]
  }
  // 未融资点击
  financingClick = (item:{title: String}, index: Number) => {
    const {financingSelectList} = this.state
    if (item.title === '不限') {
      this.setState({
        financingSelectList: [{title: '不限'}]
      })
    } else {
      const List = this.removeItem(financingSelectList, {title: '不限'})
      if(this.isInclude(financingSelectList, item)) {
        this.setState({
          financingSelectList: this.removeItem(List, item)
        })
      } else {
        this.setState({
          financingSelectList: [...List, item]
        })
      }
    }
  }
  // 公司规模点击
  companySizeClick = (item:{title: String}) => {
    const {companySizeSelectList} = this.state
    if (item.title === '不限') {
      this.setState({
        companySizeSelectList: [{title: '不限'}]
      })
    } else {
      const List = this.removeItem(companySizeSelectList, {title: '不限'})
      if(this.isInclude(companySizeSelectList, item)) {
        this.setState({
          companySizeSelectList: this.removeItem(List, item)
        })
      } else {
        this.setState({
          companySizeSelectList: [...List, item]
        })
      }
    }
  }
  // 行业领域
  industryClick = (item: {title: String}) => {
    const {industrySelectList} = this.state
    if (item.title === '不限') {
      this.setState({
        industrySelectList: [{title: '不限'}]
      })
    } else {
      const List = this.removeItem(industrySelectList, {title: '不限'})
      if(this.isInclude(industrySelectList, item)) {
        this.setState({
          industrySelectList: this.removeItem(List, item)
        })
      } else {
        this.setState({
          industrySelectList: [...List, item]
        })
      }
    }
  }
  // 城市选择点击时
  workcityClick = (current: {title: String}, index: Number) => {
    const {workcitySelectedIndex} = this.state
    if (index !== workcitySelectedIndex) {
      this.setState({workcitySelectedIndex: index})
    }
  }
  // 排序
  orderClick = (current: {title: String}, index: Number) => {
    const {orderSelectedIndex} = this.state
    if (index !== orderSelectedIndex) {
      this.setState({orderSelectedIndex: index})
    }
  }
  render() {
    const {financingSelectList, companySizeSelectList, industrySelectList, workcitySelectedIndex, orderSelectedIndex} = this.state
    return (
      <Layout>
        <section className="banner"></section>
        <section className="company-container">
          <div className="company-content">
            <div className="filter-content">
              <div className="filter-item">
                <span>公司地点：</span>
                <MultipleSelector 
                selectorList={workcityOptions}
                selectedIndex={workcitySelectedIndex}
                selectorClick={this.workcityClick}
                />
              </div>
              <div className="filter-item">
                <span>融资阶段：</span>
                <MultipleSelector 
                selectorList={FinancingOptions}
                selectedList={financingSelectList}
                selectorClick={this.financingClick}
                multiple
                />
              </div>
              <div className="filter-item">
                <span>公司规模：</span>
                <MultipleSelector 
                selectorList={companySizeOptions}
                selectedList={companySizeSelectList}
                selectorClick={this.companySizeClick}
                multiple
                />
              </div>
              <div className="filter-item">
                <span>行业领域：</span>
                <MultipleSelector 
                selectorList={industryOptions}
                selectedList={industrySelectList}
                selectorClick={this.industryClick}
                multiple
                />
              </div>
            </div>
            <div className="sub_filter__content">
              <div className="filter-item">
                  <span>排序方式：</span>
                  <MultipleSelector 
                  selectorList={orderOptions}
                  selectedIndex={orderSelectedIndex}
                  selectorClick={this.orderClick}
                  />
                </div>
            </div>
            <div className="company-wrapper">
              <ul>
              {companyList.map((item, index) =>(
                <CompanyItem {...item} key={index} />
              ))}
              </ul>
            </div>
          </div>
        </section>
        <style jsx scoped>{`
        .banner {
          background-color: #00b38a;
          height: 387px;
        }
        .company-container {
          min-width: 1200px;
        }
        .company-content {
          width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
          margin-top: 40px;
        }
        .filter-content {
          padding: 8px 0;
          background-color: #fafafa;
          border: 1px solid #ededed;
          min-height: 36px;
        }
        .filter-item {
          display: flex;
          align-items: center;
          padding: 6px 0;
        }
        .filter-item>span {
          font-weight: 600;
          margin-left: 15px;
        }
        .sub_filter__content {
          height: 45px;
          display: flex;
          align-items: center;
          margin-top: 15px;
          background-color: #fafafa;
          border: 1px solid #ededed;
        }
        .company-wrapper {
          margin-top: 40px;
        }
        .company-wrapper>ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        `}</style>
      </Layout>
    )
  }
}

export default Company
