import React, { PureComponent, Fragment } from 'react'
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Input from '../components/Input'
import CategoriesTitleList from '../container/CategoriesTitleList'
import CateTabs from '../components/CateTabs'
import PositionItem from '../components/PositionItem'

import { colors } from '../utils/colors'
import { images } from '../utils/images'

const cateTabs = [
  {
    title: '推荐'
  },
  {
    title: '最新'
  }
]

const positionList = Array.from({length: 10}).map((item, index) => {
  return {
    id: index++,
    position: '前端开发工程师',
    position_type: 'React方向',
    salary: '15-30k',
    city: '上海',
    address: '虹口足球场',
    experience: '1-3年',
    education: '大专',
    release_time: '09月18日',
    notes: [{
      title: 'WEB前端'
    }],
    company_name: '上海寰溪科技',
    company_scope: '未融资',
    conpany_person: '150-500人',
    company_services: '移动互联网,数据服务'
  }
})

export default class HomeScreen extends PureComponent {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-home-outline" size={26} color={tintColor} />
    )
  }
  state = {
    cateActiveIndex: 0,
    refreshing: false
  }
  itemOnPress = (item) => {
    this.props.navigation.navigate('PositionDetail', {id: item.id})
  }
  tabsOnPress = (cateActiveIndex, item) => {
    this.setState({cateActiveIndex})
  }
  renderPositionItem = ({item}) => (
    <PositionItem {...item} onPress={this.itemOnPress} />
  )
  keyExtractor = item => String(item.id)
  renderHeader = () => {
    const {cateActiveIndex} = this.state
    return (
      <Fragment>
      <View style={styles.carouselWrapper}>
          <Input
            style={styles.inputWrapper}
            placeholder="趣头条"
          >
            <Input.Icon>
              <Ionicons name="ios-search-outline" size={20} color={colors.grey1} />
            </Input.Icon>
          </Input>
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

  onRefresh = () => {
    this.setState({refreshing: true})
    setTimeout(() => {
      this.setState({refreshing: false})
    }, 1000)
  }
  
  render() {
    const {cateActiveIndex, refreshing} = this.state
    return (
      <View style={styles.wrapper}>
          <FlatList 
            data={positionList}
            renderItem={this.renderPositionItem}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            onRefresh={this.onRefresh}
            refreshing={refreshing}
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
    backgroundColor: "red",
    position: "relative",
    alignItems: "center"
  },
  inputWrapper: {
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
    height: 60,
    marginBottom: 2
  },
  tabsTitle: {
    fontSize: 16
  }
});
