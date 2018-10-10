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
            <Text style={styles.headerLeftTitle}>{newProps.title.substr(0, 4)}<Text></Text></Text>
            <View style={styles.hederLeftNoteWrapper}>
              <Text style={styles.headerLeftNote}>{newProps.city}</Text>
              <Text style={[styles.headerLeftNote, {marginHorizontal: 4}]}>|</Text>
              <Text style={styles.headerLeftNote}>{newProps.address}</Text>
              <Text style={[styles.headerLeftNote, {marginHorizontal: 4}]}>|</Text>
              <Text style={styles.headerLeftNote}>{newProps.experience}</Text>
              <Text style={[styles.headerLeftNote, {marginHorizontal: 4}]}>|</Text>
              <Text style={styles.headerLeftNote}>{newProps.education}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerRightSalary}>{newProps.salary}</Text>
            <Text style={styles.headerRightTime}>{dayjs(newProps.createdAt).format('MM月DD日')}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyItem}>
            <Text style={styles.bodyItemText}>WEB前端</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerMedia}>
            <Image style={{width: '100%', height: '100%'}} source={{uri: newProps.companyId.avatar}} />
          </View>
          <View style={styles.footerRight}>
            <Text style={{color: colors.greyDark, fontWeight: '700'}}>
              {newProps.companyId.name}
            </Text>
            <View style={styles.footerRightNoteWrapper}>
              <Text style={{color: colors.greyLight, fontSize: 12}}>{newProps.companyId.financing}</Text>
              <Text style={{color: colors.greyLight, fontSize: 12, marginHorizontal: 4}}>|</Text>
              <Text style={{color: colors.greyLight, fontSize: 12}}>{newProps.companyId.peoples}</Text>
              <Text style={{color: colors.greyLight, fontSize: 12, marginHorizontal: 4}}>|</Text>
              <Text style={{color: colors.greyLight, fontSize: 12}}></Text>
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
    marginTop: 6
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
    marginBottom: 20
  },
  bodyItem: {
    width: 80,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: colors.grey4,
    borderRadius: 4,
    
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
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey1,
    borderRadius: 10,
    marginRight: 10
  },
  footerRight: {
    flex: 1
  },
  footerRightNoteWrapper: {
    flexDirection: 'row',
    marginTop: 8
  }
})
