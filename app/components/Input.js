import React, { PureComponent } from 'react'
import { Text, View, TextInput, StyleSheet, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'

export default class Input extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    maxLength: PropTypes.number,
    secureTextEntry: PropTypes.bool,
    selectionColor: PropTypes.string,
    showCheckmark: PropTypes.bool
  }

  static defaultProps = {
    selectionColor: colors.greenPrimary
  }

  state = {
    iconScale: new Animated.Value(0),
  }

  createCheckAnimate = (value) => {
    Animated.timing(this.state.iconScale, {
      toValue: value,
      duration: 300,
      easing: Easing.easeOutBack
    }).start()
  }

  render() {
    const {placeholder, value, onChangeText, keyboardType,
      maxLength,
      secureTextEntry,
      inputStyle,
      selectionColor,
      showCheckmark
    } = this.props
    const {iconScale, iconCloseScale} = this.state
    const checkmarkValue = iconScale.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [0.01, 1.6, 1]
    })

    const scaleValue = showCheckmark ? 1 : 0
    this.createCheckAnimate(scaleValue)
    return (
      <View style={styles.wrapper}>
        <TextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        style={[styles.input, inputStyle]}
        underlineColorAndroid="transparent"
        selectionColor={selectionColor}
        />
        {showCheckmark  && 
        <Animated.View style={[styles.checkWrapper, {
          transform: [{
            scale: checkmarkValue
          }]
        }]}>
          <Ionicons name="ios-checkmark" color={colors.greenPrimary} size={30} />
        </Animated.View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',

  },
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey5,
    paddingRight: 40
  },
  checkWrapper: {
    position: 'absolute',
    bottom: 34,
    right: 10,
    overflow: 'hidden'
  }
})
