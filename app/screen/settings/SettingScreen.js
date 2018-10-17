import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView, AsyncStorage } from 'react-native'
import ListColumn from '../../components/ListColumn'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../../utils/colors'
import {NavigationActions} from 'react-navigation'
import HeaderButton from '../../components/buttons/HeaderButton'
import Button from '../../components/buttons/Button'

const AccountList = [
  {
    title: '我的账号',
    link: 'MyAccount'
  },
  {
    title: '修改密码',
    link: 'MyAccount'
  }
]

const SettingList = [
  {
    title: '打招呼设置',
    link: 'MyGreet',
  },
  {
    title: '打招呼设置',
    link: 'MyGreet',
  },
  {
    title: '清除缓存',
    link: 'MyStorage',
  },
  {
    title: '隐藏日历',
    link: 'MyCalendar',
    right: true
  },
]

const AboutList = [
  {
    title: '关于拉勾',
    subTitle: 'IPhone v7.0.3',
    link: 'MyAbout'
  },
  {
    title: '用户协议',
    link: 'MyProtocol'
  },
  {
    title: '给我们评分',
    link: 'MyAbout'
  }
]

export default class SettingScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    headerLeft: <HeaderButton left onPress={() => navigation.goBack(null)}>
      <Ionicons name="ios-arrow-back-outline" size={30} color={colors.greyLight} />
    </HeaderButton>,
    title: '设置'
  })
  renderAccount = () => {
    return AccountList.map((item, index) => {
      return (
        <ListColumn key={index} link border  onPress={() => this.props.navigation.navigate(item.link)}>
          <ListColumn.Left>
            <View style={styles.columnLeft}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16}}>{item.title}</Text>
              </View>
            </View>
          </ListColumn.Left>
          <ListColumn.Right>
            <View>
              <Ionicons name="ios-arrow-forward-outline" size={14} color={colors.greyLight} />
            </View>
          </ListColumn.Right>
        </ListColumn>
      )
    })
  }

  renderSetting = () => {
    return SettingList.map((item, index) => {
      return (
        <ListColumn key={index} link border >
          <ListColumn.Left>
            <View style={styles.columnLeft}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16}}>{item.title}</Text>
              </View>
            </View>
          </ListColumn.Left>
          <ListColumn.Right>
            <View>
              <Ionicons name="ios-arrow-forward-outline" size={14} color={colors.greyLight} />
            </View>
          </ListColumn.Right>
        </ListColumn>
      )
    })
  }

  renderAbout = () => {
    return AboutList.map((item, index) => {
      return (
        <ListColumn key={index} link border >
          <ListColumn.Left>
            <View style={styles.columnLeft}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16}}>{item.title}</Text>
              </View>
            </View>
          </ListColumn.Left>
          <ListColumn.Right>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {item.subTitle && <Text style={{marginRight: 6}}>{item.subTitle}</Text>}
              <Ionicons name="ios-arrow-forward-outline" size={14} color={colors.greyLight} />
            </View>
          </ListColumn.Right>
        </ListColumn>
      )
    })
  }

  onPress = async () => {
    try {
      await AsyncStorage.removeItem('Authorization')
      this.props.navigation.dispatch(NavigationActions.navigate({routeName: 'Auth'}))
    } catch (error) {
      throw error
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.item}>
            {this.renderAccount()}
          </View>
          <View style={styles.item}>
            {this.renderSetting()}
          </View>
          <View style={styles.item}>
            {this.renderAbout()}
          </View>
          <Button style={{backgroundColor: colors.white, height: 50}} onPress={this.onPress}>
            <Text style={{color: colors.danger, fontSize: 16}}>退出当前账号</Text>
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  columnLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    marginBottom: 15
  }
})
