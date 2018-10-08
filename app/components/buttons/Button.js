import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {colors} from '../../utils/colors'
import {images} from '../../utils/images'

export default class Button extends PureComponent {
  formatPadding = () => {
    const {sm, md} = this.props
    if (sm) {

    }
  }
  render() {
    const {onPress, sm, md, style, full, loading} = this.props
    let _style = {}
    if (sm) {
      _style.width = 70
    } else if (md) {
      _style.width = 90
    } else if (full) {
      _style.width = '100%'
    }
    if (loading) {
      return (
        <View style={[styles.wrapper, _style, style, {flexDirection: 'row'}]}>
          <Image source={images.loading_img} style={{width: 50, height: 50}} />
          {/* <Text style={{color: colors.white}}>加载中...</Text> */}
        </View>
      )
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
