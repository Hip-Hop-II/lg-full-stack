import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import {colors} from '../utils/colors'

const categories = [
  {
    title: '热门职位',
    icon: <MaterialCommunityIcons name="fire" size={24} color={colors.orange1} />
  },
  {
    title: '拉勾猎头',
    icon: <MaterialCommunityIcons name="crown" size={24} color={colors.yellow1} />
  },
  {
    title: '高薪优选',
    icon: <MaterialCommunityIcons name="blur" size={24} color={colors.yellow2} />
  },
]

export default class CategoriesTitleList extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
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
