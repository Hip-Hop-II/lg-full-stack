import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RadioButton from './RadioButton'

export default class RadioButtonGroup extends PureComponent {
  render() {
    const {radioList, activeIndex, radioOnPress} = this.props

    return (
      <View style={styles.wrapper}>
        {radioList.map((item, index) => (
          <RadioButton title={item.title} key={index} onPress={(current) => radioOnPress(index, current)} isActive={index === activeIndex} />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {

  }
})
