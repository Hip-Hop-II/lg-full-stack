import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import {colors} from '../../utils/colors'
import {Ionicons} from '@expo/vector-icons'
import BackButton from '../../container/BackButton'
import HeaderButton from '../../components/buttons/HeaderButton'
import PositionCard from '../../components/PositionCard'
import IconButton from '../../components/buttons/IconButton'
import Button from '../../components/buttons/Button'
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default class PositionDetailScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: '职位详情',
    headerLeft: <BackButton navigation={navigation} />,
    headerRight: <HeaderButton right>
      <Ionicons name="ios-information-circle-outline" size={30} color={colors.greyDark} />
    </HeaderButton>
  })
  state = {
    activePovinceIndex: 0
  }
  render() {
    const {activePovinceIndex} = this.state
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.content}>
            <PositionCard />
            <View style={styles.positionWrapper}>
              <View style={styles.title}>
                <Text style={styles.titleText}>职位发布者</Text>
                <View style={styles.headerLine}></View>
              </View>
              <View>

              </View>
            </View>
            <View style={styles.descriptionWrapper}>
              <View style={styles.title}>
                <Text style={styles.titleText}>职位描述</Text>
                <View style={styles.headerLine}></View>
              </View>
              <View style={styles.noteWrapper}>

              </View>
              <View style={styles.positionTemptation}>
                <Text style={styles.positionTemptationText}>职位诱惑：</Text>
                <Text style={styles.positionTemptationText}>福利好，假期多，年终奖金，补充医疗金</Text>
              </View>
              <View style={styles.positionDuties}>
                <Text style={styles.positionDutiesText}>岗位职责</Text>
                <View style={styles.positionDutiesWrapper}>
                  <Text style={styles.positionDutiesText}>1、负责EAP团队项目前端业务开发</Text>
                  <Text style={styles.positionDutiesText}>2、负责业务核心模块代码编写</Text>
                  <Text style={styles.positionDutiesText}>3、组织技术攻关，解决技术难题</Text>
                  <Text style={styles.positionDutiesText}>4、维护前端应用并优化用户体验及可用性</Text>
                </View>
              </View>
              <View style={styles.positionDuties}>
                <Text style={styles.positionDutiesText}>任职要求</Text>
                <View style={styles.positionDutiesWrapper}>
                  <Text style={styles.positionDutiesText}>1、负责EAP团队项目前端业务开发</Text>
                  <Text style={styles.positionDutiesText}>2、负责业务核心模块代码编写</Text>
                  <Text style={styles.positionDutiesText}>3、组织技术攻关，解决技术难题</Text>
                  <Text style={styles.positionDutiesText}>4、维护前端应用并优化用户体验及可用性</Text>
                </View>
              </View>
            </View>
            <View style={styles.companyWrapper}>
            <View style={styles.title}>
                <Text style={styles.titleText}>公司信息</Text>
                <View style={styles.headerLine}></View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.iconButtonContent}>
            <IconButton style={styles.iconButtonWrapper}>
              <Ionicons name="ios-heart-outline" size={30} />
              <Text style={{marginTop: 3, color: colors.greyLight}}>收藏</Text>
            </IconButton>
            <IconButton style={styles.iconButtonWrapper}>
              <Ionicons name="ios-share-outline" size={30} />
              <Text style={{marginTop: 3, color: colors.greyLight}}>分享</Text>
            </IconButton>
          </View>
          <View style={styles.buttonWrapper}>
              <TouchableOpacity style={[styles.buttonContent, {backgroundColor: colors.greenLighter, marginRight: 6}]}>
                <Text style={{color: colors.greenPrimary, fontSize: 16}}>发送简历</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContent, {backgroundColor: colors.greenPrimary}]}>
                <Text style={{color: colors.white, fontSize: 16}}>和TA聊聊</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.grey2,
    paddingBottom: 96
  },
  content: {
    marginTop: 10,
  },
  positionWrapper: {
    paddingHorizontal: 20,
    marginVertical: 40
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: 20,
  },
  headerLine: {
    flex: 1,
    marginLeft: 30,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey5
  },
  descriptionWrapper: {
    paddingHorizontal: 20
  },
  positionTemptation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  positionTemptationText: {
    color: colors.greyLight
  },
  positionDuties: {
    marginVertical: 10
  },
  positionDutiesText: {
    marginVertical: 4,
    color: colors.greyLight
  },
  companyWrapper: {
    marginVertical: 40,
    paddingHorizontal: 20
  },
  iconButtonWrapper: {
    alignItems: 'center',
    marginRight: 20
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    ...ifIphoneX({
      paddingBottom: 30
    }, {paddingBottom: 15}),
    paddingTop: 15,
    backgroundColor: colors.white
  },
  iconButtonContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
  },
  buttonContent: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  }
})
