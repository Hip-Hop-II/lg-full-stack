import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {colors} from '../utils/colors'

export default class CateTabs extends PureComponent {
  render() {
    const {tabs, activeIndex, onPress} = this.props
    return (
      <View style={styles.wrapper}>
        {tabs.map((item, index) => (
          <TouchableOpacity  key={index} 
          onPress={() => onPress(index, item)}
          style={[styles.item, activeIndex === index ? styles.activeItem : styles.defaultItem]} >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%'
  },
  item: {
    marginHorizontal: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greenPrimary
  },
  defaultItem: {
  },
  text: {
    fontSize: 16,
  }
})
