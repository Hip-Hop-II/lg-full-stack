import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

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
    const {link, onPress} = this.props
    if (link) {
      return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.wrapper}>
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
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftWrapper: {
    flex: 1
  }
})
