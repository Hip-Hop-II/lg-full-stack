import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import {colors} from '../../utils/colors'
import BackButton from '../../container/BackButton'

export default class PositionDetailScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: '职位详情',
    headerLeft: <BackButton navigation={navigation} />
  })
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
