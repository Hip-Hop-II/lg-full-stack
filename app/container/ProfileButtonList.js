import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'

const baseStyle = {
  color: colors.greenPrimary,
  size: 30
}

const LIST = [
  {
    text: "附件简历",
    icon: <Ionicons name="ios-paper-outline" {...baseStyle} />,
    link: 'AttachResume'
  },
  {
    text: '我的投递',
    icon: <Ionicons name="ios-mail-outline" {...baseStyle} />,
    link: 'Delivery'
  },
  {
    text: '关注公司',
    icon: <Ionicons name="ios-heart-outline" {...baseStyle} />,
    link: 'CollectionCompany'
  },
  {
    text: "拉勾cc",
    icon: <Ionicons name="ios-headset-outline" {...baseStyle} />,
    link: 'lgCC'
  }
];

export default class ProfileButtonList extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        {LIST.map((item, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.item}>
              {item.icon}
              <Text style={{marginTop: 6, color: colors.greyLight, fontSize: 12}}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  item: {
    flex: 1,
    alignItems: 'center'
  }
})
