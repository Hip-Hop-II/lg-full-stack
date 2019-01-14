import React, { PureComponent } from 'react'
import { View, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native'

export default class AuthLoadingScreen extends PureComponent {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }
  _bootstrapAsync = async() => {
    try {
      const authToken = await AsyncStorage.getItem('Authorization')
      if (authToken) {
        this.props.navigation.navigate('Main')
      } else {
        this.props.navigation.navigate('Auth')
      }
    } catch (error) {
      throw error
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
