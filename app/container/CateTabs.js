import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class CateTabs extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        {tabs.map((item, index) => (
          <TouchableOpacity onPress={onPress} key={index} >
            <Text>{item.title}</Text>
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
    alignItems: 'center'
  }
})
