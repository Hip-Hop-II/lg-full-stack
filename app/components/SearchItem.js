import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { colors } from '../utils/colors'


export default ({positionName, _id, onPress}) => (
  <TouchableOpacity onPress={() => onPress(_id, positionName)}>
    <View style={styles.wrapper}>
      <Ionicons name="ios-search" size={22} color={colors.grey1} />
      <Text style={styles.text}>{positionName}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderBottomColor: colors.grey1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    color: colors.greyLight,
    fontWeight: '300',
  }
})
