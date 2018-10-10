import React, { PureComponent } from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-navigation"
import ProfileItem from "../container/ProfileItem"
import ProfileButtonList from '../container/ProfileButtonList'
import ListColumn from '../components/ListColumn'
import { colors } from "../utils/colors"
import {User} from '../api'

const baseStyle = {
  size: 26,
  color: colors.greyLight
}

const LIST = [
  {
    title: '求职意向',
    icon: <Ionicons name="ios-cube-outline" {...baseStyle} />,
    subTitle: '随便看看',
    link: 'Career'
  },
  {
    title: '隐私设置',
    icon: <Ionicons name="ios-lock-outline" {...baseStyle} />,
    link: 'Privacy'
  },
  {
    title: '默认快递',
    icon: <Ionicons name="ios-mail-outline" {...baseStyle} />,
    link: 'MyExpress'
  },
  {
    title: '收藏',
    icon: <Ionicons name="ios-heart-outline" {...baseStyle} />,
    link: 'MyCollection'
  },
  {
    title: '设置',
    icon: <Ionicons name="ios-settings-outline" {...baseStyle} />,
    link: 'Settings'
  },
  {
    title: '反馈与帮助',
    icon: <Ionicons name="ios-information-circle-outline" {...baseStyle} />,
    link: 'Myhelp'
  }
]

export default class HomeScreen extends PureComponent {
  static navigationOptions = {
    tabBarLabel: "消息",
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-contact-outline" size={26} color={tintColor} />
    )
  }
  state = {
    userInfo: {}
  }
  async componentDidMount () {
    try {
      const data = await User.getUserInfo()
      if (data.status === 200) {
        this.setState({
          userInfo: data.data
        })
      }
    } catch (error) {
      throw error
    }
  }
  profileOnPress = () => {

  }
  renderColumnList = () => {
    return LIST.map((item, index) => {
      return (
        <ListColumn key={index} link onPress={() => this.props.navigation.navigate(item.link)} >
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
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.profileItem}>
            <ProfileItem onPress={this.profileOnPress} {...this.state.userInfo} />
          </View>
          <View style={styles.profileButtons}>
            <ProfileButtonList navigation={this.props.navigation} />
          </View>
          <View style={styles.line}></View>
          <View style={styles.profileContent}>
            {this.renderColumnList()}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  profileItem: {
    marginTop: 50
  },
  profileButtons: {
    marginVertical: 20
  },
  line: {
    height: 10,
    backgroundColor: colors.grey4
  },
  profileContent: {
    paddingVertical: 15,
    backgroundColor: colors.white,
    shadowColor: colors.grey1,
    shadowOffset: {
      width: .1,
      height: .2
    },
    shadowOpacity: .4
  },
  columnLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
