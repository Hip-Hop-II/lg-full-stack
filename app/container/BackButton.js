import React, { PureComponent } from 'react'
import { TouchableOpacity, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'

export default class BackButton extends PureComponent {
  render() {
    const {navigation} = this.props
    return (
      <TouchableOpacity onPress={() => navigation.goBack(null)} style={{marginLeft: 8}}>
        <Ionicons name="ios-arrow-back-outline" size={30} color={colors.greyDark} />
      </TouchableOpacity>
    )
  }
}
