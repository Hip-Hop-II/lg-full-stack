import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {colors} from '../utils/colors'

export default class CompanyItem extends PureComponent {
  render() {
    const {onPress, ...newProps} = this.props
    return (
      <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={{alignItems: 'flex-start'}}>
          <View style={styles.leftWrapper}>
            <Image source={{uri: `https://www.lgstatic.com/thumbnail_120x120/${newProps.companyLogo}`}} 
            style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{newProps.companyShortName}</Text>
          <View style={styles.advisory}>
            <View style={styles.auditionWrapper}>
              <Text style={styles.auditionText}>面试评分</Text>
            </View>
            <View style={styles.jobWrapper}>
              <Text style={styles.jobText}>在招职位</Text>
              <Text style={styles.jobText}>{newProps.positionNum}</Text>
            </View>
          </View>
          <View style={styles.componeyInfo}>
            <Text style={styles.componeyInfoText}>{newProps.city}</Text>
            <Text style={[styles.componeyInfoText, {marginHorizontal: 6}]}>|</Text>
            <Text style={styles.componeyInfoText}>{newProps.financeStage}</Text>
            <Text style={[styles.componeyInfoText, {marginHorizontal: 6}]}>|</Text>
            <Text style={styles.componeyInfoText}>{newProps.companySize}</Text>
            <Text style={[styles.componeyInfoText, {marginHorizontal: 6}]}>|</Text>
            <Text ellipsizeMode="tail" numberOfLines={1} style={[styles.componeyInfoText, {width: 90}]}>{newProps.industryField}</Text>
          </View>
          <View style={styles.noteWrapper}>
            {newProps.otherLabel.split(',').slice(0, 4).map((item, index) => (
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.noteItemText}>{item}</Text>
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
    width: 60,
    height: 60,
    marginRight: 10,
    alignSelf: 'flex-start'
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
    flexWrap: 'nowrap',
  },
  noteItem: {
  },
  noteItemText: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: colors.grey3,
    marginRight: 4,
    borderRadius: 4,
    fontSize: 12,
    color: colors.greyLight,
    fontWeight: '400'
  }
})
