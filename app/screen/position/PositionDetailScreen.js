import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import {colors} from '../../utils/colors'
import {Ionicons} from '@expo/vector-icons'
import BackButton from '../../container/BackButton'
import HeaderButton from '../../components/buttons/HeaderButton'
import PositionCard from '../../components/PositionCard'

export default class PositionDetailScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: '职位详情',
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: <HeaderButton right>
      <Ionicons name="ios-information-circle-outline" size={30} color={colors.greyDark} />
    </HeaderButton>
  })
  state = {
    activePovinceIndex: 0
  }
  render() {
    const {activePovinceIndex} = this.state
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.content}>
            <PositionCard />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.grey2
  },
  content: {
    marginTop: 10,
  }
})
