import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {colors} from '../utils/colors'
import dayjs from 'dayjs'

export default class PositionItem extends PureComponent {
  render() {
    const {onPress, ...newProps} = this.props
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onPress(this.props)}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.headerLeftTitle}>{newProps.positionName}<Text></Text></Text>
            <View style={styles.hederLeftNoteWrapper}>
              <Text style={styles.headerLeftNote}>{newProps.city}</Text>
              <Text style={[styles.headerLeftNote, {marginHorizontal: 4}]}>|</Text>
              <Text style={styles.headerLeftNote}>{newProps.district || ''}</Text>
              <Text style={[styles.headerLeftNote, {marginHorizontal: 4}]}>|</Text>
              <Text style={styles.headerLeftNote}>{newProps.workYear}</Text>
              <Text style={[styles.headerLeftNote, {marginHorizontal: 4}]}>|</Text>
              <Text style={styles.headerLeftNote}>{newProps.education}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerRightSalary}>{newProps.salary}</Text>
            <Text style={styles.headerRightTime}>{dayjs(newProps.createTime).format('MM月DD日')}</Text>
          </View>
        </View>
        <View style={styles.body}>
          {newProps.positionLables.length > 0 && newProps.positionLables.slice(0, 4).map((item, index) => (
            <View style={styles.bodyItem} key={index}>
              <Text style={styles.bodyItemText}>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <View style={styles.footerMedia}>
            <Image style={{width: '100%', height: '100%', borderRadius: 10}} source={{uri: `https://www.lgstatic.com/thumbnail_120x120/${newProps.companyLogo}`}} />
          </View>
          <View style={styles.footerRight}>
            <Text style={{color: colors.greyDark, fontWeight: '700'}}>
              {newProps.companyShortName}
            </Text>
            <View style={styles.footerRightNoteWrapper}>
              <Text style={{color: colors.greyLight, fontSize: 12}}>{newProps.financeStage}</Text>
              <Text style={{color: colors.greyLight, fontSize: 12, marginHorizontal: 4}}>|</Text>
              <Text style={{color: colors.greyLight, fontSize: 12}}>{newProps.companySize}</Text>
              <Text style={{color: colors.greyLight, fontSize: 12, marginHorizontal: 4}}>|</Text>
              <Text ellipsizeMode="tail" numberOfLines={1} style={{color: colors.greyLight, fontSize: 12, width: 120}}>{newProps.positionLables.join(',')}</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: colors.white,
    marginBottom: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    flex: 1
  },
  headerLeftTitle: {
    fontSize: 18,
    color: colors.greyDark,
    fontWeight: 'bold'
  },
  hederLeftNoteWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    paddingRight: 25
  },
  headerLeftNote: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.greyLight
  },
  headerRight: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  headerRightSalary: {
    color: colors.orange2
  },
  headerRightTime: {
    color: colors.greyLight,
    marginTop: 6
  },
  body: {
    marginTop: 15,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  bodyItem: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: colors.grey4,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
    
  },
  bodyItemText: {
    color: colors.greyLight
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerMedia: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  footerRight: {
    flex: 1
  },
  footerRightNoteWrapper: {
    flexDirection: 'row',
    marginTop: 8,
    paddingRight: 10,
    alignItems: 'center'
  }
})
