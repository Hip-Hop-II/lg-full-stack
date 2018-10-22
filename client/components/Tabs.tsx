import React from 'react'

type Props = {
  tabs: Array<any>;
  currentIndex?: number;
  tabClick?: (item: Object, index: number) => void;
}
type State = {
  slideLeft: number
}

class Tabs extends React.PureComponent<Props, State> {
  static defaultProps = {
    currentIndex: 0
  }
  state = {
    slideLeft: 0
  }
  private tabClick = (item , index, event) => {
    const {currentIndex} = this.props
    if (index !== currentIndex) {
      this.props.tabClick(item, index)
      this.setState({
        slideLeft: event.currentTarget.offsetLeft
      })
    }
  }
  public render () {
    const {slideLeft} = this.state
    const {tabs, currentIndex} = this.props
    return (
      <div className="tabs">
        <ul className="tabs-content">
          {tabs.map((item, index) => (
            <li 
            className={index === currentIndex ? 'current' : ''}
            key={index}
            onClick={(event) => this.tabClick(item, index, event)}
            >{item.title}</li>
          ))}
        </ul>
        <div className="tabs-slide" style={{left: slideLeft}}></div>
        <style jsx>{`
        .tabs {
          position: relative;
        }
        .tabs-content {
          display: flex;
          align-items: center;
        }
        .tabs-content li {
          margin-right: 58px;
          color: #999;
          font-size: 16px;
          cursor: pointer;
          padding: 14px 0;
          transition: all .3s ease;
        }
        .tabs-content li:hover {
          opacity: .8;
        }
        .tabs-content li.current {
          color: #333;
        }

        .tabs-slide {
          position: absolute;
          bottom: 0;
          height: 2px;
          background-color: #333;
          width: 64px;
          transition: all .4s ease;
        }
        `}</style>
      </div>
    )
  }
}

export default Tabs
