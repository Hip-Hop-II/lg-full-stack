import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import ListColumn from '../../components/ListColumn'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../../utils/colors'

const AccountList = [
  {
    title: '我的账号',
    link: 'MyAccount'
  },
  {
    title: '我的账号',
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

  renderAccount = () => {
    return AccountList.map((item, index) => {
      return (
        <ListColumn key={index} link >
          <ListColumn.Left>
            <View style={styles.columnLeft}>
              <View style={{flex: .14}}>
                {item.icon}
              </View>
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

  }

  renderAbout = () => {

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
  }
})
