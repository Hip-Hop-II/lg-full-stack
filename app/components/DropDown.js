import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons)

export default class DropDown extends PureComponent {
  state = {
    dropRote: new Animated.Value(0),
    iconColor: new Animated.Value(1),
    iconMargin: new Animated.Value(0)
  }
  oldOpen = false
  createAnimate = () => {
    Animated.timing(this.state.dropRote, {
      duration: 300,
      toValue: 1
    }).start()
    Animated.timing(this.state.iconMargin, {
      duration: 300,
      toValue: 2
    }).start()
  }

  fateOutAnimate = () => {
    Animated.timing(this.state.dropRote, {
      duration: 300,
      toValue: 0
    }).start()
    Animated.timing(this.state.iconMargin, {
      duration: 300,
      toValue: 0
    }).start()
  }

  onPress = () => {
    this.createAnimate()
    const {isOpen} = this.props
    this.props.onPress()
    this.oldOpen = !this.props.isOpen
    if (isOpen) {
      this.fateOutAnimate()
    } else {
      this.createAnimate()
    }
  }
  calcRotate () {
    const {isOpen} = this.props
    if (isOpen) {
      this.createAnimate()
    } else {
      this.fateOutAnimate()
    }
  }

  render() {
    const {dropRote, iconColor, iconMargin} = this.state
    const {onPress, text, isOpen} = this.props
    const calcRotate = dropRote.interpolate({
      inputRange: [0, 1],
      outputRange: [`0deg`, '180deg']
    })
    this.calcRotate()
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Animated.View style={[styles.wrapper, {opacity: iconColor}]}>
          <Text style={[styles.text, {color: isOpen ? colors.greenPrimary : colors.greyLight}]}>{text}</Text>
          <AnimatedIcon name="ios-arrow-down" size={14} color={isOpen ? colors.greenPrimary : colors.greyLight} 
          style={{transform: [{
            rotate: calcRotate
          }], bottom: iconMargin, position: 'relative'}}
          />
        </Animated.View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '300',
    marginRight: 6,
    paddingBottom: 2
  }
})
