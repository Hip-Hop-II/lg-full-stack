import React, { PureComponent } from 'react'
import Layout from '../components/Layout'
import MultipleSelector from '../components/MultipleSelector'

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
type State = {
  financingSelectList: Array<any>;
}
class Company extends PureComponent<State> {
  state = {
    financingSelectList: [{title: '不限'}]
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
  render() {
    const {financingSelectList} = this.state
    return (
      <Layout>
        <section className="banner"></section>
        <section className="filter-container">
          <div className="filter-content">
            <div className="filter-item">
              <span>融资阶段：</span>
              <MultipleSelector 
              selectorList={FinancingOptions}
              selectedList={financingSelectList}
              selectorClick={this.financingClick}
              multiple
              />
            </div>
          </div>
        </section>
        <style jsx>{`
        .banner {
          background-color: #00b38a;
          height: 387px;
        }
        .filter-container {
          min-width: 1200px;
        }
        .filter-content {
          width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .filter-item {
          display: flex;
          align-items: center;
        }
        .filter-item>span {
          font-weight: 600;
        }
        `}</style>
      </Layout>
    )
  }
}

export default Company
