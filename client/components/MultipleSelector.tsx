import React, { PureComponent, ReactChild, ReactElement } from 'react'

type Props = {
  multiple?: boolean;
  selectorList?: Array<any>;
  selectedList?: Array<any>;
}

export default class MultipleSelector extends PureComponent<Props> {
  static defaultProps = {
    multiple: false
  }
  public renderItem = (item: Object) => {
    const {multiple, selectedList} = this.props
    if (multiple) {
      const selectedList
      return (
        <div className="multiple-item__wrapper">
          <span>{item.label}</span>
          {selectedList.indexOf(item.label) !== -1 && <i></i>}
        </div>
      )
    }
  }
  public render() {
    const {selectorList} = this.props
    return (
      <div>
        <ul>
          {selectorList.map((item: any, index: number) => (
            <li key={index}>{this.renderItem(item)}</li>
          ))}
        </ul>
      </div>
    )
  }
}
