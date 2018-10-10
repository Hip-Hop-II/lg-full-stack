import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {colors} from '../utils/colors'

export default class ListColumn extends PureComponent {
  static Left = props => (
    <View style={styles.leftWrapper}>
      {props.children}
    </View>
  )
  static Right = props => (
    <View style={styles.rightWrapper}>
      {props.children}
    </View>
  )
  render() {
    const {link, onPress, border} = this.props
    let _style = {}
    if (border) {
      _style.borderBottomWidth = StyleSheet.hairlineWidth
      _style.borderBottomColor = colors.grey5
    }
    if (link) {
      return (
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.wrapper, _style]}>
            {this.props.children}
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.wrapper}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  leftWrapper: {
    flex: 1
  }
})
