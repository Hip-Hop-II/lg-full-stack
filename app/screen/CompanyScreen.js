import React, { PureComponent } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
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
    companyList: [],
    isCityOpen: false,
    isFilterOpen: false,
    isSortOpen: false,
    status: -1,
    loading: false,
    city: '上海',
    currentPage: 1,
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

  parseFetchParams = () => {
    const {filterCheckedList, city} = this.state
    let [financeStage, companySize, industryField, ...rest] = [filterCheckedList.filter(item => item.parentId === 1), filterCheckedList.filter(item => item.parentId === 2), 
      filterCheckedList.filter(item => item.parentId === 3 && item.value !== 'all')]
    return {
      city,
      financeStage,
      companySize,
      industryField
    }
  }


  /**
   * 计算选中的 筛选项
   * 
   * @param(list *) 所有选中的筛选项
   * @param(current *) 当前选中的筛选项
   */
  
  calcCheckedList (list=[], current={}) {
    const allFieldIndex = list.findIndex(item => item.parentId === 3 && item.value === 'all')
    const checkedIndex = list.findIndex(item => item.id === current.id && item.parentId === current.parentId)
    if (checkedIndex !== -1) {
      return [...list.slice(0, checkedIndex), ...list.slice(checkedIndex + 1)]
    } else {
      if (allFieldIndex !== -1 && current.parentId === 3 && current.value !== 'all') {
        return [...list.filter(item => item.value !== 'all'), {...current}]
      } else if (current.value === 'all') {
        return [...list.filter(item => item.parentId !== 3), {...current}]
      } else {
        return [...list, {...current}]
      }
    }
  }

  /**
    * 筛选按钮
    * @param (item *) 选中的当前
    * @param (index *) 下标
    */
  filterOnPress = (item, index) => {
    const filterCheckedList = this.calcCheckedList(this.state.filterCheckedList, item)
    this.setState({
      filterCheckedList
    })
    // const {filterCheckedList} = this.state
    // const idx = filterCheckedList.findIndex(checked => checked.id === item.id && checked.parentId === item.parentId) 
    // if (idx === -1) {
    //   this.setState({
    //     filterCheckedList: [...filterCheckedList, {...item}]
    //   })
    // } else {
    //   this.setState({
    //     filterCheckedList: [...filterCheckedList.slice(0, index), ...filterCheckedList.slice(index + 1)]
    //   })
    // }
  }
  submitOnPress = () => {
    this.setState({
      isCityOpen: false,
      isFilterOpen: !this.state.isFilterOpen,
      isSortOpen: false,
      currentPage: 1,
      status: this.state.status === 1 ? -1 : status
    }, () => {
      this.fetchData()
    })
  }

  // 获取数据
  fetchData = async () => {
    try {
      const {currentPage} = this.state
      const params = this.parseFetchParams()
      this.setState({loading: true})
      const result = await Company.geCompanytList({currentPage, ...params})
      if (result.status === 200) {
        setTimeout(() => {
          this.setState({
            companyList: currentPage === 1 ? result.list : [...this.state.companyList, ...result.list], 
            loading: false
          })
        }, 1000)
      }
    } catch (error) {
      throw error
    }
  }

  renderCompanyItem = ({item}) => (
    <CompanyItem {...item} />
  )
  keyExtractor = item => String(item._id)

  componentDidMount() {
    this.fetchData()
  }

  renderFooter = () => {
    const {loading} = this.state
    if (loading) {
      return (
        <View style={{paddingVertical: 15}}>
          <ActivityIndicator animating  />
        </View>
      )
    }
    return null
  }
  handleLoadMore = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.setState({
        currentPage: this.state.currentPage + 1
      }, () => {
        this.fetchData()
        this.onEndReachedCalledDuringMomentum = true
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
        <FilterList checkedList={filterCheckedList} onPress={this.filterOnPress} submitOnPress={this.submitOnPress} />
      )
    } else if (status === 2) {
      return <SortList />
    } else {
      return (
        <FlatList
        style={{flex: 1}} 
        data={this.state.companyList}
        renderItem={this.renderCompanyItem}
        keyExtractor={this.keyExtractor}
        ListFooterComponent={this.renderFooter}
        onEndReachedThreshold={0.01}
        onEndReached={this.handleLoadMore}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false}}
        /> 
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

