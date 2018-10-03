import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {colors} from '../utils/colors'

export default class CompanyItem extends PureComponent {
  render() {
    const {onPress} = this.props
    return (
      <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <View style={styles.leftWrapper}>
          
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>泛微</Text>
          <View style={styles.advisory}>
            <View style={styles.auditionWrapper}>
              <Text style={styles.auditionText}>面试评分</Text>
            </View>
            <View style={styles.jobWrapper}>
              <Text style={styles.jobText}>在招职位</Text>
              <Text style={styles.jobText}>966</Text>
            </View>
          </View>
          <View style={styles.componeyInfo}>
            <Text style={styles.componeyInfoText}>上海</Text>
            <Text style={[styles.componeyInfoText, {marginHorizontal: 6}]}>|</Text>
            <Text style={styles.componeyInfoText}>2000人以上</Text>
            <Text style={[styles.componeyInfoText, {marginHorizontal: 6}]}>|</Text>
            <Text style={styles.componeyInfoText}>移动互联网</Text>
          </View>
          <View style={styles.noteWrapper}>
            {Array.from({length: 3}).map((item, index) => (
              <View style={styles.noteItem}>
                <Text style={styles.noteItemText}>技能培训</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'flex-start',
    marginBottom: 10,
    backgroundColor: colors.white
  },
  leftWrapper: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: colors.grey2,
    borderRadius: 10,
    marginRight: 10,
  },
  right: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  advisory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  auditionWrapper: {
    flexDirection: 'row',
  },
  auditionText: {
    fontSize: 12,
    color: colors.greyLight,
    fontWeight: '300'
  },
  jobWrapper: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  jobText: {
    fontSize: 12,
    color: colors.greyLight,
    fontWeight: '300',
    marginRight: 4
  },
  componeyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  componeyInfoText: {
    fontSize: 12,
    color: colors.greyLight,
    fontWeight: '300'
  },
  noteWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  noteItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.grey3,
    marginRight: 6,
    borderRadius: 4
  },
  noteItemText: {
    fontSize: 12,
    color: colors.greyLight,
    fontWeight: '400'
  }
})
