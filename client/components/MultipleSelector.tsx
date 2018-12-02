import React, { PureComponent, Fragment } from 'react'

type Props = {
  multiple?: boolean;
  selectorList?: Array<any>;
  selectedList?: Array<any>;
  selectorClick: Function;
}

export default class MultipleSelector extends PureComponent<Props> {
  static defaultProps = {
    multiple: true,
    selectedList: []
  }
  constructor (props) {
    super(props)
    // if (props.multiple) {
    //   this.state = {
    //     multiSelectedList: [{title: '不限'}, ...props.selectedList]
    //   }
    // } else {
    //   this.state = {
    //     multiSelectedList: props.selectedList
    //   }
    // }
  }
  public isInclude (current) {
    if (this.props.selectedList.findIndex(mult => mult.title === current.title) !== -1) {
      return true
    }
    return false
  }
  public itemClick = (item: {title?: String}, index: Number) => {
    this.props.selectorClick(item, index)
  }
  public renderItem = (item: {title?: String}, index: Number) => {
    const {multiple, selectedList} = this.props
    if (multiple) {  
      return (
        <li className={this.isInclude(item) ? 'multiple-item__wrapper active' : 'multiple-item__wrapper'} onClick={() => this.itemClick(item, index)}>
          <span>{item.title}</span>
          {this.isInclude(item) && <i></i>}
          <style jsx scoped>{`
          .multiple-item__wrapper {
            padding: 4px 8px;
            cursor: pointer;
            transition: all .3s ease;
          }
          .multiple-item__wrapper.active {
            background-color: #00b38a;
            color: #fff;
          }
          .multiple-item__wrapper {
            margin-left: 9px;
            margin-right: 5px;
          }
          .multiple-item__wrapper.active>i {
            display: inline-block;
            width: 11px;
            height: 11px;
            background: url('/static/delete.png') center center no-repeat;
            background-size: cover;
            margin-left: 4px;
          }
          `}</style>
        </li>
      )
    }
  }
  public render() {
    const {selectorList} = this.props
    return (
      <div className="selector-wrapper">
        <ul>
          {selectorList.map((item: any, index: number) => (
            <Fragment key={index}>{this.renderItem(item, index)}</Fragment>
          ))}
        </ul>
        <style jsx scoped>{`
          .selector-wrapper>ul {
            display: flex;
          }
        `}</style>
      </div>
    )
  }
}
