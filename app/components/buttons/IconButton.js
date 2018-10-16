import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'

export default class IconButton extends PureComponent {
  render() {
    const {onPress, style} = this.props
    return (
    <TouchableOpacity onPress={onPress} activeOpacity={.3}>
      <View style={style}>
        {this.props.children}
      </View>
    </TouchableOpacity>
    )
  }
}