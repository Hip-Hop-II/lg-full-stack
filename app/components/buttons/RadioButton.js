import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../../utils/colors'


export default class RadioButton extends PureComponent {
  render() {
    const {isActive, onPress, ...newProps} = this.props
    return (
      <TouchableOpacity onPress={() => onPress(newProps)}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{newProps.title}</Text>
          {isActive && <Ionicons name="ios-checkmark" size={26} color={colors.greenPrimary} />}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey5,
  },
  title: {
    flex: 1,
    color: colors.greyLight
  }
})

