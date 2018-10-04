import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import {colors} from '../utils/colors'
import Button from './buttons/Button'
import {filterData} from '../data/filterData'

export default class FilterList extends PureComponent {

  setButtonStyle = (child) => {
    const {checkedList} = this.props
    console.log(checkedList)
    const index = this.getCheckedStatus(checkedList, child)
    if (index !== -1) {
      return {
        borderColor: colors.greenPrimary,
        backgroundColor: colors.greenLighter
      }
    } else {
      return {
        borderColor: colors.grey5,
        backgroundColor: colors.white
      }
    }
  }
  setTextStyle = (child) => {
    const {checkedList} = this.props
    const index = this.getCheckedStatus(checkedList, child)
    if (index !== -1) {
      return {
        color: colors.greenPrimary
      }
    } else {
      return {
        color: colors.greyLight
      }
    }
  }

  getCheckedStatus = (checkedList = [], child = {}) => {
    return checkedList.findIndex(checked => checked.id === child.id && checked.parentId === child.parentId)
  }

  render() {
    const {onPress, checkedList} = this.props
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 30,}} 
        showsVerticalScrollIndicator={false}
        >
          {filterData.map((item, index) => (
            <View style={styles.item} key={index}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.list}>
                {item.children.map((child, key) => (
                  <Button md style={[styles.button, this.setButtonStyle(child)]} key={key} onPress={() => onPress(child, key)}>
                    <Text style={[styles.buttonText, this.setTextStyle(child)]}>{child.title}</Text>
                  </Button>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button style={{height: 40, backgroundColor: colors.greenPrimary, borderWidth: 0, borderRadius: 2,}}>
            <Text style={{fontSize: 16, color: colors.white}}>确定</Text>
          </Button>
        </View>
        <Button>
          <Text></Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative'
  },
  item: {
    
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15
  },
  button: {
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold'
  },
  buttonText: {
    color: colors.greyLight,
    fontSize: 12,
    fontWeight: '300',
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 20
  }
})
