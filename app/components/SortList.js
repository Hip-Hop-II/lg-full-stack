import React, { PureComponent } from 'react'
import { Text, View, Modal, StyleSheet, TouchableOpacity, Picker} from 'react-native'
import RadioButtonGroup from './buttons/RadioButtonGroup'
import {colors} from '../utils/colors'
import {SafeAreaView} from 'react-navigation'


const radioList = [
  {
    id: 1,
    title: '智能排序',
    value: 'intelligent'
  },
  {
    id: 2,
    title: '好评优先',
    value: 'praise'
  },
  {
    id: 3,
    title: '最近发布职位',
    value: 'new'
  }
]

export default class SortList extends PureComponent {
  state = {
    modalVisible: false,
    activeIndex: 0
  }
  onPress = () => {
    this.setState({
      modalVisible: true
    })
  }
  radioOnPress = (index) => {
    this.setState({activeIndex: index})
  }
  cancelOnPress = () => {
    this.setState({
      modalVisible: false
    })
  }
  confirmOnPress = () => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
    const {activeIndex} = this.state
    return (
      <View style={styles.wrapper}>
        <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        transparent={true}
        >
          <View style={styles.content}>
            <View style={styles.action}>
              <TouchableOpacity onPress={this.cancelOnPress}>
                <Text style={{color: colors.greyLight}}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.confirmOnPress}>
                <Text style={{color: colors.greenPrimary}}>确认</Text>
              </TouchableOpacity>
            </View>
            <RadioButtonGroup 
            radioList={radioList}
            radioOnPress={this.radioOnPress}
            activeIndex={activeIndex}
            />
          </View>
        </Modal>
        <TouchableOpacity onPress={this.onPress}>
          <Text>按钮</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey5,
  }
})