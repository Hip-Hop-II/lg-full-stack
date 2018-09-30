import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class HomeScreen extends PureComponent {
  static navigationOptions = {
    tabBarLabel: '消息',
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-contact-outline" size={26} color={tintColor} />
    )
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
