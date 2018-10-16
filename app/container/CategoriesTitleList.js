import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import {colors} from '../utils/colors'

const categories = [
  {
    title: '热门职位',
    icon: <MaterialCommunityIcons name="fire" size={24} color={colors.orange1} />,
    link: 'FireOrHigh',
    value: 'Fire'
  },
  {
    title: '拉勾猎头',
    icon: <MaterialCommunityIcons name="crown" size={24} color={colors.yellow1} />,
    link: 'FireOrHigh'
  },
  {
    title: '高薪优选',
    icon: <MaterialCommunityIcons name="blur" size={24} color={colors.yellow2} />,
    link: 'FireOrHigh',
    value: 'Salary'
  }
]

export default class CategoriesTitleList extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => this.props.navigation.navigate(item.link, {value: item.value, title: item.title})}>
            {item.icon}
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey3
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 10
  }
})
