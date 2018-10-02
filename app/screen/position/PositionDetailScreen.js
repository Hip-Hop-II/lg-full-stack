import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import {colors} from '../../utils/colors'
import {Ionicons} from '@expo/vector-icons'
import BackButton from '../../container/BackButton'
import HeaderButton from '../../components/buttons/HeaderButton'

export default class PositionDetailScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: '职位详情',
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: <HeaderButton right>
      <Ionicons name="ios-information-circle-outline" size={30} color={colors.greyDark} />
    </HeaderButton>
  })
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
