import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class SigninScreen extends PureComponent {
  render() {
    return (
      <View>
        <Text> SigninScreen </Text>
        <TouchableOpacity>
          <Text onPress={() => this.props.navigation.navigate('Home')}>跳转</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
