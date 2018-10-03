import React, { PureComponent } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'
import DropDown from '../components/DropDown'
import CityList from '../components/CityList'
import CompanyItem from '../components/CompanyItem'


export default class HomeScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: '公司',
    headerStyle: {
      borderBottomWidth: 0
    }
  })
  state = {
    isCityOpen: false,
    isFilterOpen: false,
    isSortOpen: false,
    status: -1,
    activeCity: '上海',
  }
  chooseOnPress = (status) => {
    if (status === 0) {
      this.setState({
        isCityOpen: !this.state.isCityOpen,
        isFilterOpen: false,
        isSortOpen: false,
        status: this.state.status === 0 ? -1 : status
      })
    } else if (status === 1) {
      this.setState({
        isCityOpen: false,
        isFilterOpen: !this.state.isFilterOpen,
        isSortOpen: false,
        status: this.state.status === 1 ? -1 : status
      })
    } else if (status === 2) {
      this.setState({
        isCityOpen: false,
        isFilterOpen: false,
        isSortOpen: !this.state.isSortOpen,
        status: this.state.status === 2 ? -1 : status
      })
    }
  }

  cityOnPress = (item) => {
    this.setState({
      activeCity: item.city,
      isCityOpen: false,
      status: -1
    })
  }

  /**
   * 根据不同状态渲染不同模块
   * 
   */
  renderModule = () => {
    const {status, activeCity} = this.state
    if (status === 0) {
      return (
        <CityList activeCity={activeCity} cityOnPress={this.cityOnPress} />
      )
    } else {
      return (
        <ScrollView contentContainerStyle={{paddingBottom: 10, backgroundColor: colors.grey2}}>
          {Array.from({length: 10}).map((item, index) => (
            <CompanyItem key={index + 1} />
          ))}
        </ScrollView>
      )
    }
  }

  render() {
    const {activeCity} = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.chooseWrapper}>
          <DropDown text={activeCity} isOpen={this.state.isCityOpen} onPress={() => this.chooseOnPress(0)} />
          <DropDown text="筛选" isOpen={this.state.isFilterOpen} onPress={() => this.chooseOnPress(1)} />
          <DropDown text="排序" isOpen={this.state.isSortOpen} onPress={() => this.chooseOnPress(2)} />
        </View>
          {this.renderModule()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white
  },
  chooseWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey5,
    paddingVertical: 10,
  }
})

