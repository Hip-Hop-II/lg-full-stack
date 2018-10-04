import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {colors} from '../../utils/colors'

export default class Button extends PureComponent {
  formatPadding = () => {
    const {sm, md} = this.props
    if (sm) {

    }
  }
  render() {
    const {onPress, sm, md, style, full} = this.props
    let _style = {}
    if (sm) {
      _style.width = 70
    } else if (md) {
      _style.width = 90
    } else if (full) {
      _style.width = '100%'
    }

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.wrapper, _style, style]}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderColor: colors.grey5,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
  }
})
