import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import {images} from '../utils/images'
import {colors} from '../utils/colors'

export default class PositionCard extends PureComponent {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <View style={styles.headingLeft}>
            <View style={styles.department}>
              <Text style={{color: colors.greyLight, fontWeight: '300'}}>所属部门：</Text>
              <Text style={{color: colors.greyLight, fontWeight: '300'}}>EAP中心</Text>
            </View>
            <Text style={styles.positionName}>Web前端开发工程师</Text>
          </View>
          <View style={styles.headingRight}>
            <Image style={{width: '100%', height: '100%'}} source={images.tou_logo} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyTop}>
            <Text style={{color: colors.greyLight}}>3-5年</Text>
            <Text style={{color: colors.greyLight}}>/</Text>
            <Text style={{color: colors.greyLight}}>本科</Text>
            <Text style={{color: colors.greyLight}}>/</Text>
            <Text style={{color: colors.greyLight}}>全职</Text>
          </View>
          <Text style={styles.salayText}>15k-30k</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.location}>
            <Text style={styles.locationText}>上海-上海-徐汇区-田林</Text>
          </View>
          <Text style={styles.addressText}>宜山路700号C4幢1-2楼</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.grey2,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 6,
    shadowColor: colors.greyDark,
    shadowOffset: {
      width: 0.1,
      height: 0.1
    },
    shadowOpacity: .1,
    shadowRadius: 15,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingLeft: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  department: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  positionName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 6,
  },
  headingRight: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderColor: colors.grey5,
    borderWidth: StyleSheet.hairlineWidth,
  },
  body: {
    marginVertical: 20,
  },
  bodyTop: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  salayText: {
    fontSize: 16,
    color: colors.orange1,
    marginTop: 6,
  },
  footer: {
    borderTopColor: colors.grey5,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 10
  },
  location: {
    flexDirection: 'row'
  },
  locationText: {
    fontSize: 16,
    fontWeight: '300'
  },
  addressText: {
    marginTop: 4,
    fontWeight: '300',
    color: colors.greyLight
  }
})
