/**
 * 城市的列表
 */
import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import {CITYLIST} from '../data/cityList'
import {colors} from '../utils/colors'

export default class CityList extends PureComponent {
  state = {
    activePovinceIndex: 0
  }
  provinceOnPress = (index, item) => {
    if (index !== this.state.activePovinceIndex) {
      this.setState({
        activePovinceIndex: index
      })
    }
  }
  cityOnPress = item => {
    this.props.cityOnPress(item)
  }
  renderProvince = () => {
    const {activePovinceIndex} = this.state
    return CITYLIST.map((item, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => this.provinceOnPress(index, item)} >
          <View style={styles.provinceItem}>
            <Text 
            style={[styles.provinceItemText, {
              color: activePovinceIndex === index ? colors.greyDark : colors.greyLight,
              fontWeight: activePovinceIndex === index ? 'bold' : '400',
            }]}>
            {item.province}
            </Text>
          </View>
        </TouchableOpacity>
      )
    })
  }
  renderCity = () => {
    const {activePovinceIndex} = this.state
    return CITYLIST[activePovinceIndex].children.map((item, index) => (
      <TouchableOpacity key={index} onPress={() => this.cityOnPress(item)}>
        <View style={styles.cityItem}>
          <Text style={styles.cityItemText}>{item.city}</Text>
        </View>
      </TouchableOpacity>
    ))
  }
  render() {
    const {style} = this.props
    return (
      <View style={[styles.wrapper, style]}>
        <View style={styles.provinceWrapper}>
          <ScrollView contentContainerStyle={{paddingTop: 15}}
          showsVerticalScrollIndicator={false}
          >
            {this.renderProvince()}
          </ScrollView>
        </View>
        <View style={styles.cityWrapper}>
          <ScrollView>
            <View style={styles.cityContent}>
             {this.renderCity()}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.grey4,
    flexDirection: 'row'
  },
  provinceWrapper: {
  },
  provinceItem: {
    paddingHorizontal: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  provinceItemText: {
    fontSize: 16
  },
  cityWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cityContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  cityItem: {
    width: 76,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderColor: colors.greyLight,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 10
  },
  cityItemText: {
    color: colors.greyLight,
    fontSize: 12
  }
})
