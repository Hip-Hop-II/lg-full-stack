import React, { PureComponent } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'
import DropDown from '../components/DropDown'
import CityList from '../components/CityList'
import CompanyItem from '../components/CompanyItem'
import FilterList from '../components/FilterList'
import SortList from '../components/SortList'
import {Company} from '../api'
import {getLocationAsync} from '../api/Location'


export default class HomeScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: '公司',
    headerStyle: {
      borderBottomWidth: 0
    }
  })
  async componentWillMount () {
    try {
      const {city} = await getLocationAsync()
      console.log(city)
      this.setState({city: city})
    } catch (error) {
      throw error
    }
  }
  
  state = {
    isCityOpen: false,
    isFilterOpen: false,
    isSortOpen: false,
    status: -1,
    city: '上海',
    filterCheckedList: [
      {
        id: 1,
        title: '不限',
        value: 'all',
        parentId: 3
      }
    ]
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
      city: item.city,
      isCityOpen: false,
      status: -1
    })
  }

  // 获取数据
  fetchData = async () => {
    const {city, checkedList} = this.state
    try {
      const result = await Company.geCompanytList({city, checkedList})
    } catch (error) {
      
    }
  }

  /**
    * 筛选按钮
    * @param (item *) 选中的当前
    * @param (index *) 下标
    */
  filterOnPress = (item, index) => {
    const {filterCheckedList} = this.state
    const idx = filterCheckedList.findIndex(checked => checked.id === item.id && checked.parentId === item.parentId) 
    if (idx === -1) {
      this.setState({
        filterCheckedList: [...filterCheckedList, {...item}]
      })
    } else {
      this.setState({
        filterCheckedList: [...filterCheckedList.slice(0, index), ...filterCheckedList.slice(index + 1)]
      })
    }
  }

  /**
   * 根据不同状态渲染不同模块
   * 
   */
  renderModule = () => {
    const {status, city, filterCheckedList} = this.state
    if (status === 0) {
      return (
        <CityList activeCity={city} cityOnPress={this.cityOnPress} />
      )
    } else if (status === 1) {
      return (
        <FilterList checkedList={filterCheckedList} onPress={this.filterOnPress} />
      )
    } else if (status === 2) {
      return <SortList />
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
    const {city} = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.chooseWrapper}>
          <DropDown text={city} isOpen={this.state.isCityOpen} onPress={() => this.chooseOnPress(0)} />
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

