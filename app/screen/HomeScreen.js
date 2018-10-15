import React, { PureComponent, Fragment } from 'react'
import { Text, View, StyleSheet, Image, FlatList, ActivityIndicator, ImageBackground, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import SearchInput from '../components/SearchInput'
import CategoriesTitleList from '../container/CategoriesTitleList'
import CateTabs from '../components/CateTabs'
import PositionItem from '../components/PositionItem'

import { colors } from '../utils/colors'
import { images } from '../utils/images'

import {Position} from '../api'

const cateTabs = [
  {
    title: '推荐',
    value: ''
  },
  {
    title: '最新',
    value: 'createTime'
  }
]

const WIDTH = Dimensions.get('window').width

export default class HomeScreen extends PureComponent {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-home-outline" size={26} color={tintColor} />
    )
  }
  state = {
    positionList: [],
    cateActiveIndex: 0,
    refreshing: false,
    loading: false,
    sort: ''
  }
  currentPage = 1

  fetchList = async (params) => {
    try {
      const {sort} = this.state
      this.setState({loading: true})
      const data = await Position.getList({type: 'Web', currentPage: this.currentPage, ...params})
      if (data.status === 200) {
        setTimeout(() => {
          this.setState({
            positionList: this.currentPage === 1 ? data.list : [...this.state.positionList, ...data.list],
            loading: false,
            refreshing: false
          })
        }, 1000)
      }
    } catch (error) {
      throw error
    }
  }

  itemOnPress = (item) => {
    this.props.navigation.navigate('PositionDetail', {id: item.id})
  }
  tabsOnPress = (cateActiveIndex, item) => {
    this.setState({cateActiveIndex, sort: item.value, positionList: []})
    this.fetchList({sort: item.value})
  }
  renderPositionItem = ({item}) => (
    <PositionItem {...item} onPress={this.itemOnPress} />
  )
  keyExtractor = item => String(item._id)
  renderHeader = () => {
    const {cateActiveIndex} = this.state
    return (
      <Fragment>
      <View style={styles.carouselWrapper}>
        <ImageBackground source={images.banner_img} style={{width: WIDTH, height: '100%'}} />
          <SearchInput
            style={styles.SearchInputWrapper}
            placeholder="趣头条"
            onFocus={() => this.props.navigation.navigate('Search')}
          >
            <SearchInput.Icon>
              <Ionicons name="ios-search-outline" size={20} color={colors.grey1} />
            </SearchInput.Icon>
          </SearchInput>
        </View>
          <View style={styles.maqueeWrapper}>
            <Image source={images.tou_logo} style={styles.maqueeImage} />
            <View style={styles.maqueeContent}>

            </View>
          </View>
          <View style={styles.categoriesWrapper}>
            <CategoriesTitleList />
          </View>
          <View style={styles.tabsWrapper}>
            <Text style={styles.tabsTitle}>Web前端</Text>
            <CateTabs tabs={cateTabs} 
            onPress={this.tabsOnPress}
            activeIndex={cateActiveIndex}  />
          </View>
      </Fragment>
    )
  }

  componentDidMount () {
    const {sort} = this.state
    this.fetchList()  
  }

  onRefresh = () => {
    const {sort} = this.state
    this.currentPage = 1
    this.setState({refreshing: true}, () => {
      this.fetchList()
    })
  }

  handleLoadMore = () => {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.currentPage++
      this.fetchList()
      this.onEndReachedCalledDuringMomentum = true
    }
  }
  renderFooter = () => {
    const {loading} = this.state
    if (loading) {
      return (
        <View style={{paddingVertical: 15}}>
          <ActivityIndicator animating />
        </View>
      )
    }
    return null
  }
  
  render() {
    const {refreshing, positionList} = this.state
    return (
      <View style={styles.wrapper}>
          <FlatList
          style={{flex: 1}} 
            data={positionList}
            renderItem={this.renderPositionItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            onRefresh={this.onRefresh}
            refreshing={refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={.01}
            ListFooterComponent={this.renderFooter}
            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false}}
          />
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.grey2
  },
  carouselWrapper: {
    height: 314,
    position: "relative",
    alignItems: "center"
  },
  SearchInputWrapper: {
    position: "absolute",
    width: "90%",
    top: 45,
    height: 36
  },
  maqueeWrapper: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.white
  },
  maqueeImage: {
    width: 117 / 2,
    height: 117 / 2,
    marginRight: 20
  },
  maqueeContent: {
    flex: 1,
    backgroundColor: "blue"
  },
  categoriesWrapper: {
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.white
  },
  tabsWrapper: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50,
    marginBottom: 2
  },
  tabsTitle: {
    fontSize: 16
  }
});
