import React, { PureComponent } from 'react'
import {TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class HeaderButton extends PureComponent {
  static propTypes = {
    style: PropTypes.any,
    left: PropTypes.bool,
    right: PropTypes.bool,
    onPress: PropTypes.func
  }
  render() {
    const {style, left, right, onPress} = this.props
    let _style = {}
    if (left) {
      _style.marginLeft = 8
    } else if (right) {
      _style.marginRight = 8
    }
    return (
      <TouchableOpacity style={[style, _style]} onPress={onPress}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

