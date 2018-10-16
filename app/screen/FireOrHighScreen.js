import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, Animated } from 'react-native'
import PositionItem from '../components/PositionItem'
import {Position} from '../api'
import {connect} from 'react-redux'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'
import HeaderButton from '../components/buttons/HeaderButton'

const header_max_height = 120
const header_min_height = 70
const profile_image_max_height = 80
const profile_image_min_height = 40


class FireOrHighScreen extends PureComponent {
  static navigationOptions = {
    header: null
  }
  state = {
    positionList: [],
    currentPage: 1,
    scrollY: new Animated.Value(0)
  }

  getFieldByType = () => {
    const type = this.props.navigation.getParam('value')
    if (type === 'Salary') {
      return {
        salary: type
      }
    } else {
      return {}
    }
  }

  fetchData = async () => {
    try {
      const {currentPage} = this.state
      const fileds = this.getFieldByType()
      const result = await Position.getList({city: '上海', currentPage})
      if (result.status === 200) {
        this.setState({
          positionList: result.list
        })
      }
    } catch (error) {
      throw error
    }
  }
  componentDidMount () {
    this.fetchData()
  }

  renderHighHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.headerLeftTop}>
          <Text style={{fontSize: 26, color: colors.orange2, fontWeight: 'bold'}}>高薪</Text>
          <Text style={{fontSize: 26, fontWeight: 'bold'}}>优选</Text>
        </View>
        <Text style={{color: colors.greyLight}}>不止于你期望薪资的优质职位</Text>
      </View>
      <View style={styles.headerRight}>
        <MaterialCommunityIcons name="blur" size={60} color={colors.yellow2} />
      </View>
    </View>
  )

  renderFireHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.headerLeftTop}>
          <Text style={{fontSize: 26, color: colors.orange2, fontWeight: 'bold'}}>热门</Text>
          <Text style={{fontSize: 26, fontWeight: 'bold'}}>职位</Text>
        </View>
        <Text style={{color: colors.greyLight}}>你的同行们感兴趣的人气职位</Text>
      </View>
      <View style={styles.headerRight}>
        <MaterialCommunityIcons name="fire" size={60} color={colors.orange1} />
      </View>
    </View>
  )

  renderHeader = () => {
    const value = this.props.navigation.getParam('value')
    return value === 'Fire' ? this.renderFireHeader() : this.renderHighHeader()
  }

  renderItem = ({item}) => (
    <PositionItem {...item} />
  )
  
  keyExtractor= item => String(item._id)
  render() {
    const title = this.props.navigation.getParam('title')
    const {scrollY} = this.state
    const bg = scrollY.interpolate({
      inputRange: [0.01, 100],
      outputRange: [colors.grey4, colors.white],
      extrapolate: 'clamp'
    })
    const caclOpacity = scrollY.interpolate({
      inputRange: [0.01, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.wrapper}>
        <Animated.View style={[styles.fixedHeader, {backgroundColor: bg}]}>
          <HeaderButton left style={{marginTop: 40, paddingLeft: 15}} onPress={() => this.props.navigation.goBack(null)}>
            <Ionicons name="ios-arrow-back" size={30} color={colors.greyLight} />
          </HeaderButton>
          <Animated.Text style={{flex: 1, textAlign: 'center', marginTop: 40, color: colors.greyDark, fontWeight: 'bold', fontSize: 16, opacity: caclOpacity}}>{title}</Animated.Text>
        </Animated.View>
          <FlatList
          data={this.state.positionList}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.grey4,
    paddingTop: 70
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  headerLeftTop: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  headerRight: {
    paddingRight: 20,
  },
  fixedHeader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    flexDirection: 'row',
    height: 76,
    alignItems: 'center',
    zIndex: 20
    // shadowColor: colors.greyDark,
    // shadowOffset: {
    //   width: 0.1,
    //   height: 0
    // },
    // shadowOpacity: .2,
    // shadowRadius: 2,
  }
})

export default connect(state => ({
  user: state.user
}))(FireOrHighScreen)
