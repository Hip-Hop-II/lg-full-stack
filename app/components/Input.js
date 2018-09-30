import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import {colors} from '../utils/colors'

export default class Input extends PureComponent {
  static propTypes = {

  }
  static Icon = (props) => (
    <View style={styles.iconWrapper}>{props.children}</View>
  )
  render() {
    const {value, style, placeholder, selectionColor, onChangeText, inputStyle} = this.props
    return (
      <View style={[style.wrapper, style]}>
        <TextInput 
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        selectionColor={selectionColor || colors.greenPrimary}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
        value={value}
        />
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'

  },
  input: {
    height: '100%',
    borderRadius: 25,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    fontSize: 16,
    textAlign: 'center'
  },
  iconWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    top: '50%',
    marginTop: -10,
    paddingRight: 75
  }
})
